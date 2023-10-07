import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Final = ({ route }) => {
  // Suponha que os arrays booleanos são passados como props ao navegar para esta página
  const { listaBotoesTeste1, listaBotoesTeste2, listaBotoesTeste3 } = route.params;

  // Função para verificar se existe um valor 'true' em um array
  const checkForPositive = (testList) => {
    
    if(!testList) return "Dados não fornecidos";
    if(testList.includes(true)) return "POSITIVO";
    else return "NEGATIVO";

  };
    

  // Verificar os resultados dos três testes
  const resultTeste1 = checkForPositive(listaBotoesTeste1);
  const resultTeste2 = checkForPositive(listaBotoesTeste2);
  const resultTeste3 = checkForPositive(listaBotoesTeste3);

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        O paciente apresenta {resultTeste1} para o teste 1, 
        {resultTeste2} para o teste 2, 
        e {resultTeste3} para o teste 3.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  resultText: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default Final;
