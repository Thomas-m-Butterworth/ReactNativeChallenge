import { COLORS } from "./constants";

export const formatTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const formatIndexLabel = (index: string): string => {
  const [firstWord, ...rest] = index.split("-");
  return [firstWord.charAt(0).toUpperCase() + firstWord.slice(1), ...rest].join(
    " "
  );
};

export const getIndexColor = (indexLabel: string): string => {
  const colorMap: Record<string, string> = {
    "very-low": COLORS.veryLow,
    low: COLORS.low,
    moderate: COLORS.moderate,
    high: COLORS.high,
    "very-high": COLORS.veryHigh,
  };

  return colorMap[indexLabel] || COLORS.text;
};
