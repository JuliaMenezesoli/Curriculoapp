import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FormacaoScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela de Formação</Text>
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


