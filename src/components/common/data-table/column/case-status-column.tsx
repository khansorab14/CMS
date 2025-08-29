import { Badge } from "@/components/ui/badge";
import type { CaseStatus } from "../types/data-table-types";
import { CaseStatusDrawerTrigger } from "@/components/auth/masterlist/case-status-drawer";
import type { ColumnDef } from "@tanstack/react-table";
import { IconCircleCheckFilled, IconXboxXFilled } from "@tabler/icons-react";

export const caseStatusColumns: ColumnDef<CaseStatus>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const status = row.original;
      return <CaseStatusDrawerTrigger status={status} />;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.status === "Active" ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconXboxXFilled className="fill-red-500 dark:fill-red-400" />
        )}
        {row.original.status}
      </Badge>
    ),
  },
];
