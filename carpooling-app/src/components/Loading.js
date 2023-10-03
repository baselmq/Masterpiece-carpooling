import { ActivityIndicator, View } from "react-native";
import { PathColor } from "../utils/PathColor";

const LoadingCustom = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} color={PathColor.primary[500]} />
    </View>
  );
};
export default LoadingCustom;

export const BtnLoading = () => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", padding: 3.3 }}
    >
      <ActivityIndicator size={"small"} color={PathColor.white} />
    </View>
  );
};
