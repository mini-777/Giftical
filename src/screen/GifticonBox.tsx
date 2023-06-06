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

function OwnGiftcons( {navigation} ) {
  const [scrollViewHeight, setScrollViewHeight] = useState(
    Dimensions.get("window").height * 0.7
  );
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };
  const inventoryItems = [
    {
      giftName: "여리여리 봄 맞이 스커커트",
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
  ];

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
          {inventoryItems.map((item, index) => (
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

function PurchaseHistories( {navigation} ) {
  const [scrollViewHeight, setScrollViewHeight] = useState(
    Dimensions.get("window").height * 0.7
  );
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleClick = (item) => {
    navigation.navigate('Refund', item);
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

export default function GifticonBox({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "보유 기프티콘",
    },
    {
      key: "second",
      title: "결제내역",
    },
  ]);
  const initialLayout = {
    width: Dimensions.get("window").width,
  };
  const renderScene = ({route}) => {
    switch(route.key) {
      case 'first': return <OwnGiftcons navigation={navigation}/>;
      case 'second': return <PurchaseHistories navigation={navigation}/>
    }
  }
  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          // console.log(route, i);
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                {/* <Animated.Text
									style={{
										color,
									}}
								> */}
                <Text style={{ color }}>{route.title}</Text>
                {/* </Animated.Text> */}
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
