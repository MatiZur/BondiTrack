import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function FiltroLinea() {

  const [linea, setLinea] = useState("");

  function buscar() {

    if (linea == "") {
      return;
    }

    alert("Buscando línea " + linea);
  }

  return (
    <View>

      <TextInput
        style={styles.input}
        placeholder="Número de línea"
        value={linea}
        onChangeText={setLinea}
      />

      <Button
        title="Buscar"
        onPress={buscar}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#999999",
    padding: 10,
    marginBottom: 10
  }

});