import { type StoryObj, type Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps, TextProps } from "@lhc-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextProps> = {
  args: {
    placeholder: "Type your name",
  },
};
export const WithPrefix: StoryObj<TextProps> = {
  args: {
    prefix: "cal.com/",
    placeholder: "your-username",
  },
};
export const Disabled: StoryObj<TextProps> = {
  args: {
    disabled: true,
  },
};
