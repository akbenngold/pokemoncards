import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  weaknesses,
  moves,
}) {
  return (
    <View style={styles.card}>
      <View>
        <Text>PokemonCard</Text>
        <Text>{name}</Text>
      </View>
      <Image source={image} style={styles.image} />
      <View>
        <Text>weaknesses:{weaknesses.join(",")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
});
