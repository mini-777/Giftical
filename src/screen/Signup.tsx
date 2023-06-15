import * as React from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from 'native-base';
import axios from 'axios';
import { useState } from 'react';

export default function Signup({ navigation }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const signUp = () => {
    axios
      .post(
        'http://ec2-54-180-89-26.ap-northeast-2.compute.amazonaws.com:8080/user/join',
        {
          userId: id,
          userPw: password,
          userName: name,
          userPhoneNum: phone,
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Center w='100%' flex={1} px='3'>
      <Box safeArea p='2' w='90%' maxW='290' py='8'>
        <Heading
          size='lg'
          color='coolGray.800'
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight='semibold'
        >
          환영합니다!
        </Heading>
        <Heading
          mt='1'
          color='coolGray.600'
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight='medium'
          size='xs'
        >
          회원가입을 통해 서비스를 시작하세요
        </Heading>
        <VStack space={3} mt='5'>
          <FormControl>
            <FormControl.Label>이름</FormControl.Label>
            <Input onChangeText={(e) => setName(e)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>아이디</FormControl.Label>
            <Input onChangeText={(e) => setId(e)} />
          </FormControl>

          <FormControl>
            <FormControl.Label>비밀번호</FormControl.Label>
            <Input type='password' onChangeText={(e) => setPassword(e)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>비밀번호 확인</FormControl.Label>
            <Input type='password' />
          </FormControl>
          <FormControl>
            <FormControl.Label>핸드폰 번호</FormControl.Label>
            <Input onChangeText={(e) => setPhone(e)} />
          </FormControl>
          <Button mt='2' colorScheme='indigo' onPress={() => signUp()}>
            회원가입
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
