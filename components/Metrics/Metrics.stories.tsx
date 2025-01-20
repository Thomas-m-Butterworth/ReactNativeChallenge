import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Metrics } from "./Metrics";
import { mockData } from "../../mocks/mockData";

const meta = {
  title: "Metrics",
  component: Metrics,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Metrics>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    card: mockData[0],
  },
};
