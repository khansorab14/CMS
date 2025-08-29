import { DataTable } from "@/components/common/data-table/data-table";

import users from "../../../components/auth/case-management/awaitin.json";

import { awaitingActionColumns } from "@/components/auth/case-management/awaiting-my-action-column";

export default function AwaitingMyAction() {
  // const wdwd: any[] = [];
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <DataTable
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
