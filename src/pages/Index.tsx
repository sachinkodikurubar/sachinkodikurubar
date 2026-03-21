import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CursorGlow />
      {/* Ambient background particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-[1140px] mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-6 relative z-10">
        <Sidebar />
        <main className="flex-1 min-w-0 content-card p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Index;
