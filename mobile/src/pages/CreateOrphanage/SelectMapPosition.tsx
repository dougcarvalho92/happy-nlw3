import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { Marker, MapEvent } from "react-native-maps";
import * as Location from "expo-location";

import mapMarkerImg from "../../images/map-marker.png";
import { AppLoading } from "expo";
interface LocationPros {
  latitude: number;
  longitude: number;
}
export default function SelectMapPosition() {
  const [currentLocation, setCurrentLocation] = useState<LocationPros>();

  const navigation = useNavigation();

  const [position, setPosition] = useState<LocationPros>({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    const getCurrentPosition = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        alert(
          "Precisamos de permissão para acessasr sua localização para listar os orfanatos"
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
    };
    getCurrentPosition();
  }, []);

  function handleNextStep() {
    navigation.navigate("OrphanageData", { position });
  }
  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }
  if (!currentLocation) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude != 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapView>
      {position.latitude != 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  mapStyle: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },

  nextButton: {
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,

    position: "absolute",
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: "#FFF",
  },
});
