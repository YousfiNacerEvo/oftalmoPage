export default function AboutSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-16 mt-8" id="about">
      {/* Photo de l'ophtalmologue */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center">
          {/* Ajoute ici la photo portrait du docteur */}
          <img src="child.jfif" alt="Portrait de l'ophtalmologue" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Texte de présentation */}
      <div className="flex-1 flex flex-col items-start md:ml-12 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">À propos de moi</h2>
        <p className="text-gray-800 mb-4">
          Passionné par la santé visuelle, j’exerce en tant qu’ophtalmologue depuis plus de 10 ans. Mon objectif est d’offrir à chaque patient un accompagnement personnalisé, basé sur l’écoute, la prévention et l’innovation médicale.
        </p>
        <p className="text-gray-800">
          Je mets un point d’honneur à proposer des solutions adaptées à chaque besoin, en m’appuyant sur les dernières avancées technologiques et scientifiques. Votre bien-être visuel est ma priorité.
        </p>
      </div>
    </section>
  );
} 