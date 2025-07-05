export default function ServicesSection() {
  return (
    <section className="px-8 py-16 mt-8" id='services'>
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Nos services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
          {/* Icône ou image illustrative */}
          {/* <img src="/icone-examen.png" alt="Examen de la vue" className="w-16 h-16 mb-4" /> */}
          <span className="text-4xl mb-4">👁️</span>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Examen de la vue</h3>
          <p className="text-gray-800">Bilan visuel complet pour adultes et enfants, dépistage des troubles de la vision et prescription de corrections adaptées.</p>
        </div>
        {/* Service 2 */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
          {/* <img src="/icone-laser.png" alt="Traitement au laser" className="w-16 h-16 mb-4" /> */}
          <span className="text-4xl mb-4">💡</span>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Traitement au laser</h3>
          <p className="text-gray-800">Correction de la myopie, hypermétropie, astigmatisme et autres pathologies grâce aux technologies laser de dernière génération.</p>
        </div>
        {/* Service 3 */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
          {/* <img src="/icone-suivi.png" alt="Suivi et prévention" className="w-16 h-16 mb-4" /> */}
          <span className="text-4xl mb-4">🩺</span>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Suivi & prévention</h3>
          <p className="text-gray-800">Accompagnement personnalisé pour le suivi des maladies oculaires (glaucome, cataracte, DMLA...) et conseils de prévention.</p>
        </div>
      </div>
    </section>
  );
} 