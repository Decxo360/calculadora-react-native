import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState('0');
    const [numAnterior, setNumAnterior] = useState('0')
    const ultimaOpercion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumAnterior('0');
    }

    const armarNumero = (numeroTexto: string) =>{
        if (numero.includes('.') && numeroTexto === ".") return; 
        
        if (numero.startsWith('0')||numero.startsWith('-0')){
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
            }else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero+numeroTexto);
            }else if (numeroTexto !== '0' && numero.includes('.')) {
                setNumero(numeroTexto)
            }else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero);
            }else{
                setNumero(numero+numeroTexto);
            }
        }else{
            setNumero( numero + numeroTexto)
        }
    }

    const cambiarNumeroPorAnterior =()=>{
        if (numero.endsWith('.')) {
            setNumAnterior(numero.slice(0-1));
        }else{
            setNumAnterior(numero);
        }
        setNumero('0');
    }
 
    const btnDelete = () =>{
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        }
        if (numeroTemp.length > 1) {
            //Slice(0,-1) elimina la ultima posicion del valor
            setNumero(negativo+numeroTemp.slice(0,-1));
        }else{
            setNumero('0');
        }
    }

    const positivoNegativo = () =>{
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        }else{
            setNumero('-' + numero);
        }
    }
    const btnSumar = () =>{
        cambiarNumeroPorAnterior();
        ultimaOpercion.current = Operadores.sumar;
    }
    const btnRestar = () =>{
        cambiarNumeroPorAnterior();
        ultimaOpercion.current = Operadores.restar;
    }
    const btnMultiplicar = () =>{
        cambiarNumeroPorAnterior();
        ultimaOpercion.current = Operadores.multiplicar;
    }
    const btnDividir = () =>{
        cambiarNumeroPorAnterior();
        ultimaOpercion.current = Operadores.dividir;
   }

   const calcular = () =>{
       const actual = Number( numero);
       const anterior = Number( numAnterior);
       switch (ultimaOpercion.current) {
           case Operadores.sumar:
               setNumero(`${actual+anterior}`);
               break;
            case Operadores.restar:
                setNumero(`${anterior-actual}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${actual*anterior}`);
                break;
             case Operadores.dividir:
                setNumero(`${anterior/actual}`);
                break;
            default:
                break;
              }
       setNumAnterior("0")

    
   }
   return {
    numAnterior,
    numero,
    limpiar,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    positivoNegativo,
    armarNumero,
    calcular
}
}
