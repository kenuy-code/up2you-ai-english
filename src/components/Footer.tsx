
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              <span className="text-up2you-coral">UP2</span>
              <span className="text-up2you-teal">YOU</span>
            </h3>
            <p className="text-up2you-darkGray/80 text-sm">
              O curso de inglês personalizado que se adapta ao seu estilo de aprendizado.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-up2you-teal mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Como Funciona</Link>
              </li>
              <li>
                <Link to="/precos" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Preços</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Sobre Nós</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-up2you-teal mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacidade" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/termos" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">Política de Cookies</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-up2you-teal mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-up2you-darkGray">
                <a href="mailto:contato@up2you.com.br" className="hover:text-up2you-coral transition-colors">
                  contato@up2you.com.br
                </a>
              </li>
              <li className="text-up2you-darkGray">
                <a href="tel:+551199999999" className="hover:text-up2you-coral transition-colors">
                  +55 11 9999-9999
                </a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-up2you-darkGray hover:text-up2you-coral transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-up2you-darkGray/60">
          <p>© {new Date().getFullYear()} UP2YOU. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
