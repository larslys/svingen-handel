// src/app/produkter/page.tsx
export default function Produkter() {
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

      {/* Bakerivarer */}
      <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
          Fra Bakeriet
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Brød og Boller</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Grovbrød</li>
              <li>• Rundstykker</li>
              <li>• Kanelboller</li>
              <li>• Hveteboller</li>
              <li>• Glutenfritt brød (på bestilling)</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Kaker</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Eplekake</li>
              <li>• Krumkaker</li>
              <li>• Sjokoladekake</li>
              <li>• Bløtkake</li>
              <li>• Dagens kake</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Småkaker</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Havrekjeks</li>
              <li>• Sandkaker</li>
              <li>• Berlinerkranser</li>
              <li>• Sirupssnipper</li>
              <li>• Pepperkaker (i sesong)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sesongprodukter */}
      <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
          Sesongprodukter fra Naturen
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Sommer/Høst</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Blåbær</li>
              <li>• Tyttebær</li>
              <li>• Bringebær</li>
              <li>• Ville urter</li>
              <li>• Kantareller og sopp</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Syltetøy og Saft</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Blåbærsyltetøy</li>
              <li>• Bringebærsyltetøy</li>
              <li>• Hjemmelaget saft</li>
              <li>• Ripsgele</li>
              <li>• Rørte tyttebær</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">Andre Godsaker</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Honning fra lokale birøktere</li>
              <li>• Tørket sopp</li>
              <li>• Urteblanding</li>
              <li>• Hjemmelagde drops</li>
              <li>• Karameller</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bestillinger */}
      <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            Bestillinger
          </h2>
          <p className="text-lg text-amber-800 mb-4">
            Vi tar gjerne imot bestillinger på kaker, brød og andre produkter. 
            Kontakt oss minst to dager i forveien så baker vi etter dine ønsker.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Ta kontakt for bestilling
          </a>
        </div>
      </section>

      {/* Merk */}
      <section className="bg-orange-100 rounded-lg p-6 text-center">
        <p className="text-amber-800">
          Merk: Utvalget kan variere etter sesong og tilgjengelighet. 
          Spør oss gjerne om dagens ferske produkter!
        </p>
      </section>
    </div>
  )
}