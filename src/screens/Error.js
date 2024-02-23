import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from '@chakra-ui/react';

export default function Error({ navigation, route }) {
  const { message } = route.params;
  const exit = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          bgGradient='linear(to-l, #FF5733, #7928CA)'
          bgClip='text'
          fontSize='3xl'
          fontWeight='extrabold'
        >
          {message}
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