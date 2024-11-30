"use client";

import { ReviewList } from "@/components/review-list";
import { AddReviewForm } from "@/components/add-review-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ReviewsPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Mnenja strank</h1>
          <p className="text-gray-600 text-center mb-6">
            Preberite, kaj o nas pravijo zadovoljne stranke
          </p>

          <div className="text-center mb-12">
            <Button 
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isFormVisible ? "Skrij obrazec" : "Dodaj svoje mnenje"}
            </Button>
          </div>

          {isFormVisible && (
            <div className="mb-12">
              <AddReviewForm onSubmit={() => setIsFormVisible(false)} />
            </div>
          )}

          <ReviewList />
        </div>
      </div>
    </div>
  );
}