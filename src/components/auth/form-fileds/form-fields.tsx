import { DataTable2 } from "@/components/common/data-table/data-table2";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";

import { Separator } from "@/components/ui/separator";

import { formFieldColumn } from "@/components/common/data-table/form-field-column";
import formData from "@/components/common/data-table/form.json";
import { ComboboxDemo } from "@/components/ui/ComboboxDemo";

export function FormAndFieds() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <DataTable2
                data={formData}
                columns={formFieldColumn}
                addButtonType="drawer"
                addButtonLabel="+ New Form"
                addButtonPath="form-fields"
                open={open}
                setOpen={setOpen}
              />
            </div>
          </div>
        </div>
      </div>
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>New Form</DrawerTitle>
          </DrawerHeader>
          <Separator />
          <div className="p-4">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input id="firstName" placeholder="Enter First Name" />
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="description">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Input id="description" placeholder="Enter Description..." />
              </div>

              <div className="flex w-full  flex-col gap-1">
                <Label htmlFor="departmentGroup">
                  Form Type
                  <span className="text-red-500">*</span>
                </Label>
                <ComboboxDemo />
              </div>
            </form>
          </div>
          <DrawerFooter>
            <div className="flex justify-end gap-3">
              <Button variant="outline">
                <IconCircleDashedX className="text-red-500"  />
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
    </>
  );
}
