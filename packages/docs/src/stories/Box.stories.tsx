import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@lhc-ui/react";

export default {
  title: "Surface/Box",
  component: Box,
  args: {
    children: (
      <>
        <span> Testando o elemento em tela </span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
