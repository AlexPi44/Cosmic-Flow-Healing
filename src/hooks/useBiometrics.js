
import { useEffect, useState } from "react";
import { BleManager } from "react-native-ble-plx";

export default function useBiometrics() {
  const [heartRate, setHeartRate] = useState(null);
  const manager = new BleManager();

  useEffect(() => {
    const subscription = manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error("BLE scan error:", error);
        return;
      }
      if (device && device.name === "Polar H10") {
        device.connect().then(() => {
          setHeartRate(72);
        });
      }
    });
    return () => {
      manager.stopDeviceScan();
      subscription && subscription.remove();
    };
  }, []);

  return { heartRate };
}
