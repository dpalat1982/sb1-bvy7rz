"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Ime mora vsebovati vsaj 2 znaka"),
  location: z.string().min(2, "Vnesite kraj"),
  rating: z.string().min(1, "Izberite oceno"),
  orderType: z.string().min(1, "Izberite vrsto naročila"),
  comment: z.string().min(10, "Mnenje mora vsebovati vsaj 10 znakov").max(500, "Mnenje je lahko dolgo največ 500 znakov"),
});

const orderTypes = [
  "Tisk na majice",
  "Tisk na majice s kratkimi rokavi",
  "Tisk na majice z dolgimi rokavi",
  "Tisk na športne majice",
  "Tisk na ženske majice",
  "Tisk na puloverje in jope",
];

interface AddReviewFormProps {
  onSubmit: () => void;
}

export function AddReviewForm({ onSubmit }: AddReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      rating: "",
      orderType: "",
      comment: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your API
      console.log(values);
      toast({
        title: "Mnenje oddano",
        description: "Hvala za vaše mnenje!",
      });
      form.reset();
      onSubmit();
    } catch (error) {
      toast({
        title: "Napaka",
        description: "Prišlo je do napake. Prosimo, poskusite ponovno.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Dodaj svoje mnenje</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ime in priimek</FormLabel>
                <FormControl>
                  <Input placeholder="Janez N." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kraj</FormLabel>
                <FormControl>
                  <Input placeholder="Ljubljana" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ocena</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Izberite oceno" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <SelectItem key={rating} value={rating.toString()}>
                        {rating} {rating === 1 ? "zvezdica" : rating === 2 ? "zvezdici" : rating === 3 || rating === 4 ? "zvezdice" : "zvezdic"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="orderType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vrsta naročila</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Izberite vrsto naročila" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {orderTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vaše mnenje</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Delite svojo izkušnjo z nami..."
                    className="h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Pošiljanje..." : "Oddaj mnenje"}
          </Button>
        </form>
      </Form>
    </div>
  );
}