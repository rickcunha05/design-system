import { ComponentProps } from 'react';
import { colors } from '@lhc-ui/tokens';
import { styled } from './styles';

export const Button = styled('button',{
  fontFamily: '$default',
  backgroundColor: '$gray500',
  borderRadius: '$md',
  padding:'$2 $4',
  border: 'bold',
  color: '$white',

  variants:{
    size:{
      small:{
        fontSize:14,
        padding: '$2 $4',
      },
      big:{
        fontSize:16,
        padding: '$3 $6',
      },
    }
  },
  defaultVariants:{
    size:'small'
  }
})


export type ButtonProps = ComponentProps<typeof Button>