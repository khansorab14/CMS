import { DataTable2 } from "@/components/common/data-table/data-table2";

import productType from "@/components/common/data-table/product-type.json";
import { ProductTypeColumn } from "@/components/common/data-table/product-type-column";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { CustomDrawerContent } from "@/components/ui/custom-drawer-content";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { ComboboxDemo } from "@/components/ui/ComboboxDemo";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function ProductType() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <DataTable2
                data={productType}
                columns={ProductTypeColumn}
                addButtonType="drawer"
                addButtonLabel="+ New Product Type"
                addButtonPath="product-types"
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
            <DrawerTitle>New Product Type</DrawerTitle>
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
            </form>
          </div>
          <DrawerFooter>
            <div className="flex justify-end gap-3">
              <Button variant="outline">
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
    </>
  );
}
