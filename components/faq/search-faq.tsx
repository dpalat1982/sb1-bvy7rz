"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { faqData } from "@/lib/faq-data";

export function SearchFaq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{ question: string; answer: string }>>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const results = Object.values(faqData)
      .flatMap(category => category.questions)
      .filter(item => 
        item.question.toLowerCase().includes(query.toLowerCase()) ||
        item.answer.toLowerCase().includes(query.toLowerCase())
      );

    setSearchResults(results);
  };

  return (
    <div className="mb-12">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="search"
          placeholder="Iskanje po pogostih vprašanjih..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {searchResults.length > 0 && (
        <div className="mt-4 space-y-4">
          {searchResults.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-4">
              <h3 className="font-medium mb-2">{result.question}</h3>
              <p className="text-gray-600 text-sm">{result.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}