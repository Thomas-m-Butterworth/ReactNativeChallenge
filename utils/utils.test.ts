import { formatTime, formatIndexLabel, getIndexColor } from ".";
import { COLORS } from "./constants";

describe("utils", () => {
  describe("formatTime", () => {
    it("should correctly format an ISO date string to a HH:MM time format", () => {
      const timeString = "2024-01-20T14:30:00Z";
      const result = formatTime(timeString);
      expect(result).toBe("14:30");
    });
  });

  describe("formatIndexLabel", () => {
    it("should capitalise the first word and join the remaining words", () => {
      const veryLowIndex = "very-low";
      const veryLowResult = formatIndexLabel(veryLowIndex);
      expect(veryLowResult).toBe("Very low");

      const lowIndex = "low";
      const lowIndexResult = formatIndexLabel(lowIndex);
      expect(lowIndexResult).toBe("Low");

      const veryHighIndex = "very-high";
      const veryHighResult = formatIndexLabel(veryHighIndex);
      expect(veryHighResult).toBe("Very high");

      const moderateIndex = "moderate";
      const moderateResult = formatIndexLabel(moderateIndex);
      expect(moderateResult).toBe("Moderate");
    });

    it("should return just the capitalised first word for a sinle word", () => {
      const result = formatIndexLabel("high");
      expect(result).toBe("High");
    });
  });

  describe("getIndexColor", () => {
    it("should return the correct colour for each index", () => {
      expect(getIndexColor("very-low")).toBe(COLORS.veryLow);
      expect(getIndexColor("low")).toBe(COLORS.low);
      expect(getIndexColor("moderate")).toBe(COLORS.moderate);
      expect(getIndexColor("high")).toBe(COLORS.high);
      expect(getIndexColor("very-high")).toBe(COLORS.veryHigh);
    });

    it("should return the default colour if the index is unrecognised", () => {
      expect(getIndexColor("unknown")).toBe(COLORS.text);
    });
  });
});
