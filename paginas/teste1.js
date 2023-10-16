import React, { useState } from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import peFundo from './imagemPe2.png'; // Ajuste o caminho conforme a localização de seu arquivo

const Teste1 = ({ navigation, route }) => {
    const [listaBotoesTeste1, setListaBotoesTeste1] = useState([false, false, false, false, false, false, false, false, false]);

    const handleButtonPress = (index) => {
        let newLista = [...listaBotoesTeste1];
        newLista[index] = true;
        setListaBotoesTeste1(newLista);
    };

    const navigateToTeste2 = () => {
        navigation.navigate('Teste2', { 
            paciente: route.params.paciente,
            listaBotoesTeste1: route.params.listaBotoesTeste1 });
    }

    return (
        <ImageBackground source={peFundo} style={styles.container}>
            <Text>Teste 1</Text>

            {/* Botões */}
            <TouchableOpacity style={styles.roundButton1} onPress={() => handleButtonPress(0)} />
            <TouchableOpacity style={styles.roundButton2} onPress={() => handleButtonPress(1)} />
            <TouchableOpacity style={styles.roundButton3} onPress={() => handleButtonPress(2)} />
            <TouchableOpacity style={styles.roundButton4} onPress={() => handleButtonPress(3)} />
            <TouchableOpacity style={styles.roundButton5} onPress={() => handleButtonPress(4)} />
            <TouchableOpacity style={styles.roundButton6} onPress={() => handleButtonPress(5)} />
            <TouchableOpacity style={styles.roundButton7} onPress={() => handleButtonPress(6)} />
            <TouchableOpacity style={styles.roundButton8} onPress={() => handleButtonPress(7)} />
            <TouchableOpacity style={styles.roundButton9} onPress={() => handleButtonPress(8)} />
            
            <TouchableOpacity style={styles.navigateButton} onPress={navigateToTeste2}>
                <Text style={styles.navigateButtonText}>Ir para Teste2</Text>
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
        width: '100%',
        height: '100%',
    },
    roundButton1: {  
        ...roundButtonBase,
        top: '30%',
        left: '24%'
    },
    roundButton2: {  
        ...roundButtonBase,
        top: '50%',
        left: '85%'  // Centrado horizontalmente
    },
    roundButton3: {  
        ...roundButtonBase,
        top: '50%',
        right: '20%'  // 10% da direita
    },
    roundButton4: {  
        ...roundButtonBase,
        top: '50%',  // Centrado verticalmente
        left: '10%'
    },
    roundButton5: {  
        ...roundButtonBase,
        top: '55%',
        left: '25%'
    },
    roundButton6: {  
        ...roundButtonBase,
        top: '29%',
        right: '20%'
    },
    roundButton7: {  
        ...roundButtonBase,
        bottom: '10%',  // Posicionado a 10% do fundo
        left: '10%'
    },
    roundButton8: {  
        ...roundButtonBase,
        bottom: '10%',
        left: '45%'
    },
    roundButton9: {  
        ...roundButtonBase,
        bottom: '10%',
        right: '10%'
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
    }

});

export default Teste1;