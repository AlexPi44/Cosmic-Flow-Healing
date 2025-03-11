
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import useAI from "../hooks/useAI";
import useBiometrics from "../hooks/useBiometrics";

export default function FogDot() {
  const meshRef = useRef();
  const [phi, setPhi] = useState(0);
  const { analyzeTouch } = useAI();
  const { heartRate } = useBiometrics();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      const A = 1.2;
      const omega = 0.4;
      const amplitude = heartRate ? A * (heartRate / 72) : A;
      meshRef.current.position.x = amplitude * Math.sin(omega * t + phi);
      meshRef.current.position.y = amplitude * Math.cos(omega * t + phi);
    }
  });

  const handleTouch = async () => {
    const newPhi = Math.random() * Math.PI * 2;
    const adjustedPhi = await analyzeTouch([newPhi]);
    setPhi(adjustedPhi[0]);
  };

  return (
    <Sphere ref={meshRef} onClick={handleTouch} args={[0.35, 32, 32]}>
      <meshStandardMaterial attach="material" color="#8A2BE2" transparent opacity={0.8} />
    </Sphere>
  );
}
