import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Time } from "./Time";
import { mockData } from "../../mocks/mockData";

const meta = {
  title: "Time",
  component: Time,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Time>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    card: mockData[0],
  },
};
