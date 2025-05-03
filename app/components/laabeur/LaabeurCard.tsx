import { Image, ViewStyle, StyleSheet, View } from "react-native";
import { Card } from "../Card";
import { ThemedText } from "../ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = {
  style?: ViewStyle;
  id: number;
  name: string;
};

export function LaabeurCard({ style, id, name }: Props) {
  const colors = useThemeColors()
  return (
    <Card style={[styles.card, style]}>
      <ThemedText style= {styles.id} variant="caption" color="grayMedium">
        #{id.toString().padStart(3, '0')}
      </ThemedText>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        }}
        style={styles.image}
      />
      <ThemedText>{name}</ThemedText>
        <View style={[styles.shadow,{backgroundColor:colors.grayBackground}]}/>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    padding: 8,
    position:'relative',
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  id: {
    alignSelf: 'flex-end'
  },
  shadow:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    height:44,
    borderRadius:7,
    zIndex:-1,

  }
});
