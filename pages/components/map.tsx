// components/Map.tsx
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '', // Make sure your API key is available
  });

  const center = useMemo(() => ({ lat: 20.3404, lng: 85.8077 }), []);
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="w-full h-96" // Tailwind CSS for width and height
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
