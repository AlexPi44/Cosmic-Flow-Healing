
import { Canvas } from "@react-three/fiber/native";
import FogDot from "../components/FogDot";
import Header from "../components/Header";
import HDBackground from "../components/HDBackground";

export default function HealingScreen({ navigation }) {
  return (
    <HDBackground>
      <View style={styles.overlay}>
        <Header title="The Healing Flow" />
        <Canvas style={styles.canvas}>
          <ambientLight intensity={0.7} />
          <pointLight position={[5, 10, 10]} intensity={1} />
          <FogDot />
        </Canvas>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Return</Text>
        </TouchableOpacity>
      </View>
    </HDBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  canvas: {
    flex: 1,
  },
  backButton: {
    backgroundColor: "#8A2BE2",
    padding: 18,
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 30,
    elevation: 5,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});
