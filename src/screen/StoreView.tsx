import {
  Box,
  Heading,
  Text,
  HStack,
  Image,
  VStack,
  Divider,
  ScrollView,
} from 'native-base';
import { useState } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';

const InventoryItem = ({ itemName, itemImg, itemPurchase, onItemClick }) => {
  return (
    <TouchableOpacity onPress={onItemClick}>
      <HStack space={3} alignItems='center'>
        <Box ml='3' mt='2'>
          <Image
            source={{
              uri: itemImg,
            }}
            alt='itemImage'
            w='20'
            h='20'
            rounded='md'
          />
        </Box>
        <VStack>
          <Text fontWeight='bold'>{itemName}</Text>
          <Text fontSize='sm'>{`${itemPurchase}원`}</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default function StoreView({ navigation, route }) {
  const params = route.params;

  const inventoryItems = [
    {
      itemName: '카페모카빵',
      itemPurchase: '3,000',
      itemDetails: '빵류',
      itemImg:
        'https://cdn.paris.spl.li/wp-content/uploads/574784-NEW%EC%B9%B4%ED%8E%98%EB%AA%A8%EC%B9%B4%EB%B9%B5_%EC%8D%B8%EB%84%A4%EC%9D%BC1.jpg',
    },
    {
      itemName: '소세지 빵',
      itemPurchase: '1,500',
      itemDetails: '빵류',
      itemImg:
        'https://cdn.paris.spl.li/wp-content/uploads/574746-%EC%B6%94%EC%96%B5%EC%9D%98-%EC%86%8C%EC%8B%9C%EC%A7%80%EB%B9%B5_%EC%8D%B8%EB%84%A4%EC%9D%BC3.jpg',
    },
    {
      itemName: '소금버터롤',
      itemPurchase: '2,000',
      itemDetails: '빵류',
      itemImg:
        'https://m.tlj.co.kr:8008/data/product/2021-12-29_event(5).JPG',
    },
    {
      itemName: '야키소바빵',
      itemPurchase: '3,000',
      itemDetails: '식품류',
      itemImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Yakisobapan_001.jpg/1200px-Yakisobapan_001.jpg',
    },
  ];

  const handleClick = (item) => {
    navigation.navigate('Purchase');
  };
  const [scrollViewHeight, setScrollViewHeight] = useState(
    Dimensions.get('window').height * 0.9
  );

  return (
    <Box margin={5}>
      <ScrollView style={{ height: scrollViewHeight }}>
        <Heading size='xl' fontWeight='600'>
          {params.storeName}
        </Heading>
        <Text></Text>
        <Image
          source={{ uri: params.storeImg }}
          alt='storeImage'
          w='full'
          h='sm'
          mt='2'
        />
        <Divider mt='3' />
        <Heading size='lg' mt='5'>
          상품 목록
        </Heading>
        <VStack space={3} mt='5' divider={<Divider />}>
          {inventoryItems.map((item, index) => (
            <InventoryItem
              key={index}
              itemName={item.itemName}
              itemImg={item.itemImg}
              itemPurchase={item.itemPurchase}
              onItemClick={() => handleClick(item)}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
