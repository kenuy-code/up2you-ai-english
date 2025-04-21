
import { Button } from "@/components/ui/button";

export const AiAssistantSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-6 relative">
              {/* AI Assistant UI Mock */}
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="w-10 h-10 rounded-full bg-up2you-coral flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-up2you-teal">UP2YOU Assistant</h4>
                  <p className="text-xs text-up2you-darkGray/70">Online • Personalizado para você</p>
                </div>
              </div>

              <div className="space-y-4 mt-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm text-up2you-darkGray max-w-[80%]">
                    How do I say "I'm excited about this opportunity" in a job interview?
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-up2you-teal/10 rounded-lg rounded-tr-none p-3 text-sm text-up2you-darkGray max-w-[80%]">
                    You can say "I'm excited about this opportunity" directly as it's a common and natural phrase in interviews. In a more formal context, you could also say "I'm enthusiastic about this position" or "I'm very eager to contribute to your team."
                    <br /><br />
                    Would you like to practice this in a mock interview scenario?
                  </div>
                  <div className="w-8 h-8 rounded-full bg-up2you-coral flex items-center justify-center text-white shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm text-up2you-darkGray max-w-[80%]">
                    Yes, let's practice a mock interview!
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-up2you-teal/10 rounded-lg rounded-tr-none p-3 text-sm text-up2you-darkGray max-w-[80%]">
                    Great! Let's start our mock interview. I'll play the role of the interviewer.
                    <br /><br />
                    <strong>Interviewer:</strong> Thank you for coming in today. Could you tell me why you're interested in this position?
                  </div>
                  <div className="w-8 h-8 rounded-full bg-up2you-coral flex items-center justify-center text-white shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Digite sua resposta..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-up2you-coral/50"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-up2you-coral text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seu assistente pessoal de inglês com IA</h2>
            <div className="space-y-6 text-up2you-darkGray">
              <p className="text-lg">
                Conheça nosso assistente virtual inteligente, projetado para transformar seu aprendizado de inglês com feedback personalizado e prática constante.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-up2you-coral/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-up2you-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-up2you-teal text-lg">Conversação Natural</h3>
                    <p className="mt-1">
                      Pratique conversas reais em inglês a qualquer momento, recebendo feedback imediato e correções em tempo real.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-up2you-coral/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-up2you-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-up2you-teal text-lg">Adaptação Contínua</h3>
                    <p className="mt-1">
                      O assistente aprende com suas interações e ajusta automaticamente o conteúdo às suas necessidades.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-up2you-coral/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-up2you-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-up2you-teal text-lg">Simulação de Situações Reais</h3>
                    <p className="mt-1">
                      Pratique entrevistas de emprego, viagens, apresentações e muito mais em um ambiente seguro.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="bg-up2you-coral text-white hover:bg-up2you-coral/90 border-none">
                  Experimentar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
