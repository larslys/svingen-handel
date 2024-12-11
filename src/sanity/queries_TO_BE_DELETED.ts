// src/sanity/queries.ts
import { groq } from 'next-sanity'

export const getContactInfo = groq`*[_type == "contactInfo"][0]{
  address,
  phone,
  email,
  hours
}`


export const getProductInfo = groq`*[_type == "productInfo"][0]{
  title,
  category,
  description,
  price
}`
