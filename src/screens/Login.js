/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
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
import { gql, useMutation } from '@apollo/client';

const LOGIN_QUERY = gql`
  mutation {
    generateCustomerToken(
      email: "eduper11@yopmail.com"
      password: "Hanzo11."
    ) {
      token
    }
  }
`;

export default function Login({ navigation, route }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [generateCustomerToken] = useMutation(LOGIN_QUERY);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = formData;
    generateCustomerToken({ variables: { email, password } })
      .then((response) => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        navigation.navigate('Error', {message: error.message});
      });
  };

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
          <Input
            type='email'
            placeholder='Email'
            variant='flushed'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </InputGroup>
      </View>

      <View>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <LockIcon color='gray.500' />
            </InputLeftElement>
            <Input
              type={show ? 'text' : 'password'}
              placeholder='Password'
              variant='flushed'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
            />
            <InputRightElement>
              <Button onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </View>

      <View style={styles.conts}>
        <Button onClick={handleSubmit}>Entrar</Button>
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
