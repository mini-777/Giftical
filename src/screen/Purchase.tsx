import React from 'react';
import {
  Slide,
  Button,
  Box,
  Input,
  Heading,
  VStack,
  HStack,
  Text,
  CheckIcon,
  Center,
} from 'native-base';
import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

export default function Purchase({ navigation }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Center flex={1} px='3'>
      <Box w={['250', '300']} justifyContent='center'>
        <VStack space={3}>
          <HStack alignItems='flex-end'>
            <Heading size='xl'>결제</Heading>
          </HStack>
          <HStack alignItems='center' justifyContent='space-between'>
            <Text fontWeight='medium'>Sub Total</Text>
            <Text color='blueGray.400'>$298.77</Text>
          </HStack>
          <HStack alignItems='center' justifyContent='space-between'>
            <Text fontWeight='medium'>Tax</Text>
            <Text color='blueGray.400'>$38.84</Text>
          </HStack>
          <HStack alignItems='center' justifyContent='space-between'>
            <Text fontWeight='medium'>Total Amount</Text>
            <Text color='emerald.600'>$337.61</Text>
          </HStack>
          <VStack space={2} mt='2'>
            <Text bold>메세지를 입력하세요</Text>
            <HStack space={3}>
              <Input flex='1' />
            </HStack>
          </VStack>

          <Button my='2' onPress={() => setIsOpen(!isOpen)}>
            결제하기
          </Button>
        </VStack>
        <Slide in={isOpen} placement='top'>
          <Box
            w='100%'
            position='absolute'
            borderRadius='xs'
            bg='emerald.100'
            alignItems='center'
            justifyContent='center'
            _dark={{
              bg: 'emerald.200',
            }}
            safeArea
          >
            <HStack space={4}>
              <CheckIcon
                size='4'
                color='emerald.600'
                mt='1'
                _dark={{
                  color: 'emerald.700',
                }}
              />
              <Text
                color='emerald.600'
                textAlign='center'
                _dark={{
                  color: 'emerald.700',
                }}
                fontWeight='medium'
              >
                결제가 성공적으로 완료되었습니다
              </Text>
            </HStack>
          </Box>
        </Slide>
      </Box>
    </Center>
  );
}
