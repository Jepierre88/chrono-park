/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { IncomesTable } from "./data-table.component";

export default function IncomesCardContent({incomes}:any) {

    const handleEdit = (item:any) => {
        console.log("Edit income with id:", item.id);
        // Implement edit logic here
    };
    const handleView = (item:any) => {
        console.log("View income with id:", item.id);
        // Implement view logic here
    };

  return (
    <>
      <IncomesTable data={incomes} onEdit={handleEdit} onView={handleView} />
    </>
  );
}
