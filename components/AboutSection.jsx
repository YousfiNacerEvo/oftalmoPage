"use client"

export default function AboutSection() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24" id="about">
      {/* Photo du médecin */}
      <div className="flex-1 flex justify-center mb-12 lg:mb-0">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl transform rotate-3"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/child.jfif"
              alt="Portrait de l'ophtalmologue"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Texte de présentation */}
      <div className="flex-1 flex flex-col items-center lg:items-start lg:ml-16 xl:ml-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900 text-center lg:text-left leading-tight">
          Dr. [Nom de l'Ophtalmologue]
        </h2>
        <h3 className="text-lg sm:text-xl font-medium mb-8 text-blue-600 text-center lg:text-left">
          Ophtalmologue spécialisé
        </h3>
        <p className="text-gray-700 text-lg sm:text-xl text-center lg:text-left leading-relaxed max-w-xl mb-6">
          Plus de 10 ans d'expérience en ophtalmologie avec une expertise reconnue dans le diagnostic et le traitement des pathologies oculaires.
        </p>
        <p className="text-gray-600 text-base sm:text-lg text-center lg:text-left leading-relaxed max-w-xl">
          Accompagnement personnalisé, technologies de pointe et conseils sur-mesure pour préserver votre santé visuelle.
        </p>
      </div>
    </section>
  );
} 