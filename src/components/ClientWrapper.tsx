"use client";

import React, { useState } from "react";
import { BranchProvider } from "@/context/BranchContext";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { CallMeModal } from "@/components/CallMeModal";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [callMeOpen, setCallMeOpen] = useState(false);

  return (
    <BranchProvider>
      <div className="flex flex-col min-h-screen">
        <FloatingNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
        <CallMeModal isOpen={callMeOpen} onClose={() => setCallMeOpen(false)} />
      </div>
    </BranchProvider>
  );
}
