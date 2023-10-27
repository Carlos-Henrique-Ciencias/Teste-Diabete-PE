import React, { useState } from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import labicBg from './labicBg.png';
import peFundo2 from './peFundo3.png'

const Teste2 = ({ navigation, route }) => {
    const [listaBotoesTeste2, setlistaBotoesTeste2] = useState([false, false, false, false]);
    const handleButtonPress = (index) => {
        let newLista = [...listaBotoesTeste2];
        newLista[index] = true;
        setlistaBotoesTeste2(newLista);
    };

    const navigateToTest3 = () => {
        navigation.navigate('Teste3', {
            paciente: route.params.paciente,
            listaBotoesTeste1: route.params.listaBotoesTeste1,
            listaBotoesTeste2: listaBotoesTeste2
        });
    }

    return (
        <ImageBackground source={labicBg} style={styles.container}>
            <Image source={peFundo2} style={styles.peFundo2Style} />
            <Text>Risco de Doença Arterial</Text>

            {/* Botões */}
            <View style={styles.overlayContainer}>
            <TouchableOpacity style={styles.roundButton1} onPress={() => handleButtonPress(0)} />
            <TouchableOpacity style={styles.roundButton2} onPress={() => handleButtonPress(1)}/>
            <TouchableOpacity style={styles.roundButton3} onPress={() => handleButtonPress(2)} />
            <TouchableOpacity style={styles.roundButton4} onPress={() => handleButtonPress(3)}/>
           
            
            <TouchableOpacity style={styles.navigateButton} onPress={navigateToTest3}>
                <Text style={styles.navigateButtonText}>Próximo</Text>
            </TouchableOpacity>
            </View>
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
    },
    peFundo2Style: {
        position: 'absolute',
        width: '100%', 
        height: '100%',
        resizeMode: 'contain',
    },
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
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
        marginTop: 550,
          // mudamos de 'absolute' para 'relative' para o botão aparecer logo abaixo dos botões redondos
        right: '20%',
        
    },
    navigateButtonText: {
        color: 'white',
        fontSize: 16
    }

});

    export default Teste2;
