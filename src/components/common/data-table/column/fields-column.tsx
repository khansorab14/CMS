import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import type { MasterFields } from "../types/data-table-types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  IconCircleCheckFilled,
  IconCircleDashedCheck,
  IconCircleDashedX,
  IconDotsVertical,
  IconXboxXFilled,
} from "@tabler/icons-react";
import { Checkbox } from "@/components/ui/checkbox";

import { useNavigate } from "react-router-dom";
import FieldForm from "@/components/auth/masterlist/fields/field-form";
import UpdateFieldForm from "@/components/auth/masterlist/fields/update-field-form";
import { Badge } from "@/components/ui/badge";

export const fieldColumns: ColumnDef<MasterFields>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(val) => table.toggleAllPageRowsSelected(!!val)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(val) => row.toggleSelected(!!val)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  // 🔹 Actions dropdown
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
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },

  {
    accessorKey: "fieldName",
    header: "Field Name",
    cell: ({ row }) => {
      const field = row.original;
      return <FieldDrawerTrigger field={field} />;
    },
  },

  {
    accessorKey: "fieldType",
    header: "Field Type",
    cell: ({ getValue }) => {
      const v = String(getValue());
      return v.charAt(0).toUpperCase() + v.slice(1);
    },
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

// ✅ Drawer for editing
export function FieldDrawerTrigger({ field }: { field: MasterFields }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <button
        className="text-blue-600 hover:underline"
        onClick={() => setOpen(true)}
      >
        {field.fieldName}
      </button>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Field</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <UpdateFieldForm field={field} />
        </div>
        <DrawerFooter>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setOpen(false)}>
              <IconCircleDashedX className="text-red-100" />
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
  );
}
