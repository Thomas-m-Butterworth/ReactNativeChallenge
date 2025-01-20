import { CardProps } from "../store/data/types";

export const mockData: CardProps[] = [
  {
    from: "2024-01-20T14:00Z",
    to: "2024-01-20T14:30Z",
    intensity: {
      forecast: 45,
      actual: 42,
      index: "very-low",
    },
  },
  {
    from: "2024-01-20T14:30Z",
    to: "2024-01-20T15:00Z",
    intensity: {
      forecast: 89,
      actual: 85,
      index: "low",
    },
  },
];
