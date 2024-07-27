"use client";

import { useToast } from "@/components/ui/use-toast";

export function useToastWithTitle() {
  const { toast } = useToast();

  return (title: string) => {
    toast({ title });
  };
}
