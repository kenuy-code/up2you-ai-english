
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studyTime: "",
    goals: "",
    level: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Handle form submission logic here
    // For demo purposes, we'll just navigate to the next step
    setStep(4);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-up2you-teal mb-4">Vamos personalizar seu aprendizado</h1>
              <p className="text-up2you-darkGray text-lg">
                Responda algumas perguntas para que possamos criar um plano de estudos adaptado ao seu perfil e objetivos.
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= i ? "bg-up2you-coral text-white" : "bg-gray-200 text-up2you-darkGray"
                      }`}
                    >
                      {step > i ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        i
                      )}
                    </div>
                    {i < 3 && (
                      <div className={`w-full h-1 ${step > i ? "bg-up2you-coral" : "bg-gray-200"}`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm text-up2you-darkGray">
                <span>Tempo de estudo</span>
                <span>Objetivos</span>
                <span>Nível de proficiência</span>
              </div>
            </div>

            <Card className="p-6">
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold text-up2you-teal mb-4">Quanto tempo você pode dedicar aos estudos?</h2>
                  <form>
                    <RadioGroup
                      value={formData.studyTime}
                      onValueChange={(value) => setFormData({ ...formData, studyTime: value })}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="short" id="short" />
                        <Label htmlFor="short" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Aulas rápidas</span>
                          <span className="text-sm text-gray-500">5-15 minutos por dia</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Aulas médias</span>
                          <span className="text-sm text-gray-500">15-30 minutos por dia</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="long" id="long" />
                        <Label htmlFor="long" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Aulas longas</span>
                          <span className="text-sm text-gray-500">30+ minutos por dia</span>
                        </Label>
                      </div>
                    </RadioGroup>
                    <div className="mt-8 flex justify-end">
                      <Button
                        onClick={handleNext}
                        className="bg-up2you-coral text-white hover:bg-up2you-coral/90"
                        disabled={!formData.studyTime}
                      >
                        Próximo
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold text-up2you-teal mb-4">Quais são seus objetivos com o inglês?</h2>
                  <form>
                    <RadioGroup
                      value={formData.goals}
                      onValueChange={(value) => setFormData({ ...formData, goals: value })}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Negócios</span>
                          <span className="text-sm text-gray-500">Reuniões, apresentações, networking</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="travel" id="travel" />
                        <Label htmlFor="travel" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Viagens</span>
                          <span className="text-sm text-gray-500">Situações do dia-a-dia, turismo</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="academic" id="academic" />
                        <Label htmlFor="academic" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Estudos</span>
                          <span className="text-sm text-gray-500">Preparação para testes, leitura acadêmica</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Geral</span>
                          <span className="text-sm text-gray-500">Conversação cotidiana, filmes, música</span>
                        </Label>
                      </div>
                    </RadioGroup>
                    <div className="mt-8 flex justify-between">
                      <Button
                        onClick={handlePrevious}
                        variant="outline"
                      >
                        Voltar
                      </Button>
                      <Button
                        onClick={handleNext}
                        className="bg-up2you-coral text-white hover:bg-up2you-coral/90"
                        disabled={!formData.goals}
                      >
                        Próximo
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-xl font-semibold text-up2you-teal mb-4">Qual seu nível atual de inglês?</h2>
                  <form onSubmit={handleSubmit}>
                    <RadioGroup
                      value={formData.level}
                      onValueChange={(value) => setFormData({ ...formData, level: value })}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="beginner" id="beginner" />
                        <Label htmlFor="beginner" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Iniciante</span>
                          <span className="text-sm text-gray-500">Sei poucas palavras e frases básicas</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="intermediate" id="intermediate" />
                        <Label htmlFor="intermediate" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Intermediário</span>
                          <span className="text-sm text-gray-500">Consigo me comunicar em situações simples</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="advanced" id="advanced" />
                        <Label htmlFor="advanced" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Avançado</span>
                          <span className="text-sm text-gray-500">Tenho boa fluência, mas quero aperfeiçoar</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="fluent" id="fluent" />
                        <Label htmlFor="fluent" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Fluente</span>
                          <span className="text-sm text-gray-500">Procuro vocabulário específico e refinamento</span>
                        </Label>
                      </div>
                    </RadioGroup>
                    <div className="mt-8 flex justify-between">
                      <Button
                        type="button"
                        onClick={handlePrevious}
                        variant="outline"
                      >
                        Voltar
                      </Button>
                      <Button
                        type="submit"
                        className="bg-up2you-coral text-white hover:bg-up2you-coral/90"
                        disabled={!formData.level}
                      >
                        Finalizar
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-6">
                  <div className="bg-up2you-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-up2you-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-up2you-teal mb-4">Seu plano personalizado está pronto!</h2>
                  <p className="text-up2you-darkGray mb-8">
                    Com base nas suas respostas, criamos um programa de estudos adaptado às suas necessidades.
                  </p>
                  <Button className="bg-up2you-coral text-white hover:bg-up2you-coral/90 px-8 py-6">
                    Acessar Meu Curso
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;
