import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function SignIn() {
  return (
    <Container>
      <Input 
        type="secondary"
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize='none'
      />

      <Input 
        type="secondary"
        placeholder="Senha"
        secureTextEntry={true}
      />

      <Button 
        title="Entrar" 
        type="secondary"
        
      />
    </Container>
  )
}