"use client"
import { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '300px'
};

const defaultCenter = {
  lat: 60.3651326,
  lng: 10.5358183
};

//const address = "Markakleiva 24, 2760 Brandbu";
const address = "Ringdalslinna 96, 2750 Gran";

export default function Kontakt() {
  const [center, setCenter] = useState(defaultCenter);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'contact'
  })
  const [status, setStatus] = useState('')

  const handleLoad = (map) => {
    setIsLoaded(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '', type: 'contact' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="space-y-12">
      {/* Hovedseksjon */}
      <section className="bg-orange-100 rounded-lg p-8 shadow-md">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 text-center mb-6">
          Kontakt Oss
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-amber-800 text-center">
          Vi setter stor pris på å høre fra deg, enten det gjelder bestillinger, 
          spørsmål eller tilbakemeldinger.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Kontaktinformasjon med kart */}
        <section className="bg-white rounded-lg shadow-md border-2 border-amber-200">
          <div className="p-8">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
              Finn Oss
            </h2>
            <div className="space-y-6 text-amber-800">
              <div>
                <h3 className="font-bold mb-2">Adresse</h3>
                <p>{address}</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Telefon</h3>
                <p>123 45 678</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">E-post</h3>
                <p>post@svingen.no</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Åpningstider</h3>
                <p>Mandag - Fredag: 10:00 - 18:00</p>
                <p>Lørdag: 10:00 - 16:00</p>
                <p>Søndag: Stengt</p>
              </div>
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="h-[300px] w-full rounded-b-lg overflow-hidden">
            <LoadScript 
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
              libraries={['geocoding']}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={handleLoad}
                options={{
                  styles: [
                    {
                      featureType: "all",
                      elementType: "all",
                      stylers: [
                        { saturation: -20 }
                      ]
                    }
                  ]
                }}
              >
                <Marker 
                  position={center}
                  title="Svingen Handel og Kafe"
                />
              </GoogleMap>
            </LoadScript>
          </div>
        </section>

        {/* Kontaktskjema */}
        <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            Send oss en melding
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="type" className="block text-amber-800 mb-1">
                Type henvendelse
              </label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full p-2 border border-amber-200 rounded-md"
                required
              >
                <option value="contact">Generell henvendelse</option>
                <option value="order">Bestilling</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="name" className="block text-amber-800 mb-1">
                Navn
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border border-amber-200 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-amber-800 mb-1">
                E-post
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border border-amber-200 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-amber-800 mb-1">
                Telefon (valgfritt)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2 border border-amber-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-amber-800 mb-1">
                Melding
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full p-2 border border-amber-200 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors disabled:bg-amber-300"
            >
              {status === 'sending' ? 'Sender...' : 'Send melding'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center">
                Takk for din henvendelse! Vi tar kontakt så snart som mulig.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">
                Beklager, noe gikk galt. Vennligst prøv igjen eller kontakt oss direkte.
              </p>
            )}
          </form>
        </section>
      </div>

      {/* Bestillingsinformasjon */}
      <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            Bestillinger
          </h2>
          <p className="text-lg text-amber-800">
            For bestilling av kaker og andre produkter, send oss gjerne en melding minst to dager i forveien. 
            Ved større bestillinger anbefaler vi å ta kontakt i god tid.
          </p>
        </div>
      </section>
    </div>
  )
}