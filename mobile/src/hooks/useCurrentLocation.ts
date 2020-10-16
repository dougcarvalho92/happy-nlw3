import { useEffect, useState } from "react";
import * as Location from "expo-location";

interface LocationPros {
  latitude: number;
  longitude: number;
}
export default function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState<LocationPros>();

  useEffect(() => {
    const getCurrentPosition = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        alert(
          "Precisamos de permissão para acessar sua localização para listar os orfanatos"
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
    };
    getCurrentPosition();
  }, []);

  return currentLocation;
}
