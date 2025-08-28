import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal, Plus, CircleX, CircleCheck } from "lucide-react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";

export function FilterDrawer() {
  const [step, setStep] = useState<"default" | "add">("default");

  const properties = [
    "Zone",
    "State",
    "City",
    "Branch",
    "Created At",
    "Updated At",
    "Product Type",
    "Fraud Nature",
    "Department",
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[400px] sm:w-[500px] flex flex-col"
      >
        {step === "default" ? (
          <>
            <SheetHeader>
              <SheetTitle>All Filters</SheetTitle>
            </SheetHeader>
            <Separator />
            <div className="p-4 space-y-3 flex-1">
              <h3 className="font-semibold">Advance Filters (0)</h3>
              <p className="text-sm text-muted-foreground">
                This view has no filters added
              </p>
              <Button className="w-fit" onClick={() => setStep("add")}>
                <Plus className="mr-2 h-4 w-4" />
                Add Filters
              </Button>
            </div>
            <SheetFooter>
              <div className="flex justify-end gap-3 w-full">
                <Button variant="outline">
                  <CircleX className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button>
                  <CircleCheck className="mr-2 h-4 w-4" />
                  Create
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <>
            <SheetHeader>
              <SheetTitle>Table Properties</SheetTitle>
            </SheetHeader>
            <div className="p-4 flex-1">
              <Command>
                <CommandInput placeholder="Search properties..." />
                <CommandList>
                  <CommandEmpty>No properties found.</CommandEmpty>
                  {properties.map((prop) => (
                    <CommandItem key={prop}>{prop}</CommandItem>
                  ))}
                </CommandList>
              </Command>
            </div>
            <SheetFooter>
              <div className="flex justify-end gap-3">
                <Button variant="outline">
                  <IconCircleDashedX className="text-red-500" />
                  Cancel
                </Button>
                <Button type="submit">
                  <IconCircleDashedCheck />
                  Apply
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
