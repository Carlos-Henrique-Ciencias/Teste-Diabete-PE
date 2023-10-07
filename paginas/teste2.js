import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const Teste2 = ({ navigation, route }) => {
    const [listaBotoesTeste2, setListaBotoesTeste2] = useState([false, false, false, false, false, false, false, false, false]);

    const handleButtonPress = (index) => {
        let newLista = [...listaBotoesTeste2];
        newLista[index] = true;
        setListaBotoesTeste2(newLista);
    };

    const navigateToTeste3 = () => {
        navigation.navigate('Teste3', {
            listaBotoesTeste1: route.params.listaBotoesTeste1,
            listaBotoesTeste2 
        });
    }

    return (
        <View style={styles.container}>
            <Text>Teste 2</Text>

            {/* Botões */}
            <TouchableOpacity style={styles.botao1} onPress={() => handleButtonPress(0)} />
            <TouchableOpacity style={styles.botao2} onPress={() => handleButtonPress(1)} />
            <TouchableOpacity style={styles.botao3} onPress={() => handleButtonPress(2)} />
            <TouchableOpacity style={styles.botao4} onPress={() => handleButtonPress(3)} />
            <TouchableOpacity style={styles.botao5} onPress={() => handleButtonPress(4)} />
            <TouchableOpacity style={styles.botao6} onPress={() => handleButtonPress(5)} />
            <TouchableOpacity style={styles.botao7} onPress={() => handleButtonPress(6)} />
            <TouchableOpacity style={styles.botao8} onPress={() => handleButtonPress(7)} />
            <TouchableOpacity style={styles.botao9} onPress={() => handleButtonPress(8)} />
            
            <TouchableOpacity style={styles.botaodenavegacao} onPress={navigateToTeste3}>
                <Text style={styles.botaodenavegacaoText}>Ir para Teste3</Text>
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
    botao1: {  
        ...roundButtonBase,
        top: '10%',
        left: '10%'
    },
    botao2: {  
        ...roundButtonBase,
        top: '10%',
        left: '45%'  // Centrado horizontalmente
    },
    botao3: {  
        ...roundButtonBase,
        top: '10%',
        right: '10%'  // 10% da direita
    },
    botao4: {  
        ...roundButtonBase,
        top: '45%',  // Centrado verticalmente
        left: '10%'
    },
    botao5: {  
        ...roundButtonBase,
        top: '45%',
        left: '45%'
    },
    botao6: {  
        ...roundButtonBase,
        top: '45%',
        right: '10%'
    },
    botao7: {  
        ...roundButtonBase,
        bottom: '10%',  // Posicionado a 10% do fundo
        left: '10%'
    },
    botao8: {  
        ...roundButtonBase,
        bottom: '10%',
        left: '45%'
    },
    botao9: {  
        ...roundButtonBase,
        bottom: '10%',
        right: '10%'
    },
    botaodenavegacao: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        position: 'relative'  // mudamos de 'absolute' para 'relative' para o botão aparecer logo abaixo dos botões redondos
    },
    botaodenavegacaoText: {
        color: 'white',
        fontSize: 16
    }

});

export default Teste2;
