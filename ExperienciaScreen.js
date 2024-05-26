import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaScreen() {
  return (
    <View style={styles.container}>
      <Text>Trabalhei por um periodo de 11 meses em uma empresa de turismo religioso, no momento estou trabalhando como auxiliar administrativo em uma empresa. já participei de projetos ambientais como o Habitah e linguagens como 'Projeto Ganhe o Mundo' </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
