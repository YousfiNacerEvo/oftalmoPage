export default function MapSection() {
  return (
    <section id="map" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-4 sm:mt-8 w-full">
      <div className="w-full bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-0 shadow-lg overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 text-center pt-6 sm:pt-8">Nous trouver</h2>
        <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
          {/* Remplacez l'URL ci-dessous par celle de votre adresse exacte si besoin */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999123916839!2d2.292292615674049!3d48.85837307928709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf1f6b1b1%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
} 