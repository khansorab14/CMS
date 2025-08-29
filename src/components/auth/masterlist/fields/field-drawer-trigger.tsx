import type { MasterFields } from "@/components/common/data-table/types/data-table-types";
import { CustomDrawerContent } from "@/components/ui/custom-drawer-content";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldForm from "./field-form";
import { Button } from "@/components/ui/button";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";

export function FieldDrawerTrigger({ field }: { field: MasterFields }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="text-blue-600 hover:underline">
          {field.fieldName}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Field</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          {/* Pass field as prefill data */}
          <FieldForm initialData={field} />
        </div>
        <DrawerFooter>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setOpen(false)}>
              <IconCircleDashedX className="text-red-500" />
              Cancel
            </Button>
            <Button type="submit">
              <IconCircleDashedCheck />
              Submit
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
