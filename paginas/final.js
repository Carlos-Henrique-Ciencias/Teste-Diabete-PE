import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';


const Final = ({ route }) => {
  const { paciente, listaBotoesTeste1, listaBotoesTeste2, listaBotoesTeste3, listaBotoesTeste4, listaBotoesTeste5,listaBotoesTeste6 } = route.params;

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
  const resultTeste4 = checkForPositive(listaBotoesTeste4);
  const resultTeste5 = checkForPositive(listaBotoesTeste5);
  const resultTeste6 = checkForPositive(listaBotoesTeste6);

  const createPDF = async () => {
    const page = PDFPage.create()
      .setMediaBox(200, 200)
      .drawText('Dados do Paciente:', {
        x: 10,
        y: 180,
        size: 20
      })
      .drawText(`Nome: ${paciente[0]}`, { x: 10, y: 160 })
      .drawText(`Idade: ${paciente[1]}`, { x: 10, y: 140 })
      .drawText(`CPF: ${paciente[2]}`, { x: 10, y: 120 })
      .drawText('Resultados dos Testes:', { x: 10, y: 100, size: 20 })
      .drawText(`Teste 1: ${resultTeste1}`, { x: 10, y: 80 })
      .drawText(`Teste 2: ${resultTeste2}`, { x: 10, y: 70 })
      .drawText(`Teste 3: ${resultTeste3}`, { x: 10, y: 60 })
      .drawText(`Teste 4: ${resultTeste4}`, { x: 10, y: 50 })
      .drawText(`Teste 5: ${resultTeste5}`, { x: 10, y: 40 })
      .drawText(`Teste 6: ${resultTeste6}`, { x: 10, y: 20 })

    const docsDir = await PDFLib.getDocumentsDirectory();
    const pdfPath = `${docsDir}/resultado.pdf`;

    PDFDocument.create(pdfPath)
      .addPages(page)
      .write() // will return a promise that resolves with the PDF's path
      .then(path => {
        console.log('PDF created at: ' + path);
        // Aqui você pode adicionar lógica para abrir ou compartilhar o PDF
      });
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        O {paciente} apresenta {resultTeste1} para o teste 1, 
        {resultTeste2} para o teste 2, 
        e {resultTeste3} para o teste 3.{resultTeste4},{resultTeste5},{resultTeste6}
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
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20 // adicionado espaço entre o texto e o botão
  }
});


export default Final;
