import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import {
  Text,
  Image,
  Box,
  Pressable,
  useColorModeValue,
  Center,
  ScrollView,
  VStack,
  HStack,
  Divider,
} from "native-base";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";



export default function PurchaseHistories( {navigation} ) {
  const [scrollViewHeight, setScrollViewHeight] = useState(
    Dimensions.get("window").height * 0.7
  );
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleClick = (item) => {
    navigation.navigate('OrderInfo', item);
  };

  const inventoryItems = [
    {
      purchaseDate: "2023-01-01",
      purchaseItems: [
        {
          giftName: "여리여리 봄 맞이 스커트",
          isUsed: false,
          giftUsedDate: null,
          giftImg:
            "https://sitem.ssgcdn.com/01/92/76/item/1000047769201_i1_1100.jpg",
          giftBarcode: "203205651",
        },
        {
          giftName: "칼단발 머리띠",
          isUsed: false,
          giftUsedDate: null,
          giftImg:
            "https://img.ssfshop.com/god_god_evl/23/03/24/119166509013943.jpeg",
          giftBarcode: "2165466",
        },
      ],
      isRefunded: false,
    },
    {
      purchaseDate: "2023-02-01",
      purchaseItems: [
        {
          giftName: "고당도 수박",
          isUsed: false,
          giftUsedDate: null,
          giftImg:
            "https://th4.tmon.kr/thumbs/image/16e/a26/291/2f8e88218_700x700_95_FIT.jpg",
          giftBarcode: "9160651",
        },
        {
          giftName: "꿀참외",
          isUsed: true,
          giftUsedDate: "2023-01-01",
          giftImg:
            "https://img.wemep.co.kr/deal/9/702/4437029/c61213b08dbc6af9376ceda5a998ab18b1d64788.jpg",
          giftBarcode: "74156465",
        },
      ],
      isRefunded: true,
    },
  ];
  const InventoryItem = ({
    purchaseDate,
    purchaseItems,
    isRefunded,
    onItemClick,
  }) => (
    <TouchableOpacity
      style={{ opacity: isRefunded ? 0.5 : 1 }}
      onPress={onItemClick}
    >
      <HStack space={3} alignItems="center">
        <VStack>
          <Text fontWeight="bold">{purchaseDate}</Text>
          <Text fontSize="sm">
            {purchaseItems[0].giftName +
              (purchaseItems.length > 0 && ` 외 ${purchaseItems.length - 1}개`)}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );

  return (
    <Box margin={5}>
      <ScrollView style={{ height: scrollViewHeight }}>
        <VStack space={3} mt="5" divider={<Divider />}>
          {inventoryItems.map((item, index) => (
            <InventoryItem
              key={index}
              purchaseDate={item.purchaseDate}
              purchaseItems={item.purchaseItems}
              isRefunded={item.isRefunded}
              onItemClick={()=>handleClick(item)}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}

