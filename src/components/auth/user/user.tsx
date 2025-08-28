import { DataTable2 } from "@/components/common/data-table/data-table2";
import users from "../../common/data-table/user.json";

import { userColumns } from "@/components/common/data-table/user-column";
import { Drawer } from "@/components/ui/drawer";
import { CustomDrawerContent } from "@/components/ui/custom-drawer-content";
import { useState } from "react";

export default function User() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {/* <DataTable1 data={data} /> */}
          <div className="px-4 lg:px-6">
            <DataTable2
              data={users}
              columns={userColumns}
              addButtonType="page"
              addButtonLabel="+ Add User"
              addButtonPath="addUser"
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
