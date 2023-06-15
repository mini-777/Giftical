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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { ImageSlider } from "react-native-image-slider-banner";

export default function GifticonView({ navigation, route }) {
  const params = route.params;

  return (
    <Box margin={5}>
      <VStack>
        <Heading size="lg">
          {params.giftName}
        </Heading>
        <Image 
          source={{
            uri: params.giftImg
          }}
          alt="giftImage"
          w="full"
          h="70%"
          mt="3"
        />
      </VStack>
    </Box>
  )
}
