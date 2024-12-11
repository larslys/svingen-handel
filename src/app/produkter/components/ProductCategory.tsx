'use client'

import React from 'react'

type Product = {
  _id: string
  title: string
  description?: string
  price?: number
  mainCategory: 'bakery' | 'seasonal'
  subCategory: 'bread' | 'cakes' | 'smallCakes' | 'summerAutumn' | 'preserves' | 'other'
}

type ProductCategoryProps = {
  title: string
  items: Product[]
}

const ProductCategory = ({ title, items }: ProductCategoryProps) => (
  <div className="bg-amber-50 rounded-lg p-6">
    <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">{title}</h3>
    {items.length === 0 ? (
      <p className="text-amber-800 italic">Ingen produkter tilgjengelig</p>
    ) : (
      <ul className="space-y-2 text-amber-800">
        {items.map((product) => (
          <li key={product._id}>• {product.title}
            {product.price && <span className="text-amber-700"> - {product.price} kr</span>}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default ProductCategory