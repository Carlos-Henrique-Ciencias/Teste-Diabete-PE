import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando suas páginas
import SplashScreen from './paginas/SplashScreen'; // Certifique-se de que o nome do arquivo está correto
import Cadastro from './paginas/inicio';
import Teste1 from './paginas/teste1';
import Teste2 from './paginas/teste2';
import Teste3 from './paginas/teste3';
import Teste4 from './paginas/teste4';
import Teste5 from './paginas/teste5';
import Teste6 from './paginas/teste6';
import Final from './paginas/final';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Esconde o cabeçalho para a SplashScreen
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Teste1" component={Teste1} />
        <Stack.Screen name="Teste2" component={Teste2} />
        <Stack.Screen name="Teste3" component={Teste3} />
        <Stack.Screen name="Teste4" component={Teste4} />
        <Stack.Screen name="Teste5" component={Teste5} />
        <Stack.Screen name="Teste6" component={Teste6} />
        <Stack.Screen name="Final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
