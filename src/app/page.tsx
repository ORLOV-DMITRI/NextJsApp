"use client";

import { Raiting } from "@/components";
import { useState } from "react";

export default function Home() {
  const [raiting, setRaiting] = useState(4);
  return (
    <main>
      <Raiting raiting={raiting} setRaiting={setRaiting} isEditable />
    </main>
  );
}
