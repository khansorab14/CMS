import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useNavigate } from "react-router-dom";

import { Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FilterDrawer } from "@/components/common/filter-drawer";
import { IconTable } from "@tabler/icons-react";

type DataTableProps<TData, TValue> = {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  onAdd?: () => void;
  addButtonLabel?: string;
  addButtonPath?: string;
  addButtonType?: "page" | "drawer" | "drawertest";
  open?: boolean;
  setOpen?: (value: boolean) => void;
};

export function DataTable<TData, TValue>({
  data,
  columns,
  onAdd,
  addButtonPath,
  addButtonLabel,
  addButtonType,
  setOpen,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 justify-between py-4">
        <FilterDrawer />

        <Command className="rounded-lg border shadow-md w-sm">
          <CommandInput
            placeholder="Search..."
            value={(table.getState().globalFilter as string) ?? ""}
            onValueChange={(value) => table.setGlobalFilter(value)}
          />
        </Command>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <IconTable />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>

        {(onAdd || addButtonPath) && (
          <Button
            className="py-4.5 px-5 font-light"
            size="sm"
            onClick={() => {
              if (addButtonType === "drawer") {
                setOpen?.(true);
                if (onAdd) onAdd();
              } else if (addButtonType === "page" && addButtonPath) {
                navigate(addButtonPath);
              } else if (addButtonType === "drawertest") {
                setOpen?.(true);
                if (onAdd) onAdd();
              }
            }}
          >
            {addButtonLabel ?? "+ Add"}
          </Button>
        )}
      </div>

      <div className="w-full">
        <div className="overflow-hidden rounded-md border">
          <div className="overflow-auto max-h-[600px]">
            <Table>
              <TableHeader className="h-12">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className="whitespace-nowrap px-4 py-2 text-sm font-medium  text-left"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-gray-50"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="px-4 py-2 text-sm text-gray-700 align-middle"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-64 text-center"
                    >
                      <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-2">
                        <Info className="h-8 w-8" />
                        <p>No data available</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
