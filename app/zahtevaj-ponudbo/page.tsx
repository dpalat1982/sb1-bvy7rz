"use client";

import { QuoteRequestForm } from "@/components/quote-request-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuoteRequestPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Zahtevajte ponudbo</CardTitle>
            <CardDescription>
              Izpolnite spodnji obrazec in pripravili vam bomo personalizirano ponudbo za vaš projekt tiska na majice.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <QuoteRequestForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}