export default function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 rounded-2xl mt-4 sm:mt-8 overflow-hidden bg-[#b3d6e6] min-h-[500px] sm:min-h-[600px] lg:min-h-[500px]">
      {/* Image du modèle centrée en background */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <img src="/docteur.png" alt="Ophtalmologue" className="h-full object-cover object-center opacity-90" />
      </div>
      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 w-full h-full z-10 bg-black opacity-20 pointer-events-none" />

      {/* Container glassmorphism avec lunettes à gauche */}
      <div className="relative flex-1 flex flex-col items-center lg:items-start z-20 w-full">
        <div className="flex flex-col items-center rounded-xl p-3 sm:p-4 shadow mt-8 sm:mt-12 lg:mt-20 lg:ml-4 bg-white/30 backdrop-blur-md border border-white/40 w-full max-w-sm">
          <span className="text-gray-800 font-medium mb-3 text-center text-sm sm:text-base">Des conseils personnalisés pour votre santé visuelle.</span>
          <div className="flex items-center justify-center bg-white p-3 sm:p-5 rounded-xl w-full">
            <img src="ofta.jpg" alt="Glasses" className="w-full h-32 sm:h-40 object-cover rounded-xl" />
          </div>
        </div>
      </div>

      {/* Colonne droite : texte aligné à droite */}
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center lg:ml-12 relative z-20 px-4 sm:px-8 lg:pl-20 mt-6 lg:mt-0 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
          Dr. [Nom de l'Ophtalmologue]<br /> Votre expert en santé oculaire
        </h1>
        <p className="text-white mb-6 max-w-md text-sm sm:text-base">
          Spécialiste de la vision, je vous accompagne dans le dépistage, le suivi et le traitement des troubles oculaires. Bénéficiez d'un accompagnement personnalisé et des dernières avancées médicales pour préserver votre santé visuelle.
        </p>
      </div>
    </section>
  );
} 