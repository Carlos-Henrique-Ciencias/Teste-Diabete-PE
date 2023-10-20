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
            {/*<Text>Teste 1</Text>*/}

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
            <TouchableOpacity style={styles.roundButton10} onPress={() => handleButtonPress(9)} />
            <TouchableOpacity style={styles.roundButton11} onPress={() => handleButtonPress(10)} />
            <TouchableOpacity style={styles.roundButton12} onPress={() => handleButtonPress(11)} />
            <TouchableOpacity style={styles.roundButton13} onPress={() => handleButtonPress(12)} />
            <TouchableOpacity style={styles.roundButton14} onPress={() => handleButtonPress(13)} />
            <TouchableOpacity style={styles.roundButton15} onPress={() => handleButtonPress(14)} />
            <TouchableOpacity style={styles.roundButton16} onPress={() => handleButtonPress(15)} />
            <TouchableOpacity style={styles.roundButton17} onPress={() => handleButtonPress(16)} />
            <TouchableOpacity style={styles.roundButton18} onPress={() => handleButtonPress(17)} />
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
        top: '77%',
        left: '27%' //baixo pé direito
    },
    roundButton2: {  
        ...roundButtonBase,
        top: '55%',
        left: '77%'  // meio pé esquerdo, 1º
    },
    roundButton3: {  
        ...roundButtonBase,
        top: '17%',
        right: '30%'  // alto pé esquerdo, 1°
    },
    roundButton4: {  
        ...roundButtonBase,
        top: '55%',  // meio pé direito, 1°
        left: '10%'
    },
    roundButton5: {  
        ...roundButtonBase,
        top: '53%',
        left: '30%'
    },
    roundButton6: {  
        ...roundButtonBase,
        top: '21%', //pe esquerdo dedo do meio
        right: '8%'
    },
    roundButton7: {  
        ...roundButtonBase,
        bottom: '62%',  // pé direito, mindinho
        left: '0%'
    },
    roundButton8: {  
        ...roundButtonBase,
        bottom: '15%', // baixo direito
        left: '58%'
    },
    roundButton9: {  
        ...roundButtonBase,
        bottom: '40%',
        right: '35%'// pe esquerdo, meio, 1°
    },
    roundButton10: {  
        ...roundButtonBase,
        bottom: '62%',
        right: '0%'// mindinho direito
    },
    roundButton11: {  
        ...roundButtonBase,
        bottom: '70%',
        right: '80%'// dedo meio direito
    },
    roundButton12: {  
        ...roundButtonBase,
        bottom: '76%',
        right: '62%'// dedao direito
    },
    roundButton13: {  
        ...roundButtonBase,
        bottom: '52%',
        right: '4%'// sup 3 direito
    },
    roundButton14: {  
        ...roundButtonBase,
        bottom: '62%',
        right: '18%'// sup 2 dir 
    },
    roundButton15: {  
        ...roundButtonBase,
        bottom: '60%',
        right: '35%'// sup 1 dir
    },
    roundButton16: {  
        ...roundButtonBase,
        bottom: '50%',
        right: '87%'// sup 1 esq
    },
    roundButton17: {  
        ...roundButtonBase,
        bottom: '58%',
        right: '75%'// sup 2 esq
    },
    roundButton18: {  
        ...roundButtonBase,
        bottom: '58%',
        right: '57%'// sup 3 esq
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

export default Teste1;