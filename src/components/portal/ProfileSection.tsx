
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ProfileSection = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-up2you-teal mb-6">Seu Perfil</h2>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" defaultValue="João Silva" />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="joao@exemplo.com" />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="level">Nível de Inglês</Label>
          <Input id="level" defaultValue="Intermediário (B1)" readOnly />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="goal">Objetivo de Estudo</Label>
          <Input id="goal" defaultValue="Business English" readOnly />
        </div>
        
        <Button className="w-full">Salvar Alterações</Button>
      </div>
    </Card>
  );
};
