import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TarjetaColectivo({ colectivo }: any) {

  function calcularTiempo() {

    if (colectivo.velocidad == 0) {
      return "No disponible";
    }

    let tiempo = 10 + (100 / colectivo.velocidad);

    return Math.round(tiempo) + " min";
  }

  function mostrarOcupacion() {

    if (colectivo.ocupacion == "Vacío") {
      return "🟢 Vacío";
    }

    if (colectivo.ocupacion == "Poco lleno") {
      return "🟢 Poco lleno";
    }

    if (colectivo.ocupacion == "Medio") {
      return "🟡 Medio";
    }

    if (colectivo.ocupacion == "Lleno") {
      return "🟠 Lleno";
    }

    return "🔴 Muy lleno";
  }

  return (
    <View style={styles.colectivo}>

      <Text style={styles.linea}>
        Línea {colectivo.linea}
      </Text>

      <Text>
        Ramal: {colectivo.ramal}
      </Text>

      <Text>
        Dirección: {colectivo.direccion}
      </Text>

      <Text>
        Velocidad: {colectivo.velocidad} km/h
      </Text>

      <Text>
        Ocupación: {mostrarOcupacion()}
      </Text>

      <Text>
        Llegada aproximada: {calcularTiempo()}
      </Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => alert("Colectivo seleccionado")}
      >
        <Text>Ver colectivo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  colectivo: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
    borderRadius: 5
  },

  linea: {
    fontSize: 20,
    fontWeight: "bold"
  },

  boton: {
    backgroundColor: "#dddddd",
    padding: 10,
    marginTop: 10,
    alignItems: "center"
  }

});