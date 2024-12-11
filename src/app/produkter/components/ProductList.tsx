'use client'

import React from 'react'

type Product = {
  _id: string
  title: string
  description?: string
  price?: number
  category: string
}

type ProductListProps = {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  // Logging for debugging
  console.log('ProductList mottok produkter:', products);

  // Grupperer produkter etter kategori
  const breadAndBuns = products.filter(p => p.category === 'Brød og Boller')
  const cakes = products.filter(p => p.category === 'Kaker')
  const smallCakes = products.filter(p => p.category === 'Småkaker')
  const summerAutumn = products.filter(p => p.category === 'Sommer/Høst')
  const preserves = products.filter(p => p.category === 'Syltetøy og Saft')
  const other = products.filter(p => p.category === 'Andre Godsaker')


  return (
    <div className="space-y-12">
      {/* Introduksjon */}
      <section className="bg-orange-100 rounded-lg p-8 shadow-md">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 text-center mb-6">
          Våre Produkter
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-amber-800 text-center">
          Alt vi tilbyr er laget med kjærlighet og omtanke, enten det er bakt i vårt 
          kjøkken eller håndplukket fra naturen.
        </p>
      </section>

      {/* Debug info i utviklingsmodus */}
      {/*process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 p-4 mt-4 rounded">
          <h3 className="font-bold mb-2">Debug Info:</h3>
          <ul className="space-y-1">
            <li>Totalt antall produkter: {products.length}</li>
            <li>Brød og Boller: {breadAndBuns.length}</li>
            <li>Kaker: {cakes.length}</li>
            <li>Småkaker: {smallCakes.length}</li>
            <li>Sommer/Høst: {summerAutumn.length}</li>
            <li>Syltetøy og Saft: {preserves.length}</li>
            <li>Andre Godsaker: {other.length}</li>
          </ul>
        </div>
      )*/}

      {/* Bakerivarer */}
      <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
          Fra Bakeriet
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bare vis kategorier som har produkter */}
          {breadAndBuns.length > 0 && (
            <ProductCategory 
              title="Brød og Boller"
              items={breadAndBuns}
            />
          )}
          {cakes.length > 0 && (
            <ProductCategory 
              title="Kaker"
              items={cakes}
            />
          )}
          {smallCakes.length > 0 && (
            <ProductCategory 
              title="Småkaker"
              items={smallCakes}
            />
          )}
        </div>
      </section>

      {/* Sesongprodukter - bare vis seksjonen hvis det finnes relevante produkter */}
      {(summerAutumn.length > 0 || preserves.length > 0 || other.length > 0) && (
        <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            Sesongprodukter fra Naturen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summerAutumn.length > 0 && (
              <ProductCategory 
                title="Sommer/Høst"
                items={summerAutumn}
              />
            )}
            {preserves.length > 0 && (
              <ProductCategory 
                title="Syltetøy og Saft"
                items={preserves}
              />
            )}
            {other.length > 0 && (
              <ProductCategory 
                title="Andre Godsaker"
                items={other}
              />
            )}
          </div>
        </section>
      )}
    </div>
  )
}

// Hjelpefunksjon for å vise produktkategorier
const ProductCategory = ({ title, items }: { title: string, items: Product[] }) => (
  <div className="bg-amber-50 rounded-lg p-6">
    <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">{title}</h3>
    <ul className="space-y-2 text-amber-800">
      {items.map((product) => (
        <li key={product._id}>• {product.title}
          {/*product.price && <span className="text-amber-700"> - {product.price} kr</span>*/}

        </li>
      ))}
    </ul>
  </div>
)

export default ProductList