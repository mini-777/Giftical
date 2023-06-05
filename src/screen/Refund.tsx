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

export default function Refund({ navigation, route }) {
  const states = route.params;

  return (
    <Box safeArea>
      <Center>
        <VStack>
          <Text fontSize="xl" fontWeight="bold">결제내역</Text>
          {states.purchaseItems.map((item, index)=>(
            <Text key={index} fontSize="sm">{item.giftName}</Text>
          ))}
        </VStack>
      </Center>
    </Box>
  );
}
