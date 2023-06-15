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
    FormControl,
    ScrollView,
    Divider,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { ImageSlider } from 'react-native-image-slider-banner';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

const InventoryItem = ({
  storeName,
  storeImg,
  onItemClick
}) => {
  return (
    <TouchableOpacity onPress={onItemClick}>
      <HStack space={3} alignItems='center'>
        <Box ml='3' mt='2'>
          <Image
            source={{
              uri: storeImg,
            }}
            alt='storeImage'
            w='20'
            h='20'
            rounded='md'
          />
        </Box>
        <VStack>
          <Text fontWeight='bold'>{storeName}</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}

export default function SearchStore({ navigation }) {
  const inventoryItems = [
    {
      storeName: 'abcd',
      storeImg: 'https://sitem.ssgcdn.com/01/92/76/item/1000047769201_i1_1100.jpg',
    },
    {
      storeName: 'efgh',
      storeImg: 'https://img.ssfshop.com/god_god_evl/23/03/24/119166509013943.jpeg',
    }
  ]
  const [filteredItems, setFilteredItems] = useState(inventoryItems);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = inventoryItems.filter(
      (item)=>item.storeName.includes(text)
    );
    setFilteredItems(filtered);
  }
  const handleClick = (item) => {
    navigation.navigate('StoreView', item);
  }

  return (
    <Box margin={5}>
      <FormControl mt='5'>
        <Input
          w='100%'
          placeholder='매장 이름'
          value={searchText}
          onChangeText={handleSearch}
        />
      </FormControl>
      <Heading mt='5'>
        매장 목록
      </Heading>
      <ScrollView>
        <VStack space={3} mt='5' divider={<Divider />}>
          {filteredItems.map((item, index) => (
            <InventoryItem
              key={index}
              storeName={item.storeName}
              storeImg={item.storeImg}
              onItemClick={()=>handleClick(item)}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  )
}