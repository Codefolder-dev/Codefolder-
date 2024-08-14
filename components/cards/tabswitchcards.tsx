"use client"
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../../style/custom-prism-theme.css";
import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";


import { cn } from "@/lib/utils";

const codeSnippets = {
  JavaScript: `// JavaScript example
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("CodeFolder"));`,
  TypeScript: `// TypeScript example
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("CodeFolder"));`,
  Go: `// Go example
package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name + "!"
}

func main() {
    fmt.Println(greet("CodeFolder"))
}`,
  Rust: `// Rust example
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    println!("{}", greet("CodeFolder"));
}`,
};

const languages = ["JavaScript", "TypeScript", "Go", "Rust"] as const;

type Language = typeof languages[number];

const TabSwitchCard = () => {
  const [selectedLang, setSelectedLang] = useState<Language>("JavaScript");

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedLang]);

  return (
    <div className="p-4  rounded-lg">
      <div className="flex gap-2 justify-around mb-4">
        {languages.map((lang) => (
          <button
            key={lang}
            className={cn(
              "px-4 py-2 border bg-indigo-500/30 border-gray-400/10  rounded-md",
              selectedLang === lang
                ? "bg-indigo-500 text-white"
                : " text-gray-300  hover:rounded-3xl"
            )}
            onClick={() => setSelectedLang(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
          <div className=" text-white   sm:flex relative p-4 h-96 rounded-lg font-mono">
              <div className=" sm:w-[33vw] rotate-6 sm:h-72 bg-blue-950/20 top-20 sm:-left-10 rounded-md hidden  sm:flex absolute z-0"></div>
        <pre className="language-js relative z-10 h-96 w-96 border border-gray-200/20">
          <code className={`language-${selectedLang.toLowerCase()} bg-gray-100`}>
            {codeSnippets[selectedLang]}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TabSwitchCard;
