import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDotsVertical } from "@tabler/icons-react";
import type { AwaitingAction } from "../../common/data-table/types/data-table-types";

export const awaitingActionColumns: ColumnDef<AwaitingAction>[] = [
  {
    accessorKey: "caseId",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="has-[>svg]:px-0"
      >
        Case ID <ArrowUpDown className="ml-2 h-4 w-4 px-0" />
      </Button>
    ),
  },
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "assignedUser",
    header: "Assigned User",
  },
  {
    accessorKey: "zone",
    header: "Zone",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "fraudNature",
    header: "Fraud Nature",
  },
  {
    accessorKey: "caseStatus",
    header: "Case Status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.caseStatus === "Open"
            ? "default"
            : row.original.caseStatus === "Closed"
            ? "secondary"
            : "outline"
        }
      >
        {row.original.caseStatus}
      </Badge>
    ),
  },
  {
    accessorKey: "internalStatus",
    header: "Internal Status",
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="has-[>svg]:px-0"
      >
        Created At <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {new Date(row.original.createdAt).toLocaleDateString()}
      </span>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {new Date(row.original.updatedAt).toLocaleDateString()}
      </span>
    ),
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
          >
            <IconDotsVertical />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>View</DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Assign</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
