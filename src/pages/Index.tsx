import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[1140px] mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-6">
        <Sidebar />
        <main className="flex-1 min-w-0 content-card p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Index;
