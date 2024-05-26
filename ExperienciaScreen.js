import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela de Experiência</Text>
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
