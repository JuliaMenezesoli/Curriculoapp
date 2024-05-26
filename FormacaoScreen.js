import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FormacaoScreen() {
  return (
    <View style={styles.container}>
      <Text>Graduada em Gestão de Turismo pela Instituto Federal de Pernambuco e no momento graduanda de Análise e desenvolvimentode sistemas pelo SENAC</Text>
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


