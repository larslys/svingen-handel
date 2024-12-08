"use client"
import { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import type { GoogleMap as GoogleMapType } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '300px'
};

const defaultCenter = {
  lat: 60.3651326,
  lng: 10.5358183
};

const address = "Markakleiva 26, 2760 Brandbu";

export default function Kontakt() {
  const [center, setCenter] = useState(defaultCenter);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'contact'
  })
  const [status, setStatus] = useState('')

  const handleLoad = (map: GoogleMapType) => {
    const geocoder = new window.google.maps.Geocoder();
    
    geocoder.geocode({ address: address }, (results, status) => {
      console.log('Geocoding status:', status);
      console.log('Geocoding results:', results);
      
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location;
        const newCenter = {
          lat: location.lat(),
          lng: location.lng()
        };
        console.log('New center:', newCenter);
        setCenter(newCenter);
        map.setCenter(newCenter);
      } else {
        console.error('Geocoding failed:', status);
      }
    });
  };

  // ... resten av koden forblir den samme ...
