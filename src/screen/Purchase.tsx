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
import { ImageSlider } from 'react-native-image-slider-banner';

import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

export default function Purchase({ navigation }) {
  return (
    <Center flex={1} px='3'>
      <Box w='80%' justifyContent='center'>
        <VStack space={3}>
          <HStack alignItems='flex-end'>
            <Heading size='xl'>결제</Heading>
          </HStack>
          <HStack alignItems='center' justifyContent='space-between'>
            <Text fontWeight='medium'>소세지 빵</Text>
            <Text color='blueGray.400'>1500₩</Text>
          </HStack>
          <HStack alignItems='center' justifyContent='space-between'>
            <Text fontWeight='medium'>세금</Text>
            <Text color='blueGray.400'>150₩</Text>
          </HStack>
          <HStack alignItems='center' justifyContent='space-between'>
            <Text fontWeight='medium'>최종 결제 금액</Text>
            <Text color='emerald.600'>1650₩</Text>
          </HStack>
          <VStack space={2} mt='2'>
            <Text bold>메세지를 입력하세요</Text>
            <HStack space={3}>
              <Input flex='1' />
            </HStack>
          </VStack>
          <Box>
            <ImageSlider
              data={[
                {
                  img: require('../images/card1.jpeg'),
                },
                {
                  img: require('../images/card2.jpeg'),
                },
                {
                  img: require('../images/card3.jpeg'),
                },
              ]}
              localImg
              caroselImageStyle={{ width: 350, height: 150 }}
              showIndicator={false}
              onClick={(index) => {
                console.log('hello' + index);
              }}
              preview={false}
              autoPlay={false}
            />
          </Box>
          <Button my='2' onPress={() => navigation.navigate('GifticonView')}>
            결제하기
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
