import React from 'react';
import { View, Text, Button } from 'react-native';

const Cadastro = ({ navigation }) => {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Cadastro do Paciente</Text>
            {/* Aqui, você pode adicionar campos de formulário para o cadastro do paciente. */}
            <Button
                title="Prosseguir para Teste 1"
                onPress={() => navigation.navigate('Teste1')}
            />
        </View>
    );
};

export default Cadastro;
