import {
  Box,
  Heading,
  Text,
  HStack,
  Image,
  VStack,
  Divider,
  ScrollView,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity, Dimensions } from "react-native";

const InventoryItem = ({ itemName, itemImg, itemPurchase, onItemClick }) => {
  return (
    <TouchableOpacity onPress={onItemClick}>
      <HStack space={3} alignItems="center">
        <Box ml="3" mt="2">
          <Image
            source={{
              uri: itemImg,
            }}
            alt="itemImage"
            w="20"
            h="20"
            rounded="md"
          />
        </Box>
        <VStack>
          <Text fontWeight="bold">{itemName}</Text>
          <Text fontSize="sm">{`${itemPurchase}원`}</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default function StoreView({ navigation, route }) {
  const params = route.params;

  const inventoryItems = [
    {
      itemName: "여리여리 봄 맞이 스커커트",
      itemPurchase: "18,000",
      itemDetails: "하의류",
      itemImg:
        "https://sitem.ssgcdn.com/01/92/76/item/1000047769201_i1_1100.jpg",
    },
    {
      itemName: "칼단발 머리띠",
      itemPurchase: "12,000",
      itemDetails: "악세사리류",
      itemImg:
        "https://img.ssfshop.com/god_god_evl/23/03/24/119166509013943.jpeg",
    },
    {
      itemName: "고당도 수박",
      itemPurchase: "18,000",
      itemDetails: "식품류",
      itemImg:
        "https://th4.tmon.kr/thumbs/image/16e/a26/291/2f8e88218_700x700_95_FIT.jpg",
    },
    {
      itemName: "꿀참외",
      itemPurchase: "18,000",
      itemDetails: "식품류",
      itemImg:
        "https://img.wemep.co.kr/deal/9/702/4437029/c61213b08dbc6af9376ceda5a998ab18b1d64788.jpg",
    },
  ];

  const handleClick = (item) => {};
  const [scrollViewHeight, setScrollViewHeight] = useState(
    Dimensions.get('window').height * 0.9
  );

  return (
    <Box margin={5}>
      <ScrollView style={{ height: scrollViewHeight }}>
        <Heading size="xl" fontWeight="600">
          {params.storeName}
        </Heading>
        <Text>아무거나 팝니다</Text>
        <Image
          source={{ uri: params.storeImg }}
          alt="storeImage"
          w="full"
          h="sm"
          mt="2"
        />
        <Divider mt="3" />
        <Heading size="lg" mt="5">
          상품 목록
        </Heading>
        <VStack space={3} mt="5" divider={<Divider />}>
          {inventoryItems.map((item, index) => (
            <InventoryItem
              key={index}
              itemName={item.itemName}
              itemImg={item.itemImg}
              itemPurchase={item.itemPurchase}
              onItemClick={()=>handleClick(item)}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
