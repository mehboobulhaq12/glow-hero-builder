import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UserRound, BarChart2, AlertCircle, Target } from "lucide-react";

export const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    brandName: "",
    websiteLink: "",
    sellingPlatform: "",
    revenueRange: "",
    runsAds: "",
    sellingDuration: "",
    mainProblem: "",
    problemDescription: "",
    desiredOutcome: "",
    asinLink: "",
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      setCurrentStep(5); // Thank you screen
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card/60 backdrop-blur-md border border-primary shadow-lg">
              <CardHeader className="text-left">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <UserRound className="w-6 h-6 text-primary" />
                  Seller Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="name" className="text-left">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="email" className="text-left">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="brandName" className="text-left">Brand Name</Label>
                  <Input
                    id="brandName"
                    value={formData.brandName}
                    onChange={(e) => updateFormData("brandName", e.target.value)}
                    placeholder="Enter your brand name"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="websiteLink" className="text-left">Website Link</Label>
                  <Input
                    id="websiteLink"
                    value={formData.websiteLink}
                    onChange={(e) => updateFormData("websiteLink", e.target.value)}
                    placeholder="Have one? (optional)"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="sellingPlatform" className="text-left">Where do you sell?</Label>
                  <Select value={formData.sellingPlatform} onValueChange={(value) => updateFormData("sellingPlatform", value)}>
                    <SelectTrigger id="sellingPlatform">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amazon">Amazon</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end pt-4">
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Next →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card/60 backdrop-blur-md border border-primary shadow-lg">
              <CardHeader className="text-left">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BarChart2 className="w-6 h-6 text-primary" />
                  Current Amazon Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3 text-left">
                  <Label className="text-left">What is your current average monthly revenue range?</Label>
                  <RadioGroup value={formData.revenueRange} onValueChange={(value) => updateFormData("revenueRange", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="below-10k" id="below-10k" />
                      <Label htmlFor="below-10k" className="font-normal cursor-pointer">Below $10k</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10k-30k" id="10k-30k" />
                      <Label htmlFor="10k-30k" className="font-normal cursor-pointer">$10k – $30k</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30k-80k" id="30k-80k" />
                      <Label htmlFor="30k-80k" className="font-normal cursor-pointer">$30k – $80k</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="80k-plus" id="80k-plus" />
                      <Label htmlFor="80k-plus" className="font-normal cursor-pointer">$80k+</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3 text-left">
                  <Label className="text-left">Do you currently run ads?</Label>
                  <RadioGroup value={formData.runsAds} onValueChange={(value) => updateFormData("runsAds", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="ads-yes" />
                      <Label htmlFor="ads-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="ads-no" />
                      <Label htmlFor="ads-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3 text-left">
                  <Label className="text-left">How long have you been selling on Amazon?</Label>
                  <RadioGroup value={formData.sellingDuration} onValueChange={(value) => updateFormData("sellingDuration", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="less-6mo" id="less-6mo" />
                      <Label htmlFor="less-6mo" className="font-normal cursor-pointer">Less than 6 months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6-12mo" id="6-12mo" />
                      <Label htmlFor="6-12mo" className="font-normal cursor-pointer">6–12 months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-3yr" id="1-3yr" />
                      <Label htmlFor="1-3yr" className="font-normal cursor-pointer">1–3 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3plus" id="3plus" />
                      <Label htmlFor="3plus" className="font-normal cursor-pointer">3+ years</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-between pt-4">
                  <Button onClick={handleBack} variant="outline">
                    ← Back
                  </Button>
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Next →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card/60 backdrop-blur-md border border-primary shadow-lg">
              <CardHeader className="text-left">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  What's Your Biggest Bottleneck?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="mainProblem" className="text-left">What's the #1 problem hurting your growth?</Label>
                  <Select value={formData.mainProblem} onValueChange={(value) => updateFormData("mainProblem", value)}>
                    <SelectTrigger id="mainProblem">
                      <SelectValue placeholder="Select your main problem" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traffic">Traffic</SelectItem>
                      <SelectItem value="conversion">Conversion</SelectItem>
                      <SelectItem value="reviews">Reviews</SelectItem>
                      <SelectItem value="acos">ACOS / Wasted Ad Spend</SelectItem>
                      <SelectItem value="listing">Listing not performing</SelectItem>
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="problemDescription" className="text-left">Short note: Describe this issue in 1–2 lines</Label>
                  <Textarea
                    id="problemDescription"
                    value={formData.problemDescription}
                    onChange={(e) => updateFormData("problemDescription", e.target.value)}
                    placeholder="Briefly describe your issue..."
                    rows={3}
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button onClick={handleBack} variant="outline">
                    ← Back
                  </Button>
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Next →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card/60 backdrop-blur-md border border-primary shadow-lg">
              <CardHeader className="text-left">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Target className="w-6 h-6 text-primary" />
                  What Result Do You Want Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-left">
                  <Label className="text-left">What is the outcome that matters most to you right now?</Label>
                  <RadioGroup value={formData.desiredOutcome} onValueChange={(value) => updateFormData("desiredOutcome", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sales-velocity" id="sales-velocity" />
                      <Label htmlFor="sales-velocity" className="font-normal cursor-pointer">More sales velocity</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lower-acos" id="lower-acos" />
                      <Label htmlFor="lower-acos" className="font-normal cursor-pointer">Lower ACOS</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="profit-margin" id="profit-margin" />
                      <Label htmlFor="profit-margin" className="font-normal cursor-pointer">Higher profit margin</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="listing-conversion" id="listing-conversion" />
                      <Label htmlFor="listing-conversion" className="font-normal cursor-pointer">Better listing conversion</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="scaling" id="scaling" />
                      <Label htmlFor="scaling" className="font-normal cursor-pointer">Scaling stable — not spikes</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="asinLink" className="text-left">Optional ASIN or Amazon product link</Label>
                  <Input
                    id="asinLink"
                    value={formData.asinLink}
                    onChange={(e) => updateFormData("asinLink", e.target.value)}
                    placeholder="Enter ASIN or product link (optional)"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button onClick={handleBack} variant="outline">
                    ← Back
                  </Button>
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {currentStep === 5 && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-card/60 backdrop-blur-md border border-primary shadow-lg text-center">
              <CardContent className="pt-12 pb-12 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-medium text-foreground">
                    Thank you — your form is submitted.
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                    We'll review your information and send your initial diagnostic + next steps soon. No pitch — only clarity on what to fix first.
                  </p>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                  You can now book your call
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
