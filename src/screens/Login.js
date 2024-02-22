import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Login({ navigation, route }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const valUser = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conts}>
        <Text fontSize='3xl' fontWeight='bold'>Cuidado con el perro</Text>
      </View>
      <View style={styles.conts}>
        <InputGroup styles={{ marginVertical: 10 }}>
          <InputLeftElement pointerEvents='none'>
            <EmailIcon color='gray.500' />
          </InputLeftElement>
          <Input type='email' placeholder='Email' variant='flushed' />
        </InputGroup>
      </View>

      <View>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <LockIcon color='gray.500' />
          </InputLeftElement>
          <Input type={show ? 'text' : 'password'} placeholder='Password' variant='flushed' />
          <InputRightElement>
            <Button onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </View>

      <View style={styles.conts}>
        <Button onClick={valUser}>Entrar</Button>
      </View>
      <View style={styles.conts}>
        <Button variant='link'>
          No tienes una cuenta? Registrate!
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 50,
  },
  conts: {
    paddingVertical: 20,
  },
});
