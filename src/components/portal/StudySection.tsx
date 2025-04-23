
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export const StudySection = () => {
  const lessons = [
    { id: 1, title: "Greetings and Introductions", completed: true },
    { id: 2, title: "Basic Conversations", completed: true },
    { id: 3, title: "Numbers and Counting", completed: false },
    { id: 4, title: "Days and Time", completed: false },
    { id: 5, title: "Family Members", completed: false },
  ];

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const progress = (completedLessons / lessons.length) * 100;

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-up2you-teal mb-4">Seu Progresso</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Curso Básico de Inglês</span>
              <span className="text-sm text-gray-500">{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        </div>
      </Card>

      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-up2you-teal" />
                <div>
                  <h3 className="font-semibold text-up2you-teal">Lição {lesson.id}</h3>
                  <p className="text-sm text-gray-600">{lesson.title}</p>
                </div>
              </div>
              <Button 
                variant={lesson.completed ? "outline" : "default"}
                className={lesson.completed ? "text-green-600" : ""}
              >
                {lesson.completed ? "Concluído" : "Começar"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
