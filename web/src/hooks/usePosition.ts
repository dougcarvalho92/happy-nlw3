import React, { useState, useEffect } from "react";
// import { geolocated } from "react-geolocated";

// interface LocationProps {
//   coords: {
//     latitude: number;
//     longitude: number;
//     altitude: number;
//     heading: number;
//     speed: number;
//   };
// }
// interface ErrorProps {
//   message: string | null;
// }
// export const usePosition = () => {
//   const [position, setPosition] = useState<LocationProps>();
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const geo = navigator.geolocation;
//     if (!geo) {
//       setError("Geolocation is not supported");
//       return;
//     }
//     if (!geo) {
//       setError("Geolocation is not supported");
//       return;
//     }
//     const position = geo.getCurrentPosition();
//     setPosition();
//   }, []);

//   return { ...position, error };
// };
