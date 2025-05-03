import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Card } from "./components/Card";
import { LaabeurCard } from "./components/laabeur/LaabeurCard";
import { useFetchQuery, useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { getLaabeurId } from "@/functions/laabeur";

export default function Index() {
  const colors = useThemeColors();
  const { data ,isFetching,fetchNextPage } = useInfiniteFetchQuery('/pokemon?limit=90');
  const laabeur = data?.pages.flatMap(page => page.results) ?? [];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <View style={styles.header}>
        <Image 
          source={require("@/assets/images/laab3.png")} 
          style={{ width: 24, height: 24 }} 
        />
        <ThemedText variant="headLine" color="grayDark">Team Laab</ThemedText>
      </View>

      <Card style={styles.body}>
        <FlatList 
          data={laabeur} 
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={[styles.gridGap, styles.list]}
          keyExtractor={(item) => item.url}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.tint}/> : null
          }
          onEndReached={() => fetchNextPage()}
          renderItem={({ item }) => {
            const id = getLaabeurId(item.url);
            if (!id) return null;
            return (
              <LaabeurCard 
                id={id} 
                name={item.name} 
                style={styles.laabeurCard} 
              />
            );
          }}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
  },
  body: {
    flex: 1,
  },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },
  laabeurCard: {
    width: "31%",
    height: 125,
    justifyContent: "center",
    alignItems: "center",
  },
});
