import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";
import { useState } from "react";
import type { CaseStatus } from "@/components/common/data-table/types/data-table-types";

export function CaseStatusDrawerTrigger({ status }: { status: CaseStatus }) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState(status.name);
  const [description, setDescription] = useState(status.description);

  const handleSave = () => {
    console.log("Updated values:", { id: status.id, name, description });
    setOpen(false);
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="text-blue-600 hover:underline">{status.name}</button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Update Case Status</DrawerTitle>
        </DrawerHeader>

        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="caseName">Name</Label>
            <Input
              id="caseName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter case status name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="caseDescription">Description</Label>
            <Input
              id="caseDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter case status description"
            />
          </div>
        </div>

        <DrawerFooter>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setOpen(false)}>
              <IconCircleDashedX className="mr-1 text-red-500" />
              Close
            </Button>
            <Button type="button" onClick={handleSave}>
              <IconCircleDashedCheck className="mr-1" />
              Save
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
