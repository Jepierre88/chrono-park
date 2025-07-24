import { Label } from "../ui/label";

interface DataRowProps {
  label: string;
  value?: string;
}

export const DataRow = ({ label, value }: DataRowProps) => (
  <div className="flex flex-1 gap-2 justify-center">
    <Label className="font-semibold flex-1 flex justify-end">{label}:</Label>
    &nbsp;
    <span className="flex-1 text-start">{value ?? "Desconocido"}</span>
  </div>
);