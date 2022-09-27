import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { Boton } from '../components/Boton'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'



export const CalculadoraScreen = () => {

    const {
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
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer} >

            {(numAnterior !== '0') && ( <Text style={styles.resultadoPequeno}>{numAnterior}</Text>)}

            <Text 
            style={styles.resultado}
            adjustsFontSizeToFit
            numberOfLines={1}
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                <Boton texto='C' color='#9B9B9B' accion={limpiar}></Boton>
                <Boton texto='+/-' color='#9B9B9B' accion={positivoNegativo}></Boton>
                <Boton texto='del' color='#9B9B9B' accion={btnDelete}></Boton>
                <Boton texto='/' color='#FF9427' accion={btnDividir}></Boton>
            </View>
            <View style={styles.fila}>
                <Boton texto='9' accion={armarNumero}></Boton>
                <Boton texto='8' accion={armarNumero}></Boton>
                <Boton texto='7' accion={armarNumero}></Boton>
                <Boton texto='*' color='#FF9427' accion={btnMultiplicar}></Boton>
            </View>
            <View style={styles.fila}>
                <Boton texto='6' accion={armarNumero}></Boton>
                <Boton texto='5' accion={armarNumero}></Boton>
                <Boton texto='4' accion={armarNumero}></Boton>
                <Boton texto='-' color='#FF9427' accion={btnRestar}></Boton>
            </View>
            <View style={styles.fila}>
                <Boton texto='3' accion={armarNumero}></Boton>
                <Boton texto='2' accion={armarNumero}></Boton>
                <Boton texto='1' accion={armarNumero} ></Boton>
                <Boton texto='+' color='#FF9427' accion={btnSumar}></Boton>
            </View>
            <View style={styles.fila}>
                <Boton texto='0' ancho accion={armarNumero}></Boton>
                <Boton texto='.' accion={armarNumero}></Boton>
                <Boton texto='=' color='#FF9427' accion={calcular}></Boton>
            </View>
            
        </View>
    )
}
