import { CardProps } from "./types";

export const defaultData: CardProps[] = [
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
  {
    from: "2024-01-20T15:00Z",
    to: "2024-01-20T15:30Z",
    intensity: {
      forecast: 168,
      actual: 165,
      index: "moderate",
    },
  },
  {
    from: "2024-01-20T15:30Z",
    to: "2024-01-20T16:00Z",
    intensity: {
      forecast: 232,
      actual: 228,
      index: "high",
    },
  },
  {
    from: "2024-01-20T16:00Z",
    to: "2024-01-20T16:30Z",
    intensity: {
      forecast: 285,
      actual: 280,
      index: "very-high",
    },
  },
  {
    from: "2024-01-20T16:30Z",
    to: "2024-01-20T17:00Z",
    intensity: {
      forecast: 265,
      actual: 262,
      index: "high",
    },
  },
  {
    from: "2024-01-20T17:00Z",
    to: "2024-01-20T17:30Z",
    intensity: {
      forecast: 178,
      actual: 175,
      index: "moderate",
    },
  },
  {
    from: "2024-01-20T17:30Z",
    to: "2024-01-20T18:00Z",
    intensity: {
      forecast: 95,
      actual: 92,
      index: "low",
    },
  },
];
