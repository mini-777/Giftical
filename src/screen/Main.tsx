import {
  HStack,
  Center,
  Pressable,
  Box,
  Heading,
  Text,
  Image,
  Input,
  Icon,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { ImageSlider } from 'react-native-image-slider-banner';
export default function Main({ navigation }) {
  return (
    <Box safeArea>
      <Box ml={5} mb={2}>
        <Heading size='2xl'>GIFTICAL</Heading>
      </Box>
      <Box alignSelf='center'>
        <Input
          h={10}
          placeholder='검색어를 입력해주세요'
          variant='filled'
          width='90%'
          borderRadius='10'
          py='1'
          px='2'
          InputLeftElement={
            <Icon
              ml='2'
              size='4'
              color='gray.400'
              as={<Ionicons name='ios-search' />}
            />
          }
        />
      </Box>
      <Box alignItems='center'>
        <Center margin={4}>
          <Pressable onPress={() => navigation.navigate('PurchaseHistories')}>
            {({ isHovered, isPressed }) => {
              return (
                <Center
                  h='250'
                  w='330'
                  bg={
                    isPressed
                      ? 'muted.200'
                      : isHovered
                      ? 'muted.200'
                      : 'muted.50'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  p='5'
                  rounded='20'
                  shadow={9}
                  borderWidth='1'
                  borderColor='coolGray.300'
                >
                  <Text fontWeight='medium' textAlign='center' fontSize='3xl'>
                    기프티콘 구매
                  </Text>
                  <Image
                    source={{
                      uri: 'https://static.thenounproject.com/png/452089-200.png',
                    }}
                    alt='Barcode Image'
                    w={100}
                    h={100}
                  />
                </Center>
              );
            }}
          </Pressable>
        </Center>

        <HStack margin={4} mb={8} space={8} justifyContent='center'>
          <Center>
            <Pressable onPress={() => navigation.navigate('StockOrder')}>
              {({ isHovered, isPressed }) => {
                return (
                  <Center
                    h='230'
                    w='148'
                    bg={
                      isPressed
                        ? 'muted.200'
                        : isHovered
                        ? 'muted.200'
                        : 'muted.50'
                    }
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    p='5'
                    rounded='20'
                    shadow={9}
                    borderWidth='1'
                    borderColor='coolGray.300'
                    _text={{
                      fontWeight: 'medium',
                      textAlign: 'center',
                      fontSize: '2xl',
                    }}
                  >
                    결제 내역
                  </Center>
                );
              }}
            </Pressable>
          </Center>
          <Center>
            <Pressable onPress={() => navigation.navigate('Purchase')}>
              {({ isHovered, isPressed }) => {
                return (
                  <Center
                    h='230'
                    w='148'
                    bg={
                      isPressed
                        ? 'muted.200'
                        : isHovered
                        ? 'muted.200'
                        : 'muted.50'
                    }
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    p='5'
                    rounded='20'
                    shadow={9}
                    borderWidth='1'
                    borderColor='coolGray.300'
                    _text={{
                      fontWeight: 'medium',
                      textAlign: 'center',
                      fontSize: '2xl',
                    }}
                  >
                    내정보
                  </Center>
                );
              }}
            </Pressable>
          </Center>
        </HStack>
        <Center>
          <ImageSlider
            data={[
              {
                img: require('../images/ad1.jpg'),
              },
              {
                img: require('../images/ad2.jpg'),
              },
              {
                img: require('../images/ad3.jpg'),
              },
            ]}
            localImg
            caroselImageStyle={{ width: 400, height: 100 }}
            showIndicator={false}
            onClick={(index) => {
              console.log('hello' + index);
            }}
            preview={false}
            autoPlay={true}
          />
        </Center>
      </Box>
    </Box>
  );
}
