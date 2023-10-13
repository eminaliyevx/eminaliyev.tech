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
    : "present";

  return `${start} - ${end}`;
};

export const calculateResizedWidth = (
  originalWidth: number,
  originalHeight: number,
  resizedHeight: number,
) => {
  return Math.round((originalWidth * resizedHeight) / originalHeight);
};

export const calculateResizedHeight = (
  originalWidth: number,
  originalHeight: number,
  resizedWidth: number,
) => {
  return Math.round((originalHeight * resizedWidth) / originalWidth);
};
