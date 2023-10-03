import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando suas páginas
import Cadastro from './path_to_file/Cadastro';
import Teste1 from './path_to_file/Teste1';
import Teste2 from './path_to_file/Teste2';
import Teste3 from './path_to_file/Teste3';
import Final from './path_to_file/Final';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Teste1" component={Teste1} />
        <Stack.Screen name="Teste2" component={Teste2} />
        <Stack.Screen name="Teste3" component={Teste3} />
        <Stack.Screen name="Final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}