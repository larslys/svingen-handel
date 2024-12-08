// src/app/om-oss/page.tsx
export default function OmOss() {
  return (
    <div className="space-y-12">
      {/* Hovedseksjon */}
      <section className="bg-orange-100 rounded-lg p-8 shadow-md">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 text-center mb-6">
          Om Svingen Handel og Kafe
        </h1>
        <div className="max-w-3xl mx-auto text-lg text-amber-800">
          <p className="mb-4">
            I hjertet av Svingen ligger vår lille perle – en handel og kafe som tar deg med på 
            en nostalgisk reise tilbake til en tid da livet gikk i et roligere tempo.
          </p>
          <p>
            Her møtes tradisjoner og kvalitet i en atmosfære preget av varme og 
            hjemmekoselig stemning fra 1950-tallet.
          </p>
        </div>
      </section>

      {/* Vår Historie */}
      <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            Vår Historie
          </h2>
          <div className="text-amber-800 space-y-4">
            <p>
              Det hele startet med en drøm om å skape et sted der folk kunne finne ro i 
              hverdagen, nyte hjemmelaget mat og oppleve ekte håndverk.
            </p>
            <p>
              Vi har innredet lokalene våre med originale møbler og interiør fra 
              50-tallet, nøye håndplukket for å skape den rette stemningen. Her kan du 
              nyte kaffen din fra vintage kopper mens du sitter i en klassisk 
              gyngestol eller ved et autentisk kjøkkenbord fra epoken.
            </p>
          </div>
        </div>
      </section>

      {/* Det vi tilbyr */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            Fra Naturens Spiskammer
          </h2>
          <div className="text-amber-800 space-y-4">
            <p>
              Gjennom sesongen tilbyr vi ferske bær, sopp og urter fra lokale skoger 
              og marker. Alt er nøye utvalgt og plukket for hånd.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Ville bær fra skogen</li>
              <li>Fersk sopp i sesongen</li>
              <li>Urter fra egen hage</li>
              <li>Lokale spesialiteter</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            Fra Vårt Kjøkken
          </h2>
          <div className="text-amber-800 space-y-4">
            <p>
              I vårt kjøkken lager vi alt fra bunnen av, med kjærlighet og 
              tradisjonelle oppskrifter som er gått i arv gjennom generasjoner.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Nybakte brød og boller</li>
              <li>Hjemmelagde kaker</li>
              <li>Tradisjonelle middagsretter</li>
              <li>Sesongbaserte spesialiteter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Våre Verdier */}
      <section className="bg-white rounded-lg p-8 shadow-md border-2 border-amber-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 text-center">
            Våre Verdier
          </h2>
          <div className="text-amber-800 space-y-4">
            <p className="text-center">
              Vi tror på ekte håndverk, lokale råvarer og betydningen av å ta vare på 
              tradisjonene våre. Hos oss handler det om mer enn bare mat – det handler 
              om å skape en opplevelse og et pusterom i hverdagen.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}