
import * as tf from "@tensorflow/tfjs";

export default function useAI() {
  const analyzeTouch = async (phaseArray) => {
    await tf.ready();
    const input = tf.tensor(phaseArray);
    const output = input.mul(0.92);
    return output.dataSync();
  };
  return { analyzeTouch };
}
