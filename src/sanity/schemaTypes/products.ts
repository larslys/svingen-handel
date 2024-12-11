// src/app/sanity/schemaTypes/products.ts
export default {
  name: 'products',
  title: 'Produkter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Navn',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text'
    },
    {
      name: 'price',
      title: 'Pris',
      type: 'number'
    },
    {
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
      validation: (Rule: any) => Rule.required()
    }
  ]
}