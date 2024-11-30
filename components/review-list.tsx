"use client";

import { Star } from "lucide-react";
import { reviews } from "@/lib/review-data";

export function ReviewList() {
  return (
    <div className="grid gap-8">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.location}</p>
            </div>
            <div className="text-sm text-gray-500">{review.date}</div>
          </div>
          
          <div className="flex items-center mb-2">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <p className="text-sm text-blue-600 mb-3">{review.orderType}</p>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}