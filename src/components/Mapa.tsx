import { View, Text, StyleSheet } from "react-native";

export default function Mapa() {

  return (
    <View style={styles.mapa}>

      <Text style={styles.titulo}>
        MAPA
      </Text>

      <Text>🚌 15</Text>
      <Text>🚌 60</Text>
      <Text>🚌 152</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  mapa: {
    height: 250,
    backgroundColor: "#bbbbbb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },

  titulo: {
    fontSize: 30,
    marginBottom: 20
  }

});