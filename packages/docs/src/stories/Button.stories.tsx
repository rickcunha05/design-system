import type {StoryObj, Meta} from '@storybook/react'
import {Button, ButtonProps} from '@lhc-ui/react'

export default {
  title:'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args:{
    children:'Enviar',
    size: 'small'
    
  }
}
export const Big: StoryObj<ButtonProps> = {
  args:{
    children:'Enviar',
    size: 'big',
  }
}