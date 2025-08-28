import { DataTable2 } from "@/components/common/data-table/data-table2";
import department from "./department.json";
import { departmentColumn } from "@/components/common/data-table/department-column";
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
import { ComboboxDemo } from "@/components/ui/ComboboxDemo";
import { Button } from "@/components/ui/button";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export function DepartmentGroup() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {/* <DataTable1 data={data} /> */}
            <div className="px-4 lg:px-6">
              <DataTable2
                data={department}
                columns={departmentColumn}
                addButtonType="drawer"
                addButtonLabel="+ New Department Group"
                addButtonPath="department-group"
                open={open}
                setOpen={setOpen}
              />
              <Drawer direction="right" open={open} onOpenChange={setOpen}>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>New Department Group</DrawerTitle>
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
                        <Input
                          id="description"
                          placeholder="Enter Description..."
                        />
                      </div>

                      <div className="flex w-full  flex-col gap-1">
                        <Label htmlFor="departmentGroup">
                          Select Department Email{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <ComboboxDemo />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
