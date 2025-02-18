// components/GoogleMapsLoader.tsx
import React from 'react';
import { LoadScript } from '@react-google-maps/api';

const GoogleMapsLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      {children}
    </LoadScript>
  );
};

export default GoogleMapsLoader;