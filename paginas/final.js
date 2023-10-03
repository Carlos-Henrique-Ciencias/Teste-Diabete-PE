import React from 'react';
import { View, Text } from 'react-native';

// Componente da página Final
const Final = ({ route }) => {
    
    // Desestruturação das variáveis de teste passadas como parâmetros
    const { teste_1, teste_2, teste_3 } = route.params;
    
    // Array para armazenar os testes positivos
    let resultados = [];

    // Verifica cada teste e, se for positivo (true), adiciona o nome do teste ao array
    if (teste_1) resultados.push("Teste 1");
    if (teste_2) resultados.push("Teste 2");
    if (teste_3) resultados.push("Teste 3");

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Verifica se há algum teste positivo e exibe a mensagem correspondente */}
            {resultados.length > 0 ? (
                <Text>Positivo para: {resultados.join(", ")}</Text>
            ) : (
                <Text>Os testes não detectaram condições positivas.</Text>
            )}
        </View>
    );
};

export default Final;
