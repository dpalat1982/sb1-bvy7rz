"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

export function FaqCategories() {
  const [openCategory, setOpenCategory] = useState<string | null>("narocanje");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="space-y-6">
      {Object.entries(faqData).map(([categoryId, category]) => (
        <div key={categoryId} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleCategory(categoryId)}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <category.icon className="h-5 w-5 text-blue-600" />
              <span className="font-medium">{category.title}</span>
            </div>
            <ChevronDown className={cn(
              "h-5 w-5 transition-transform",
              openCategory === categoryId ? "transform rotate-180" : ""
            )} />
          </button>

          {openCategory === categoryId && (
            <div className="divide-y">
              {category.questions.map((item, index) => (
                <div key={index} className="bg-white">
                  <button
                    onClick={() => toggleQuestion(`${categoryId}-${index}`)}
                    className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.question}</span>
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        openQuestions[`${categoryId}-${index}`] ? "transform rotate-180" : ""
                      )} />
                    </div>
                  </button>
                  
                  {openQuestions[`${categoryId}-${index}`] && (
                    <div className="p-4 pt-0">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}