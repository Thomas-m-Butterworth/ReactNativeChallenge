import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { CardList } from "./CardList";
import { mockData } from "../../mocks/mockData";

const meta = {
  title: "CardList",
  component: CardList,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockData,
  },
};
