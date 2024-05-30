import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@lhc-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
  },
  argTypes: {
    onclick: {
      action: "onClick",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Create New",
  },
};
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo passo
        <ArrowRight />
      </>
    ),
  },
};
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
