export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-12 rounded-2xl mt-8 overflow-hidden bg-[#b3d6e6]">
      {/* Image du modèle centrée en background */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <img src="/docteur.png" alt="Ophtalmologue" className= " h-full object-cover object-center opacity-90" />
      </div>
      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 w-full h-full z-10 bg-black opacity-20 pointer-events-none" />

      {/* Container glassmorphism avec lunettes à gauche */}
      <div className="relative flex-1 flex flex-col items-start z-20">
        <div className="flex flex-col items-center rounded-xl p-4 shadow mt-72 md:mt-80 ml-4 bg-white/30 backdrop-blur-md border border-white/40">
          {/* Ajoute ici l'image des lunettes */}
          
          <span className="text-gray-800 font-medium mb-3">Des conseils personnalisés pour votre santé visuelle.</span>
          <div className=" flex items-center justify-center mr-4 bg-white p-5 rounded-xl ">
            <img src="ofta.jpg" alt="Glasses" className="w-full object-cover rounded-xl " />
          </div>
        </div>
      </div>

      {/* Colonne droite : texte aligné à droite */}
      <div className="flex-1 flex flex-col item-center  justify-center md:ml-12 relative z-20 pl-20 ">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Dr. [Nom de l'Ophtalmologue]<br /> Votre expert en santé oculaire
        </h1>
        <p className="text-white mb-6 max-w-md">
          Spécialiste de la vision, je vous accompagne dans le dépistage, le suivi et le traitement des troubles oculaires. Bénéficiez d’un accompagnement personnalisé et des dernières avancées médicales pour préserver votre santé visuelle.
        </p>
      </div>
    </section>
  );
} 