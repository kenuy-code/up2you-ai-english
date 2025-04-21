
import { useState } from "react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "O assistente virtual me ajudou muito a ganhar confiança para falar inglês. As aulas são perfeitamente adaptadas ao meu estilo de aprendizado e necessidades profissionais.",
      author: "Mariana Silva",
      title: "Analista de Marketing",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: 2,
      content: "A flexibilidade do curso é incrível. Consigo estudar de madrugada, que é quando tenho tempo livre, e o assistente está sempre disponível para tirar minhas dúvidas.",
      author: "João Pereira",
      title: "Engenheiro de Software",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 3,
      content: "Depois de tentar vários cursos, o UP2YOU foi o único que realmente me fez evoluir. O sistema de personalização das aulas faz toda diferença para manter a motivação.",
      author: "Camila Rocha",
      title: "Médica",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 4,
      content: "Estou me preparando para uma viagem ao exterior e o curso me ajudou a ganhar fluência em conversações do dia a dia. A IA identifica meus erros e me ajuda a corrigi-los imediatamente.",
      author: "Rafael Gomes",
      title: "Arquiteto",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: 5,
      content: "As aulas focadas em negócios me prepararam perfeitamente para minha nova posição internacional. Consegui passar na entrevista com confiança graças ao treinamento específico.",
      author: "Luísa Mendes",
      title: "Gerente de Projetos",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos alunos</h2>
          <p className="text-lg text-up2you-darkGray">
            Histórias reais de pessoas que transformaram seu aprendizado de inglês com a UP2YOU.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white shadow-lg rounded-2xl p-8 md:p-12">
            <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-16 w-16 text-up2you-coral opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            
            <div className="relative">
              <p className="text-xl md:text-2xl font-medium text-up2you-darkGray mb-8">
                "{testimonials[activeTestimonial].content}"
              </p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].author}
                />
                <div className="ml-4">
                  <div className="text-base font-medium text-up2you-teal">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-sm text-up2you-darkGray">
                    {testimonials[activeTestimonial].title}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 text-up2you-darkGray hover:bg-up2you-coral/10 hover:text-up2you-coral transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 text-up2you-darkGray hover:bg-up2you-coral/10 hover:text-up2you-coral transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeTestimonial === index ? "bg-up2you-coral" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
