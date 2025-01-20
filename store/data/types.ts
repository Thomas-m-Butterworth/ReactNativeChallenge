export type IntensityIndexType =
  | "very-low"
  | "low"
  | "moderate"
  | "high"
  | "very-high";

export interface CardProps {
  from: string;
  to: string;
  intensity: {
    forecast: number;
    actual: number;
    index: IntensityIndexType;
  };
}

export interface DataStore {
  data: CardProps[];
}
