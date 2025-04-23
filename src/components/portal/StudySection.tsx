
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const StudySection = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-up2you-teal mb-4">Seu Progresso</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Módulo Atual</span>
              <span className="text-sm text-gray-500">75%</span>
            </div>
            <Progress value={75} />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold text-up2you-teal mb-2">Próxima Lição</h3>
          <p className="text-sm text-gray-600">Business English: Making Presentations</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-up2you-teal mb-2">Vocabulário</h3>
          <p className="text-sm text-gray-600">230 palavras aprendidas</p>
        </Card>
      </div>
    </div>
  );
};
