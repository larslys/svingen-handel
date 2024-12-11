// src/sanity/schemaTypes/products.ts
import { defineField, defineType } from 'sanity'

const productsSchema = defineType({
  name: 'products',
  title: 'Produkter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navn',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text'
    }),
    defineField({
      name: 'price',
      title: 'Pris',
      type: 'number'
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Brød og Boller', value: 'Brød og Boller' },
          { title: 'Kaker', value: 'Kaker' },
          { title: 'Småkaker', value: 'Småkaker' },
          { title: 'Sommer/Høst', value: 'Sommer/Høst' },
          { title: 'Syltetøy og Saft', value: 'Syltetøy og Saft' },
          { title: 'Andre Godsaker', value: 'Andre Godsaker' }
        ]
      },
      validation: rule => rule.required()
    })
  ]
})

export default productsSchema