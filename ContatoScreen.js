import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContatoScreen() {
  return (
    <View style={styles.container}>
      <Text> GitHub: https://github.com/JuliaMenezesoli; linkedin: https://www.linkedin.com/in/j%C3%BAlia-menezes-539575193/</Text>
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
