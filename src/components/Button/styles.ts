import styled, { css } from "styled-components/native"
import { RectButton } from "react-native-gesture-handler"

export type TypeProps = 'primary' | 'secondary'

type ContainerProps = {
  type: TypeProps
}

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.type === 'primary' ? props.theme.colors.success_900 : props.theme.colors.primary_800 };
`

export const Title = styled.Text`
  font-size: 14px;
  
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.text};
  `}
`

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.title, 
}))``