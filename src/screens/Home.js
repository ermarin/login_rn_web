import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from '@chakra-ui/react';

export default function Home({ navigation, route }) {
  const exit = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF5733)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          GRACIAS POR TÚ VISITA...
        </Text>
      </View>
      <View style={styles.contBtn}>
        <Button variant='link' onClick={exit}>Salir</Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  contBtn: {
    marginTop: 200,
  },
});