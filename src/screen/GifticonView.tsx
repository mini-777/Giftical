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
    <Box safeArea>
      <VStack>
        <Box>
          <Text fontSize="xl" fontWeight="bold">기프티콘 이름</Text>
        </Box>
      </VStack>
    </Box>
  )
}
