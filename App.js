import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContatoScreen from './ContatoScreen'; // Certifique-se de que o caminho está correto
import ExperienciaScreen from './ExperienciaScreen'; // Certifique-se de que o caminho está correto
import FormacaoScreen from './FormacaoScreen'; // Certifique-se de que o caminho está correto

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/julia.jpg')}
        style={{ width: 200, height: 200 }}
      />
      <Text>JÚLIA MENEZES</Text>
      <Button
        title="Ver detalhes"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Contato"
        onPress={() => navigation.navigate('Contato')}
      />
      <Button
        title="Experiência"
        onPress={() => navigation.navigate('Experiencia')}
      />
      <Button
        title="Formação"
        onPress={() => navigation.navigate('Formacao')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Tenho 23 anos e no momento sou estudante do curso de Análise e desenvolvimento de sistemas no SENAC, meus hobbies são ouvir música, tocar violão e ler livros.</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
        <Stack.Screen name="Experiencia" component={ExperienciaScreen} />
        <Stack.Screen name="Formacao" component={FormacaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



