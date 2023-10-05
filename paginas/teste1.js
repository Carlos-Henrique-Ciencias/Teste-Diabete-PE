// Importando as dependências necessárias
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Definindo o componente Teste1
const Teste1 = ({ navigation }) => {
    // Inicializando o state teste_1 com o valor false
    const [teste_1, setTeste_1] = useState(false);

    // Retornando a estrutura JSX do componente
    return (
        <View style={styles.container}>  {/* Container principal*/}
            <Text>Teste 1</Text>  {/* Título do teste */}

            {/* Botões redondos */}
            <TouchableOpacity style={styles.roundButton1} onPress={() => {
    setTeste_1(true);
    navigation.navigate('Teste1', { teste_1 });
}} />


            <TouchableOpacity style={styles.roundButton2} onPress={() => {/* Lógica do botão 2 */}} />
            <TouchableOpacity style={styles.roundButton3} onPress={() => {/* Lógica do botão 3 */}} />
            <TouchableOpacity style={styles.roundButton4} onPress={() => {/* Lógica do botão 4 */}} />
            <TouchableOpacity style={styles.roundButton5} onPress={() => {/* Lógica do botão 5 */}} />
            <TouchableOpacity style={styles.roundButton6} onPress={() => {/* Lógica do botão 6 */}} />
            <TouchableOpacity style={styles.roundButton7} onPress={() => {/* Lógica do botão 7 */}} />
            <TouchableOpacity style={styles.roundButton8} onPress={() => {/* Lógica do botão 8 */}} />
            <TouchableOpacity style={styles.roundButton9} onPress={() => {/* Lógica do botão 9 */}} />
        </View>
    );
};

// Definindo os estilos do componente

const buttonSize = Dimensions.get('window').width * 0.25;
const styles = StyleSheet.create({
    
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    roundButtonBase: {  
        width: buttonSize, 
        height: buttonSize,
        borderRadius: buttonSize / 2,
        backgroundColor: 'red',
        position: 'absolute'  // Usamos o posicionamento absoluto para ter controle total sobre a posição dos botões
    },
    roundButton1: {  
        ...this.roundButtonBase,
        top: '10%',  // Posicionado a 10% do topo
        left: '10%'  // 10% da esquerda
    },
    roundButton2: {  
        ...this.roundButtonBase,
        top: '10%',
        left: '45%'  // Centrado horizontalmente
    },
    roundButton3: {  
        ...this.roundButtonBase,
        top: '10%',
        right: '10%'  // 10% da direita
    },
    roundButton4: {  
        ...this.roundButtonBase,
        top: '45%',  // Centrado verticalmente
        left: '10%'
    },
    roundButton5: {  
        ...this.roundButtonBase,
        top: '45%',
        left: '45%'
    },
    roundButton6: {  
        ...this.roundButtonBase,
        top: '45%',
        right: '10%'
    },
    roundButton7: {  
        ...this.roundButtonBase,
        bottom: '10%',  // Posicionado a 10% do fundo
        left: '10%'
    },
    roundButton8: {  
        ...this.roundButtonBase,
        bottom: '10%',
        left: '45%'
    },
    roundButton9: {  
        ...this.roundButtonBase,
        bottom: '10%',
        right: '10%'
    }
});




// Exportando o componente para ser utilizado em outros lugares do projeto
export default Teste1;
