export default function MapSection() {
  return (
    <section id="map" className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center text-gray-900 leading-tight">
        Nous trouver
      </h2>
      <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
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
      <div className="flex justify-center mt-8">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Tour+Eiffel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Itinéraire Google Maps
        </a>
      </div>
    </section>
  );
} 