import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

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
    const page = PDFPage.create()
      .setMediaBox(200, 200)
      .drawText('Resultados dos Testes:', {
          x: 10,
          y: 180,
          fontSize: 15
      })
      .drawText(`Teste 1: ${resultTeste1}`, { x: 10, y: 160, fontSize: 10 })
      .drawText(`Teste 2: ${resultTeste2}`, { x: 10, y: 140, fontSize: 10 })
      .drawText(`Teste 3: ${resultTeste3}`, { x: 10, y: 120, fontSize: 10 })
      .drawText(`Teste 4: ${resultTeste4}`, { x: 10, y: 100, fontSize: 10 })
      .drawText(`Teste 5: ${resultTeste5}`, { x: 10, y: 80, fontSize: 10 })
      .drawText(`Teste 6: ${resultTeste6}`, { x: 10, y: 60, fontSize: 10 });

    const docsDir = PDFLib.getDocumentsDirectory();
    const pdfPath = `${docsDir}/resultado.pdf`;
    
    PDFDocument.create(pdfPath)
      .addPages(page)
      .write() // retorna uma promessa
      .then(path => {
          console.log('PDF criado em: ' + path);
          // Aqui, você pode fazer algo após o PDF ser criado, como mostrar uma mensagem ao usuário
      })
      .catch(error => {
          console.error(error);
      });
}

  
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