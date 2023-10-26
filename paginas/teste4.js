import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import peFundo from './labicBg.png';

const Teste4 = ({ navigation, route }) => {
    const [listaBotoesTeste4, setlistaBotoesTeste4] = useState([false, false, false, false, false, false, false, false, false]);

    const handleButtonPress = (index) => {
        let newLista = [...listaBotoesTeste4];
        newLista[index] = true;
        setlistaBotoesTeste4(newLista);
    };

    const navigateToTest5 = () => {
        navigation.navigate('Teste5', {
            paciente: route.params.paciente,
            listaBotoesTeste1: route.params.listaBotoesTeste1,
            listaBotoesTeste2: route.params.listaBotoesTeste2,
            listaBotoesTeste3: route.params.listaBotoesTeste3,
            listaBotoesTeste4: route.params.listaBotoesTeste4
        });
    }

    return (
        <ImageBackground source={peFundo} style={styles.container}>
            <Text>Teste 4</Text>

            {/* Botões */}
            <TouchableOpacity style={styles.roundButton1} onPress={() => handleButtonPress(0)} />
            <TouchableOpacity style={styles.roundButton2} onPress={() => handleButtonPress(1)}/>
            <TouchableOpacity style={styles.roundButton3} onPress={() => handleButtonPress(2)} />
            <TouchableOpacity style={styles.roundButton4} onPress={() => handleButtonPress(3)}/>
           
            <TouchableOpacity style={styles.navigateButton} onPress={navigateToTest5}>
                <Text style={styles.navigateButtonText}>Próximo</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const buttonSize = Dimensions.get('window').width * 0.10;

const roundButtonBase = {  
    width: buttonSize, 
    height: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: 'red',
    position: 'absolute'
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100%',
        width: '100%',

    },
    roundButton1: {  
        ...roundButtonBase,
        top: '53%',
        left: '85%'  // meio pé esquerdo, 1º
    },
    roundButton2: {  
        ...roundButtonBase,
        bottom: '40%',
        right: '30%'// pe esquerdo, meio, 1°
    },
    roundButton3: {  
        ...roundButtonBase,
        bottom: '40%',
        left: '29%'// pe esquerdo, meio, 1°
    },
    roundButton4: {  
        ...roundButtonBase,
        bottom: '43%',
        right: '80%'// pe esquerdo, meio, 1°
    },
    
    navigateButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        position: 'relative'  // mudamos de 'absolute' para 'relative' para o botão aparecer logo abaixo dos botões redondos
    },
    navigateButtonText: {
        color: 'white',
        fontSize: 16
    }});

    export default Teste4;
