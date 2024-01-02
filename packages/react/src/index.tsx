import { colors } from '@lhc-ui/tokens';
import { styled } from './styles';

const Button = styled('button',{
  fontFamily: '$default',
  backgroundColor: '$gray500',
  borderRadius: '$md',
  padding:'$4',
})

export function APP() {
  return(
    <Button>Hello Bussola</Button>
  )
}