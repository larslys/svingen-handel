// src/sanity/queries/products.ts
import { client } from '../lib/client'

export const productsQuery = `
  *[_type == "products"]{
    _id,
    title,
    description,
    price,
    category
  }
`

export async function getProducts() {
  try {
    console.log('Starter spørring mot Sanity...')
    
    const products = await client.fetch(productsQuery)
    
    // Logger hvert produkt og deres kategorier
    console.log('Produkter fra Sanity:')
    products.forEach((product: any) => {
      console.log(`- ${product.title}: kategori = "${product.category}"`)
    })
    
    // Logger unike kategorier
    const uniqueCategories = [...new Set(products.map((p: any) => p.category))]
    console.log('Unike kategorier i databasen:', uniqueCategories)
    
    return products
  } catch (error) {
    console.error('Feil ved henting av produkter fra Sanity:', error)
    throw error
  }
}

export async function checkSanityConnection() {
  try {
    const products = await client.fetch('*[_type == "products"]')
    const categories = [...new Set(products.map((p: any) => p.category))]
    
    return { 
      success: true, 
      productCount: products.length,
      categories
    }
  } catch (error) {
    console.error('Feil ved sjekk av Sanity-tilkobling:', error)
    return { success: false, error }
  }
}