import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@lhc-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  //args definimos os valores default dos componentes
  args: {
    children: "Send",
    variant: "primary",
    disable: "disabled",
  },
  //argsTypes definimos os valores que os componentes tem
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
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
