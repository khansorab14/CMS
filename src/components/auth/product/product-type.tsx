import { DataTable } from "@/components/common/data-table/data-table";

import productType from "@/components/auth/product/product-type.json";

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
// import { useNavigate } from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import { ProductTypeColumn } from "../../common/data-table/column/product-type-column";
import { TitleWarning } from "@/components/common/tittle-warning";

export function ProductType() {
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="@container/main flex flex-1 flex-col gap-2">
          <TitleWarning title={"Product Type"} warning={"Wasrning "} />
          <div className="px-4 lg:px-6">
            <DataTable
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
