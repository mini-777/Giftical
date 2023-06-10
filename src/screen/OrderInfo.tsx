import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
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
  ScrollView,
  Divider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function OrderInfo({ navigation, route }) {
  const states = route.params;
  const [scrollViewHeight, setScrollViewHeight] = useState(
    Dimensions.get("window").height * 0.7
  );
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    navigation.navigate("GifticonView", {giftId: item.giftBarcode})
    // setSelectedItem(item);
  };

  const InventoryItem = ({
    giftName,
    isUsed,
    giftUsedDate,
    giftImg,
    giftBarcode,
    onItemClick,
  }) => (
    <TouchableOpacity
      style={{ opacity: isUsed ? 0.5 : 1 }}
      onPress={onItemClick}
    >
      <HStack space={3} alignItems="center">
        <Box ml="3" mt="2">
          <Image
            source={{
              uri: giftImg,
            }}
            alt="itemImage"
            w="20"
            h="20"
            rounded="md"
          />
        </Box>
        <VStack>
          <Text fontWeight="bold">{giftName}</Text>
          <Text fontSize="sm">
            {isUsed ? `사용됨 (${giftUsedDate})` : "사용가능"}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );

  return (
    <Box margin={5}>
      <ScrollView style={{ height: scrollViewHeight }}>
        <VStack space={3} mt="5" divider={<Divider />}>
          {states.purchaseItems.map((item, index) => (
            <InventoryItem
              key={index}
              giftName={item.giftName}
              giftImg={item.giftImg}
              giftBarcode={item.giftBarcode}
              isUsed={item.isUsed}
              giftUsedDate={item.giftUsedDate}
              onItemClick={() => handleClick(item)}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
