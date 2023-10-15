import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const Teste3 = ({ navigation, route }) => {
    const [listaBotoesTeste3, setListaBotoesTeste3] = useState([false, false, false, false, false, false, false, false, false]);

    const handleButtonPress = (index) => {
        let newLista = [...listaBotoesTeste3];
        newLista[index] = true;
        setListaBotoesTeste3(newLista);
    };

    const navigateToTest4 = () => {
        navigation.navigate('Teste4', {
            paciente: route.params.paciente,
            listaBotoesTeste1: route.params.listaBotoesTeste1,
            listaBotoesTeste2: route.params.listaBotoesTeste2,
            listaBotoesTeste3: route.params.listaBotoesTeste3
        });
    }

    return (
        <View style={styles.container}>
            <Text>Teste 3</Text>

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
            
            <TouchableOpacity style={styles.navigateButton} onPress={navigateToTest4}>
                <Text style={styles.navigateButtonText}>Ir para o Final</Text>
            </TouchableOpacity>
        </View>
    );
};

const buttonSize = Dimensions.get('window').width * 0.25;

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
        justifyContent: 'center'
    },
    roundButton1: {  
        ...roundButtonBase,
        top: '10%',
        left: '10%'
    },
    roundButton2: {  
        ...roundButtonBase,
        top: '10%',
        left: '45%'  // Centrado horizontalmente
    },
    roundButton3: {  
        ...roundButtonBase,
        top: '10%',
        right: '10%'  // 10% da direita
    },
    roundButton4: {  
        ...roundButtonBase,
        top: '45%',  // Centrado verticalmente
        left: '10%'
    },
    roundButton5: {  
        ...roundButtonBase,
        top: '45%',
        left: '45%'
    },
    roundButton6: {  
        ...roundButtonBase,
        top: '45%',
        right: '10%'
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
    }});

    export default Teste3;
