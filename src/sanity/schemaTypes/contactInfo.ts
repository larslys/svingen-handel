
// src/sanity/queries/Contactinfo.ts

export default {
  name: 'contactInfo',
  title: 'Kontaktinformasjon',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Adresse',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string'
    },
    {
      name: 'email',
      title: 'E-post',
      type: 'string'
    },
    {
      name: 'hours',
      title: 'Åpningstider',
      type: 'object',
      fields: [
        {
          name: 'weekdays',
          title: 'Mandag - Fredag',
          type: 'string'
        },
        {
          name: 'saturday',
          title: 'Lørdag',
          type: 'string'
        },
        {
          name: 'sunday',
          title: 'Søndag',
          type: 'string'
        }
      ]
    }
  ]
}