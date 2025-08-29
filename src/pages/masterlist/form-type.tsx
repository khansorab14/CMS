import { BreadcrumbNav } from "@/components/common/breadcrumb-nav";
import { userColumns } from "@/components/common/data-table/column/user-column";
import { DataTable } from "@/components/common/data-table/data-table";
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
import { useLocation, useNavigate } from "react-router-dom";
import fieldData from "../masterlist/field-data.json";
import { TitleWarning } from "@/components/common/tittle-warning";
import { Separator } from "@/components/ui/separator";
import { fieldColumns } from "@/components/common/data-table/column/fields-column";
import FieldForm from "@/components/auth/masterlist/fields/field-form";
import { Button } from "@/components/ui/button";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function FormType() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const lastSegments = segments.slice(-2);

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    ...lastSegments.map((seg, idx) => {
      const path =
        "/workspace/customization/" +
        segments
          .slice(segments.length - 2, segments.length - 2 + idx + 1)
          .join("/");
      return {
        label: seg.charAt(0).toUpperCase() + seg.slice(1),
        path,
        isCurrent: idx === lastSegments.length - 1,
      };
    }),
  ];

  return (
    <>
      <BreadcrumbNav items={breadcrumbItems} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 md:gap-6">
            <TitleWarning title={"Form Types"} />
            <Separator />
            <div className="px-4 lg:px-6">
              <DataTable
                data={fieldData}
                columns={fieldColumns}
                addButtonType="drawer"
                addButtonLabel="+ New Form Type"
                addButtonPath="newFormType"
                open={open}
                setOpen={setOpen}
              />
              <Drawer direction="right" open={open} onOpenChange={setOpen}>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Add Case Status</DrawerTitle>
                  </DrawerHeader>

                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="caseName">Name</Label>
                      <Input
                        id="caseName"
                        placeholder="Enter case status name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="caseDescription">Description</Label>
                      <Input
                        id="caseDescription"
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
                      <Button type="button">
                        <IconCircleDashedCheck className="mr-1" />
                        Save
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
