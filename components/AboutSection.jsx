export default function AboutSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-4 sm:mt-8" id="about">
      {/* Photo de l'ophtalmologue */}
      <div className="flex-1 flex justify-center mb-6 lg:mb-0">
        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center">
          <img src="child.jfif" alt="Portrait de l'ophtalmologue" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Texte de présentation */}
      <div className="flex-1 flex flex-col items-center lg:items-start lg:ml-8 xl:ml-12 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mt-6 lg:mt-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center lg:text-left">À propos de moi</h2>
        <p className="text-gray-800 mb-4 text-sm sm:text-base text-center lg:text-left">
          Passionné par la santé visuelle, j'exerce en tant qu'ophtalmologue depuis plus de 10 ans. Mon objectif est d'offrir à chaque patient un accompagnement personnalisé, basé sur l'écoute, la prévention et l'innovation médicale.
        </p>
        <p className="text-gray-800 text-sm sm:text-base text-center lg:text-left">
          Je mets un point d'honneur à proposer des solutions adaptées à chaque besoin, en m'appuyant sur les dernières avancées technologiques et scientifiques. Votre bien-être visuel est ma priorité.
        </p>
      </div>
    </section>
  );
} 