
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudySection } from "@/components/portal/StudySection";
import { ChatSection } from "@/components/portal/ChatSection";
import { ProfileSection } from "@/components/portal/ProfileSection";

const Portal = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-up2you-teal mb-6">Portal do Aluno</h1>
        <Tabs defaultValue="study" className="space-y-4">
          <TabsList>
            <TabsTrigger value="study">Estudar</TabsTrigger>
            <TabsTrigger value="chat">Chat com IA</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
          </TabsList>
          
          <TabsContent value="study" className="space-y-4">
            <StudySection />
          </TabsContent>
          
          <TabsContent value="chat" className="space-y-4">
            <ChatSection />
          </TabsContent>
          
          <TabsContent value="profile" className="space-y-4">
            <ProfileSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Portal;
