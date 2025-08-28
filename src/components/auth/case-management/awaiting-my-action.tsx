import { DataTable2 } from "@/components/common/data-table/data-table2";

import users from "../../common/data-table/case/awaitin.json";

import { userColumns } from "@/components/common/data-table/user-column";
import { awaitingActionColumns } from "@/components/common/data-table/case/awaiting-my-action-column";

export default function AwaitingMyAction() {
  // const wdwd: any[] = [];
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <DataTable2
              data={users}
              columns={awaitingActionColumns}
              addButtonType="page"
              addButtonLabel="+ Add Cases"
              addButtonPath="addfmr"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
