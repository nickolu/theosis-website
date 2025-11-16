"use client";

import MonsterTransition from "@/components/MonsterTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <MonsterTransition>{children}</MonsterTransition>;
}
