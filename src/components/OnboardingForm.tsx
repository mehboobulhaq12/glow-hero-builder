import * as React from "react";
import { z } from "zod";
import { Download, Mail, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const downloadUrl =
  "https://docs.google.com/spreadsheets/d/1Bh0UtM5LpngYhoSqWLLTtwtuRxwu7uzQ9mtndkKYaMI/export?format=xlsx&gid=2010794890";
const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1Bh0UtM5LpngYhoSqWLLTtwtuRxwu7uzQ9mtndkKYaMI/edit?gid=2010794890#gid=2010794890";

const stepSchemas = {
  1: z.object({
    name: z.string().trim().min(2, "Please enter your name").max(100),
  }),
  2: z.object({
    email: z.string().trim().email("Please enter a valid email address").max(255),
  }),
} as const;

export const OnboardingForm = () => {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  const resetForm = React.useCallback(() => {
    setStep(1);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
    });
  }, []);

  const validateStep = (currentStep: 1 | 2) => {
    try {
      stepSchemas[currentStep].parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Missing information",
          description: error.errors[0].message,
        });
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(2)) {
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("lead_magnet_submissions").insert({
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      source: "ppc-dashboard-landing",
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Lead magnet submission failed:", error);
      setStep(3);
      return;
    }

    setStep(3);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) {
          resetForm();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="mt-6 px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-md transition-all hover:scale-105"
        >
          Get Free PPC Dashboard
        </Button>
      </DialogTrigger>

      <DialogContent className="border-primary/30 bg-background p-0 shadow-2xl sm:max-w-[560px]">
        <div className="overflow-hidden rounded-lg">
          <div className="bg-primary px-6 py-4 text-primary-foreground">
            <p className="text-sm font-medium uppercase tracking-[0.22em]">Free Download</p>
            <DialogHeader className="mt-2 space-y-2 text-left">
              <DialogTitle className="text-2xl font-medium">
                Grab your PPC dashboard
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/85">
                Enter your details, save the lead in Supabase, and unlock the dashboard instantly.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-6 px-6 py-6">
            {step !== 3 && (
              <div className="flex items-center gap-2">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      item === step ? "w-10 bg-primary" : item < step ? "w-3 bg-primary/60" : "w-3 bg-muted"
                    }`}
                  />
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="lead-name">Your name</Label>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="lead-name"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, name: event.target.value }))
                      }
                      className="h-12 border-primary/25 pl-10"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => {
                      if (validateStep(1)) {
                        setStep(2);
                      }
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="lead-email">Email address</Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="lead-email"
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, email: event.target.value }))
                      }
                      className="h-12 border-primary/25 pl-10"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Unlock Dashboard"}
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5 text-left">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium text-foreground">
                    Your dashboard is ready
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks, {formData.name.trim() || "there"}. Your download is unlocked below.
                  </p>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-secondary/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    Use the download button for the spreadsheet file, or open the Google Sheet directly if you want to view it online first.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="sm:flex-1" asChild>
                    <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" />
                      Download PPC Dashboard
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="sm:flex-1" asChild>
                    <a href={sheetUrl} target="_blank" rel="noopener noreferrer">
                      Open Google Sheet
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
