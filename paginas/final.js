import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const Final = ({ route }) => {
  const { paciente, listaBotoesTeste1, listaBotoesTeste2, listaBotoesTeste3, listaBotoesTeste4, listaBotoesTeste5, listaBotoesTeste6 } = route.params;

  const checkForPositive = (testList) => {
    if (!testList) return "Dados não fornecidos";
    return testList.includes(true) ? "POSITIVO" : "NEGATIVO";
  };

  const resultTeste1 = checkForPositive(listaBotoesTeste1);
  const resultTeste2 = checkForPositive(listaBotoesTeste2);
  const resultTeste3 = checkForPositive(listaBotoesTeste3);
  const resultTeste4 = checkForPositive(listaBotoesTeste4);
  const resultTeste5 = checkForPositive(listaBotoesTeste5);
  const resultTeste6 = checkForPositive(listaBotoesTeste6);

  const createPDF = async () => {
    const htmlContent = `
    <html>
  <head>
    <style>
      body, html {
        height: 100%;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      .content {
        min-height: calc(100% - 100px); /* Reservando espaço para as assinaturas */
        padding: 10px;
      }
      .header, .results { text-align: center; }
      .header h1, .results h2, p { font-size: 22px; } /* Tamanho da fonte aumentado */
      .details, .results { margin-top: 100px }
      .footer { position: absolute; bottom: 10px; width: 100%; }
      .signatures {
        display: flex;
        justify-content: space-around;
      }
      .signature {
        border-top: 3px solid #000;
        text-align: center;
        padding-top: 10px;
        width: 40%; /* Largura da linha de assinatura */
      }
    </style>
  </head>
  <body>
    <div class="content">
      <div class="header">
        <h1>Informações do Paciente</h1>
      </div>
      <div class="details">
        <p><strong>Nome:</strong> ${paciente.nome || 'Não fornecido'}</p>
        <p><strong>Idade:</strong> ${paciente.idade || 'Não fornecido'}</p>
        <p><strong>CPF:</strong> ${paciente.cpf || 'Não fornecido'}</p>
      </div>
      <div class="results">
        <h2>Resultados dos Testes:</h2>
        <p>Teste Doença Arterial, Planta: ${resultTeste1}</p>
        <p>Teste Doença Arterial, Dorso: ${resultTeste2}</p>
        <p>Teste Diapasão, Planta: ${resultTeste3}</p>
        <p>Teste Diapasão, Dorso: ${resultTeste4}</p>
        <p>Teste Percepção Pressão, Planta: ${resultTeste5}</p>
        <p>Teste Percepção Pressão, Dorso: ${resultTeste6}</p>
      </div>
    </div>
    <div class="footer">
      <div class="signatures">
        <div class="signature">
          <p>Pesquisador(a)</p>
        </div>
        <div class="signature">
          <p>Médico(a) Responsável</p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

    const pdf = await Print.printToFileAsync({
      html: htmlContent,
      base64: false
    });

    if (pdf.uri) {
      console.log(`PDF criado em: ${pdf.uri}`);
      await Sharing.shareAsync(pdf.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        O paciente {paciente.nome} apresenta: 
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
    padding: 20,
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Final;
