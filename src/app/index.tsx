import { ScrollView, StyleSheet, Text } from "react-native";

import Mapa from "../components/Mapa";
import FiltroLinea from "../components/FiltroLinea";
import TarjetaColectivo from "../components/TarjetaColectivo";
import Favoritos from "../components/Favoritos";

import { colectivos } from "../data/colectivos";

export default function Index() {

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        BondiTrack
      </Text>

      <Text style={styles.subtitulo}>
        Colectivos de Buenos Aires
      </Text>

      <Mapa />

      <FiltroLinea />

      <Text style={styles.titulo2}>
        Colectivos
      </Text>

      {
        colectivos.map(function(colectivo) {
          return (
            <TarjetaColectivo
              key={colectivo.id}
              colectivo={colectivo}
            />
          );
        })
      }

      <Favoritos />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eeeeee"
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 20
  },

  titulo2: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  }

});