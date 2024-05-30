import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@lhc-ui/react";

export default {
  title: "Surface/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text> Testando o elemento em tela </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
