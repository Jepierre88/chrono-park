import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
  
export const formatDate = (date: Date | string) => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  return parsedDate.toLocaleString("es-CO")
};
