import { DateTime, Interval } from "luxon";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const assertUnreachable = (x: never): never => {
  throw new Error("Didn't expect to get here");
};

export const formatDateRange = (
  startDate: string,
  endDate?: string,
): string => {
  const start = DateTime.fromISO(startDate);
  const end = endDate ? DateTime.fromISO(endDate) : DateTime.local();

  // Format start and end dates
  const formattedStart = start.toFormat("MMM yyyy");
  const formattedEnd = endDate ? end.toFormat("MMM yyyy") : "Present";

  // Calculate interval between the two dates
  const interval = Interval.fromDateTimes(start, end);
  if (!interval.isValid) {
    return `${formattedStart} - ${formattedEnd}`;
  }

  // Get the period in years and months
  const { years = 0, months = 0 } = interval
    .toDuration(["years", "months"])
    .toObject();

  const yearWord = "y";
  const monthWord = "m";

  const formattedYears = years > 0 ? `${Math.ceil(years)}${yearWord}` : "";
  const formattedMonths = months ? ` ${Math.ceil(months)}${monthWord}` : "";

  return `${formattedStart} - ${formattedEnd} · ${formattedYears}${formattedMonths}`;
};

export const isDefined = <T>(value: T): value is NonNullable<T> => {
  return value !== undefined && value !== null;
};
