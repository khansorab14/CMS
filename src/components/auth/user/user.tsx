import { DataTable } from "@/components/common/data-table/data-table";

import { Drawer } from "@/components/ui/drawer";
import { CustomDrawerContent } from "@/components/ui/custom-drawer-content";
import { useState } from "react";
import { userColumns } from "../../common/data-table/column/user-column";
import users from "../../auth/user/user.json";

export default function User() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4  md:gap-6 ">
          <div className="px-4 lg:px-6">
            <DataTable
              data={users}
              columns={userColumns}
              addButtonType="page"
              addButtonLabel="+ Add User"
              addButtonPath="addUser"
            />
            {/* <Drawer direction="right" open={open} onOpenChange={setOpen}>
              <CustomDrawerContent title="Add Product" />
            </Drawer> */}
          </div>
        </div>
      </div>
    </div>
  );
}
