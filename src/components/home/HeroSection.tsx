
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Aprenda inglês de forma <span className="text-up2you-coral">personalizada</span> e <span className="text-up2you-coral">eficiente</span>
            </h1>
            <p className="text-lg text-up2you-darkGray">
              Curso de inglês online com assistente virtual de IA que se adapta ao seu estilo de aprendizado, ritmo e objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                className="bg-up2you-coral text-white hover:bg-up2you-coral/90 border-none text-lg py-6"
              >
                <Link to="/onboarding">
                  Começar Grátis
                </Link>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="text-up2you-teal border-up2you-teal hover:bg-up2you-teal/10 text-lg py-6"
              >
                <Link to="/como-funciona">
                  Saiba Mais
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white">
                    {/* User avatars would go here */}
                  </div>
                ))}
              </div>
              <p className="text-sm text-up2you-darkGray">
                Mais de <span className="font-semibold">10,000 alunos</span> estudando
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-up2you-teal/10 to-up2you-coral/10 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-up2you-coral/20 rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-up2you-teal/20 rounded-full"></div>
              <div className="relative bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-up2you-coral/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-up2you-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-up2you-teal">Seu Assistente de IA</h3>
                    <p className="text-up2you-darkGray text-sm mt-1">Como posso ajudar você hoje com seu inglês?</p>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <p className="text-up2you-darkGray">Quero praticar meu inglês para uma entrevista de emprego.</p>
                </div>
                <div className="mt-4">
                  <div className="bg-up2you-teal/10 p-4 rounded-md">
                    <p className="text-up2you-darkGray">
                      Ótimo! Vamos criar um plano personalizado de estudo focado em vocabulário de negócios e simulações de entrevistas. Posso adaptar as lições ao seu nível e disponibilidade de tempo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
