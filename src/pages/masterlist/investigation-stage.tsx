import { BreadcrumbNav } from "@/components/common/breadcrumb-nav";
import { DataTable } from "@/components/common/data-table/data-table";
import { useState } from "react";
import { TitleWarning } from "@/components/common/tittle-warning";
import { Separator } from "@/components/ui/separator";
import { caseStatusColumns } from "@/components/common/data-table/column/case-status-column";
import caseStatusData from "../masterlist/case.json";

import { useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";

export function InvestigationStage() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
            <TitleWarning title={"Investigation Stage"} />
            <Separator />
            <div className="px-4 lg:px-6">
              <DataTable
                data={caseStatusData}
                columns={caseStatusColumns}
                addButtonType="drawer"
                addButtonLabel="+ New Investigation Stage"
                addButtonPath="addCases"
                open={open}
                setOpen={setOpen}
              />

              <Drawer direction="right" open={open} onOpenChange={setOpen}>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Add Investigation Stage</DrawerTitle>
                  </DrawerHeader>

                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="investigationName">Name</Label>
                      <Input
                        id="investigationName"
                        placeholder="Enter investigation status name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="investigationdescription">
                        Description
                      </Label>
                      <Input
                        id="investigationdescription"
                        placeholder="Enter investigation status description"
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
