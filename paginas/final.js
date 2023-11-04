import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const Final = ({ route }) => {
  const { paciente, listaBotoesTeste1, listaBotoesTeste2, listaBotoesTeste3, listaBotoesTeste4, listaBotoesTeste5, listaBotoesTeste6 } = route.params;

  const checkForPositive = (testList) => {
    if (!testList) return "Dados não fornecidos";
    if (testList.includes(true)) return "POSITIVO";
    else return "NEGATIVO";
  };

  const resultTeste1 = checkForPositive(listaBotoesTeste1);
  const resultTeste2 = checkForPositive(listaBotoesTeste2);
  const resultTeste3 = checkForPositive(listaBotoesTeste3);
  const resultTeste4 = checkForPositive(listaBotoesTeste4);
  const resultTeste5 = checkForPositive(listaBotoesTeste5);
  const resultTeste6 = checkForPositive(listaBotoesTeste6);

  const createPDF = async () => {
    const htmlContent = `
    <h2>Resultados dos Testes:</h2>
    <p>Teste 1: ${resultTeste1}</p>
    <p>Teste 2: ${resultTeste2}</p>
    <p>Teste 3: ${resultTeste3}</p>
    <p>Teste 4: ${resultTeste4}</p>
    <p>Teste 5: ${resultTeste5}</p>
    <p>Teste 6: ${resultTeste6}</p>
    `;
    const pdf = await Print.printToFileAsync({
      html: htmlContent,
      base64: false
    });
    
    if (pdf.uri) {
      console.log(`PDF criado em: ${pdf.uri}`);
      
      // Aqui compartilha o arquivo PDF
      await Sharing.shareAsync(pdf.uri);
  }
};

return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        O paciente {paciente[0]} apresenta: 
        {"\n"}- {resultTeste1} para o teste 1,
        {"\n"}- {resultTeste2} para o teste 2, 
        {"\n"}- {resultTeste3} para o teste 3, 
        {"\n"}- {resultTeste4} para o teste 4,
        {"\n"}- {resultTeste5} para o teste 5, 
        {"\n"}- {resultTeste6} para o teste 6.
      </Text>
      <Button title="Gerar PDF" onPress={createPDF} />
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
    fontSize: 18, // Ajustado para uma melhor visualização do texto quebrado em várias linhas
    textAlign: 'center',
    marginBottom: 20
  }
});

export default Final;