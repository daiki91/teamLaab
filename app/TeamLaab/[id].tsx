import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TeamLaab() {
  const params = useLocalSearchParams();
  
  return (
    <View>
      <Text>Laabeur {params.id}</Text>
    </View>
  );
}
