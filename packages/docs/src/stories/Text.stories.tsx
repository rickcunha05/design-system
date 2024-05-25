import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@lhc-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius ipsam, quasi, accusamus, aspernatur suscipit numquam recusandae totam provident fugit aliquid quisquam ducimus! Autem ut doloribus dolor quia, qui numquam.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
