// src/sanity/schemaTypes/contactInfo.ts
import { defineType, defineField } from 'sanity'

const contactInfoSchema = defineType({
  name: 'contactInfo',
  title: 'Kontaktinformasjon',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string'
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'E-post',
      type: 'string'
    }),
    defineField({
      name: 'hours',
      title: 'Åpningstider',
      type: 'object',
      fields: [
        defineField({
          name: 'weekdays',
          title: 'Mandag - Fredag',
          type: 'string'
        }),
        defineField({
          name: 'saturday',
          title: 'Lørdag',
          type: 'string'
        }),
        defineField({
          name: 'sunday',
          title: 'Søndag',
          type: 'string'
        })
      ]
    })
  ]
})

export default contactInfoSchema