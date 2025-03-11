
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cosmic Flow Healing</Text>
      <Text style={styles.subtitle}>Enter an artistic healing journey tailored for relaxation and mindfulness</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Healing")}>
        <Text style={styles.buttonText}>Begin Healing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    color: "#DDDDDD",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#8A2BE2",
    paddingVertical: 18,
    paddingHorizontal: 35,
    borderRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});
