import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Teste1 = ({ navigation }) => {
    const [teste_1, setTeste_1] = useState(false);

    return (
        <View style={styles.container}>
            <Text>Teste 1</Text>
            
            {/* Botão de Exemplo 1 */}
            <TouchableOpacity 
                style={styles.button1}
                onPress={() => {
                    setTeste_1(true);
                    navigation.navigate('Teste2', { teste_1 });
                }}
            >
                <Text style={styles.buttonText}>Opção 1</Text>
            </TouchableOpacity>
            
            {/* Botão de Exemplo 2 */}
            <TouchableOpacity 
                style={styles.button2}
                onPress={() => {
                    // Aqui você pode adicionar sua lógica para este botão
                }}
            >
                <Text style={styles.buttonText}>Opção 2</Text>
            </TouchableOpacity>
            
            {/* Adicione mais botões conforme necessário, seguindo a mesma estrutura. */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    button1: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#2196F3',
        borderRadius: 5
        // Adicione outros estilos para o botão 1 aqui
    },
    button2: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#4CAF50',
        borderRadius: 5
        // Adicione outros estilos para o botão 2 aqui
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
});

export default Teste1;
