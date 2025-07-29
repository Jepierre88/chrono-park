"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Printer } from "lucide-react"
import IIncome from "@/lib/types/entities/parking-payment/incomes/income.entity"


interface DataTableProps {
  data: IIncome[]
  onEdit: (item: IIncome) => void
  onView: (item: IIncome) => void
}

export function IncomesTable({ data, onEdit, onView }: DataTableProps) {


    // Definición básica de columnas - puedes customizar según tus necesidades
const columns: ColumnDef<IIncome>[] = [
  {
    accessorKey: "id",
    header: "Id",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "identificationId",
    header: "Identification Id",
  },
  {
    accessorKey: "identificationMethod",
    header: "Identification Method",
  },
  {
    accessorKey: "incomePointId",
    header: "Income Point Id",
  },
  {
    accessorKey: "peopleAmount",
    header: "People Amount",
  },
  {
    accessorKey: "plate",
    header: "Plate",
  },
  {
    accessorKey: "plateImage",
    header: "Plate Image",
  },
  {
    accessorKey: "processId",
    header: "Process Id",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "vehicle",
    header: "Vehicle",
  },
  {
    accessorKey: "vehicleKind",
    header: "Vehicle Kind",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({row}) => {
      const item = row.original;
      return (
        <div className="flex gap-2">
          <Button variant={"ghost"} className="text-primary" onClick={() => onView(item)}><Eye/></Button>
          <Button variant={"ghost"} className="text-orange-500" onClick={() => onEdit(item)}><Edit/></Button>
          <Button variant={"ghost"} className="text-red-500" onClick={() => console.log(item)}><Printer/></Button>
        </div>
      )
    }
  }
]

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
      <div className="rounded-md border w-full">
        <Table className="w-full overflow-x-auto min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
  )
}
