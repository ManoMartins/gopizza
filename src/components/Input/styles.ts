import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

export type TypeProps = 'primary' | 'secondary'

type Props = {
  type: TypeProps
}

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor: type === 'primary' ? theme.colors.secondary_900 : theme.colors.primary_50
}))<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;

  ${({ theme, type }) => css`
    font-family: ${theme.fonts.text};
    border: 1px solid ${theme.colors.shape};
    color: ${type === 'primary' ? theme.colors.secondary_900 : theme.colors.primary_50};
  `};
`