import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; 

import ContatoScreen from './ContatoScreen'; 
import ExperienciaScreen from './ExperienciaScreen'; 
import FormacaoScreen from './FormacaoScreen'; 

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
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão para acessar a localização foi negada');
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tenho 23 anos e no momento sou estudante do curso de Análise e desenvolvimento de sistemas no SENAC, meus hobbies são ouvir música, tocar violão e ler livros.</Text>
      <View style={styles.mapContainer}>
        {location && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Sua Localização"
            />
          </MapView>
        )}
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
  },
  map: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
});






