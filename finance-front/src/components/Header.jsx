import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const [dark, setDark] = useState(false);
  return (
    <header className="">
      <div className="">Dashboard</div>
      <button
        onClick={() => setDark(!dark)}
        className=""
      >
        {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
}