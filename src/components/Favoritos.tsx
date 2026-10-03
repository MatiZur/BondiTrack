import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export function agregarFavorito(
  favoritos: string[],
  parada: string
): string[] {
  if (parada === "") {
    return favoritos;
  }

  return [...favoritos, parada];
}

export default function Favoritos() {
  const [parada, setParada] = useState("");
  const [favoritos, setFavoritos] = useState<string[]>([]);

  function guardarFavorito() {
    const nuevosFavoritos = agregarFavorito(favoritos, parada);
    setFavoritos(nuevosFavoritos);
  }

  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 20 }}>
        Paradas favoritas
      </Text>

      <TextInput
        placeholder="Nombre de parada"
        value={parada}
        onChangeText={setParada}
      />

      <Button
        title="Guardar parada"
        onPress={guardarFavorito}
      />

      {favoritos.map(function (favorito, index) {
        return (
          <Text key={index}>
            ⭐ {favorito}
          </Text>
        );
      })}
    </View>
  );
}