// [ARQUIVO: App.tsx]
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Vamos importar nossas telas
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ReviewScreen from './src/screens/ReviewScreen';
// (Aqui importaremos as telas de Pesquisa e Perfil quando as criarmos)

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/**
 * Esta é a "Pilha" (Stack) da aba Home.
 * Ela controla a navegação *dentro* da primeira aba.
 * Ex: Home -> DetalhesDoJogo
 */
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Games for All - Reviewer' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Detalhes do Jogo' }}
      />
      {/* ADICIONE A NOVA TELA ABAIXO */}
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{ title: 'Escrever Review' }}
      />
    </Stack.Navigator>
  );
}

// (Aqui criaríamos as Stacks de Pesquisa e Perfil)

function App(): React.JSX.Element { // A única mudança é aqui, para o TypeScript
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {/* Nossas 3 abas principais na parte inferior do app */}
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{ title: 'Home' }}
        />
        {/* <Tab.Screen name="SearchTab" component={SearchStack} options={{ title: 'Pesquisa' }} />
        <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ title: 'Perfil' }} /> 
        */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;