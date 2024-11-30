"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Ime mora vsebovati vsaj 2 znaka"),
  email: z.string().email("Vnesite veljaven email naslov"),
  phone: z.string().min(8, "Vnesite veljavno telefonsko številko"),
  quantity: z.string().min(1, "Izberite količino"),
  description: z.string().min(10, "Opis mora vsebovati vsaj 10 znakov"),
});

export function QuoteRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      quantity: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      toast({
        title: "Zahteva poslana",
        description: "Kmalu vas bomo kontaktirali s personalizirano ponudbo.",
      });
      form.reset();
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ime in priimek</FormLabel>
              <FormControl>
                <Input placeholder="Janez Novak" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email naslov</FormLabel>
              <FormControl>
                <Input placeholder="janez.novak@email.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefonska številka</FormLabel>
              <FormControl>
                <Input placeholder="+386 31 123 456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Količina</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Izberite količino" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="10-50">10-50 kosov</SelectItem>
                  <SelectItem value="51-100">51-100 kosov</SelectItem>
                  <SelectItem value="101-500">101-500 kosov</SelectItem>
                  <SelectItem value="500+">Več kot 500 kosov</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Opis projekta</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Opišite vaš projekt (barve, pozicija tiska, vrsta majic...)"
                  className="h-32"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Več informacij nam posredujete, bolj natančno ponudbo vam lahko pripravimo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Pošiljanje..." : "Pošlji povpraševanje"}
        </Button>
      </form>
    </Form>
  );
}