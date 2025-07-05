export default function Footer() {
  return (
    <footer className="w-full bg-blue-900/80 backdrop-blur-md border-t border-white/40 py-6 mt-8 rounded-4xl">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-white font-medium text-center md:text-left">
          © {new Date().getFullYear()} Dr. [Nom de l'Ophtalmologue]. Tous droits réservés.
        </span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Lien Instagram */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
            </svg>
          </a>
          {/* Lien Facebook */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
} 