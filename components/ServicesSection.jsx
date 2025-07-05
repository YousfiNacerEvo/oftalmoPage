export default function ServicesSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-4 sm:mt-8" id='services'>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center text-gray-900">Nos services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Service 1 */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex flex-col items-center text-center">
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4">👁️</span>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Examen de la vue</h3>
          <p className="text-gray-800 text-sm sm:text-base">Bilan visuel complet pour adultes et enfants, dépistage des troubles de la vision et prescription de corrections adaptées.</p>
        </div>
        {/* Service 2 */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex flex-col items-center text-center">
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4">💡</span>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Traitement au laser</h3>
          <p className="text-gray-800 text-sm sm:text-base">Correction de la myopie, hypermétropie, astigmatisme et autres pathologies grâce aux technologies laser de dernière génération.</p>
        </div>
        {/* Service 3 */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4">🩺</span>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Suivi & prévention</h3>
          <p className="text-gray-800 text-sm sm:text-base">Accompagnement personnalisé pour le suivi des maladies oculaires (glaucome, cataracte, DMLA...) et conseils de prévention.</p>
        </div>
      </div>
    </section>
  );
} 