import { render } from "@testing-library/react-native";

import * as stories from "./Card.stories";
import { formatIndexLabel, formatTime } from "../../utils";
import { Card } from "./Card";
import { mockData } from "../../mocks/mockData";
import { COLORS } from "../../utils/constants";

describe("Card", () => {
  it("should display correct time range", () => {
    const card = mockData[0];
    const { getByTestId } = render(<Card card={card} />);

    const timeRange = getByTestId("TimeRangeContainer");
    const expectedString = `${formatTime(card.from)} - ${formatTime(card.to)}`;
    expect(timeRange).toHaveTextContent(expectedString);
  });

  it("should display the correct forecast, actual, and index values", () => {
    const card = mockData[0];
    const { getByTestId } = render(<Card card={card} />);

    const forecastText = getByTestId("ForecastText");
    expect(forecastText).toHaveTextContent(card.intensity.forecast.toString());

    const actualText = getByTestId("ActualText");
    expect(actualText).toHaveTextContent(card.intensity.actual.toString());

    const indexText = getByTestId("IndexText");
    expect(indexText).toHaveTextContent(formatIndexLabel(card.intensity.index));
  });

  it("should display expected icons", () => {
    const card = mockData[0];
    const { getByTestId } = render(<Card card={card} />);

    const forecastIcon = getByTestId("ForecastIcon");
    const actualIcon = getByTestId("ActualIcon");
    const indexIcon = getByTestId("IndexIcon");

    expect(forecastIcon).toBeTruthy();
    expect(actualIcon).toBeTruthy();
    expect(indexIcon).toBeTruthy();
  });

  it("should apply the correct color to the index icon", () => {
    const card = mockData[0];
    const { getByTestId } = render(<Card card={card} />);

    const indexIcon = getByTestId("IndexIcon");
    expect(indexIcon.props.color).toBe(COLORS.veryLow);
  });

  it("should display the index label with proper formatting", () => {
    const card = mockData[1];
    const { getByTestId } = render(<Card card={card} />);

    const indexLabel = getByTestId("IndexText");
    expect(indexLabel).toHaveTextContent("Low");
  });

  it("renders correctly", () => {
    const card = mockData[0];
    const { toJSON } = render(<Card card={card} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
