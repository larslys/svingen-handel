import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-orange-100 rounded-lg shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/4">
            <div className="max-w-[200px] mx-auto">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-amber-200 shadow-lg relative">
                <Image
                  src="/images/oistein og livmette.jpg"
                  alt="Et utvalg av våre hjemmelagde kaker og bakst"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-amber-900 sm:text-5xl md:text-6xl">
              Velkommen til Svingen
            </h1>
            <p className="mt-4 text-xl text-amber-800">
              Hjemmelaget mat og bakst i nostalgiske omgivelser
            </p>
            <p className="mt-4 text-lg text-amber-800">
              Fra vårt kjøkken serverer vi nybakte kaker, smørbrød og andre godsaker, 
              laget med kjærlighet og tradisjonelle oppskrifter.
            </p>
          </div>
        </div>
      </section>

      {/* Featured sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
          <h2 className="text-2xl font-serif font-bold mb-4 text-amber-900">Dagens fristelser</h2>
          <div className="space-y-4 text-amber-800">
            <p className="text-lg">
              Nybakte brød og kaker fra vårt kjøkken, akkurat som bestemor lagde dem.
              Alt lages fra bunnen av med kjærlighet og tradisjonelle oppskrifter.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Hjemmebakt grovbrød</li>
              <li>Kanelsnurrer</li>
              <li>Eplekake med kanel</li>
              <li>Svele med brunost</li>
            </ul>
            <a href="/bakst" className="inline-block mt-4 text-amber-700 hover:text-amber-600">
              Se dagens utvalg →
            </a>
          </div>
        </section>

        <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
          <h2 className="text-2xl font-serif font-bold mb-4 text-amber-900">Sesongens skatter</h2>
          <div className="space-y-4 text-amber-800">
            <p className="text-lg">
              Fra naturens eget spiskammer: Ferske bær, sopp og urter.
              Håndplukket fra lokale skoger og marker.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Blåbær fra skogen</li>
              <li>Selvplukket kantareller</li>
              <li>Ville bringebær</li>
              <li>Urter fra hagen</li>
            </ul>
            <a href="/sesong" className="inline-block mt-4 text-amber-700 hover:text-amber-600">
              Se hva vi har nå →
            </a>
          </div>
        </section>
      </div>

      {/* Nostalgi section */}
      <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-6 text-amber-900">En reise tilbake i tid</h2>
          <p className="text-lg text-amber-800 mb-4">
            Hos oss finner du ikke bare god mat og drikke, men også en unik atmosfære 
            med interiør fra 1950-tallet. Ta en pause fra hverdagen i våre koselige 
            omgivelser med kaffeservering i gamle kopper og kakefat som bestemor hadde.
          </p>
          <p className="text-lg text-amber-800">
            Vårt lille hjørne av historien er fylt med nostalgiske skatter 
            og hjemmelaget godhet.
          </p>
        </div>
      </section>
    </div>
  )
}