export default function ServicesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24" id='services'>
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center text-gray-900 leading-tight">
        Nos services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
        {/* Service 1 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-20 h-20 mb-8 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors duration-300">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Examen de la vue</h3>
          <p className="text-gray-600 text-lg leading-relaxed">Bilan visuel complet pour adultes et enfants, dépistage des troubles de la vision et prescription de corrections adaptées.</p>
        </div>
        {/* Service 2 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-20 h-20 mb-8 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors duration-300">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Traitement au laser</h3>
          <p className="text-gray-600 text-lg leading-relaxed">Correction de la myopie, hypermétropie, astigmatisme et autres pathologies grâce aux technologies laser de dernière génération.</p>
        </div>
        {/* Service 3 */}
        <div className="flex flex-col items-center text-center group sm:col-span-2 lg:col-span-1">
          <div className="w-20 h-20 mb-8 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors duration-300">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Suivi & prévention</h3>
          <p className="text-gray-600 text-lg leading-relaxed">Accompagnement personnalisé pour le suivi des maladies oculaires (glaucome, cataracte, DMLA...) et conseils de prévention.</p>
        </div>
      </div>
    </section>
  );
} 