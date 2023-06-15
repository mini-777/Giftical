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
  VStack,
  Button,
  Slide,
  CheckIcon,
} from 'native-base';
import { Share } from 'react-native';
import { useState } from 'react';

export default function GifticonView({ navigation, route }) {
  const [isOpen, setIsOpen] = useState(true);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: '기프티콘 공유',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {}
  };
  const [image, setImage] = useState(
    'file:///data/user/0/com.rnshare/cache/rn_image_picker_lib_temp_0f9dbf03-c89c-4728-a763-6b15e3752f8e.jpg'
  );

  return (
    <Box safeArea m='5'>
      <Heading size='2xl' mb={5}>
        소시지 빵
      </Heading>
      <Heading size='lg'>대현동 기프티컬 빵집</Heading>

      <Center>
        <VStack alignItems={'center'}>
          <Image
            source={{
              uri: 'https://cdn.paris.spl.li/wp-content/uploads/574746-추억의-소시지빵_썸네일1.jpg',
            }}
            alt='giftImage'
            w='300'
            h='300'
            m={'10'}
          />
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/241/241528.png',
            }}
            alt='giftImage'
            w='150'
            h='150'
          />
          <Heading size='lg' m={5}>
            맛있게 먹어
          </Heading>
          <Button onPress={onShare}>공유</Button>
        </VStack>
      </Center>
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
  );
}
