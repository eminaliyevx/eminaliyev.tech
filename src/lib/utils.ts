import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const convertDates = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const end = endDate
    ? new Date(endDate).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Present";

  return `${start} - ${end}`;
};
