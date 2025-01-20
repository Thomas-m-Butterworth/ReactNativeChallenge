import React from "react";
import { render } from "@testing-library/react-native";
import { CardList } from "../../components/CardList";
import { mockData } from "../../mocks/mockData";

describe("CardList", () => {
  it("should render a FlatList with the correct number of items", () => {
    const { getAllByTestId, getByTestId } = render(
      <CardList data={mockData} />
    );
    const cardList = getByTestId("CardList");
    expect(cardList).toBeTruthy();

    const cards = getAllByTestId("CardContainer");
    expect(cards.length).toBe(mockData.length);
  });

  it("should match the snapshot", () => {
    const { toJSON } = render(<CardList data={mockData} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
