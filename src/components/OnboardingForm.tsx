import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const notionFormUrl =
  "https://confusion-nail-a2e.notion.site/ebd//351692626b1e802ba26aea700365016b";

export const OnboardingForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="mt-6 px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-md transition-all hover:scale-105"
        >
          Get Free PPC Dashboard
        </Button>
      </DialogTrigger>

      <DialogContent className="border-primary/30 bg-background p-0 shadow-2xl sm:max-w-[860px]">
        <div className="overflow-hidden rounded-lg">
          <div className="bg-primary px-6 py-4 text-primary-foreground">
            <p className="text-sm font-medium uppercase tracking-[0.22em]">Free Download</p>
            <DialogHeader className="mt-2 space-y-2 text-left">
              <DialogTitle className="text-2xl font-medium">
                Grab your PPC dashboard
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/85">
                Complete the short form below to continue.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-4 p-4 sm:p-6">
            <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white">
              <iframe
                src={notionFormUrl}
                title="PPC dashboard Notion form"
                className="block h-[70vh] min-h-[620px] w-full"
                allowFullScreen
              />
            </div>

            <p className="text-center text-sm text-muted-foreground">
              If the form does not load here,{" "}
              <a
                href={notionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4"
              >
                open it in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
