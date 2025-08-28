import { DataTable2 } from "@/components/common/data-table/data-table2";

import { roleColumn } from "@/components/common/data-table/role-column";
import { CustomDrawerContent } from "@/components/ui/custom-drawer-content";
import { Drawer } from "@/components/ui/drawer";
import { useState } from "react";

const data = [
  {
    id: "1",
    roleName: "Admin",
    roleDescription: "Full access to manage users, roles, and system settings.",
    status: "Active",
  },
  {
    id: "2",
    roleName: "Editor",
    roleDescription: "Can edit content but cannot manage users or roles.",
    status: "Active",
  },
  {
    id: "3",
    roleName: "Viewer",
    roleDescription: "Read-only access to content and dashboards.",
    status: "Inactive",
  },
  {
    id: "4",
    roleName: "Moderator",
    roleDescription: "Responsible for reviewing and moderating user content.",
    status: "Active",
  },
  {
    id: "5",
    roleName: "Guest",
    roleDescription: "Temporary access with very limited permissions.",
    status: "Inactive",
  },
];
export default function Role() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {/* <DataTable1 data={data} /> */}
          <div className="px-4 lg:px-6">
            <DataTable2
              data={data}
              columns={roleColumn}
              addButtonType="page"
              addButtonLabel="+ Add Role"
              addButtonPath="addRole"
            />
            <Drawer direction="right" open={open} onOpenChange={setOpen}>
              <CustomDrawerContent title="Add Product" />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
