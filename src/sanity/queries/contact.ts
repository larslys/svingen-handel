import { client } from '../lib/client'

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
}

export const contactInfoQuery = `
  *[_type == "contactInfo"][0]{
    address,
    phone,
    email,
    hours
  }
`

export async function getContactInfo(): Promise<ContactInfo> {
  try {
    const info = await client.fetch(contactInfoQuery)
    if (!info) {
      throw new Error('Ingen kontaktinformasjon funnet')
    }
    return info
  } catch (error) {
    console.error('Feil ved henting av kontaktinformasjon:', error)
    throw error // Kast feilen videre så den kan håndteres i komponenten
  }
}