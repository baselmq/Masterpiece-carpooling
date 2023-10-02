import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthContextProvider } from "./src/context/AuthContext";
import AppNav from "./src/routes/AppNav";
import { BookingContextProvider } from "./src/context/BookingContext";
import { PublishContextProvider } from "./src/context/PublishContext";
import { UserContextProvider } from "./src/context/UserContext";
import { DriverContextProvider } from "./src/context/DriverContext";
import { TripsContextProvider } from "./src/context/TripsContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    const loadApp = async () => {
      // Wait for fonts to load before checking onboarding
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    loadApp();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <PublishContextProvider>
          <DriverContextProvider>
            <TripsContextProvider>
              <BookingContextProvider>
                <SafeAreaView style={styles.container}>
                  <AppNav />
                  <StatusBar style="auto" />
                </SafeAreaView>
              </BookingContextProvider>
            </TripsContextProvider>
          </DriverContextProvider>
        </PublishContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}
{
  /* <View style={styles.container}>
{loading ? <Loading /> : viewOnboarding ? <HomeScreen /> : <Onboarding />}
<StatusBar style="auto" />
</View> */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
