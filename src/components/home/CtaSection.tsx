
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-up2you-teal text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para revolucionar seu aprendizado de inglês?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Junte-se a milhares de estudantes que estão aprendendo inglês de forma personalizada, adaptativa e eficiente com nosso assistente de IA.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            className="bg-up2you-coral hover:bg-up2you-coral/90 text-white border-none text-lg py-6 px-8"
          >
            <Link to="/onboarding">
              Começar Agora
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="bg-transparent hover:bg-white/10 text-white border-white text-lg py-6 px-8"
          >
            <Link to="/sobre">
              Saiba Mais
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
