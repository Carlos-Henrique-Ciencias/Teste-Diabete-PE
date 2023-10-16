import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import peFundo from '../imagensDoCarlao/labicBg.png'; // Ajuste o caminho conforme a localização de seu arquivo

const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState(''); // Adicionando o CPF

    const handleCadastro = () => {
        const paciente = [nome, idade, cpf]; // Salvando os valores em uma lista
        navigation.navigate('Teste1', { paciente:paciente });
    }


    return (
        <ImageBackground source={peFundo} style={styles.container}>
            <Text>Cadastro do Paciente</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nome do Paciente"
                value={nome}
                onChangeText={setNome}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Idade do Paciente"
                value={idade}
                onChangeText={setIdade}
                keyboardType="number-pad"
            />

            <TextInput //Campo para inserir o CPF
                style={styles.input}
                placeholder="CPF do Paciente"
                value={cpf}
                onChangeText={setCpf}
                keyboardType="number-pad"
                maxLength={11} // CPF possui 11 dígitos
            />
            
            <Button
                title="Prosseguir para Teste 1"
                onPress={handleCadastro}
            />
         </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10
    },

});

export default Cadastro;
