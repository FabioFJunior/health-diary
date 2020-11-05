import React, { Component } from 'react'
import axios from 'axios'
import { PaginaInteira, Texto, LadoEsquerdo, CamposRegistro, Campos, LadoDireito, AreaBotoes } from './styles'
import { Button, TextField } from '@material-ui/core'
import { Switch, Route, Link } from 'react-router-dom'

const registerUser = ({
  name,
  password,
  passwordConfirmation,
  email,
}) => {
  if (password !== passwordConfirmation) {
    alert('Senhas são diferentes')
    return
  }
  axios({
    method: 'get',
    url: 'http://localhost:3000/example',
  })
    .then((res) => {
      console.log(res)
    })
  console.log('registrando usuario', name)
}


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      password: '',
      passwordConfirmation: '',
      email: '',
    }
  }
  

  render() {
    return (
      <PaginaInteira>
        <Switch>
          <LadoEsquerdo>
            <Campos>
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                label='Nome Completo'
                type='text'
                onChange = {(event) => this.setState({name:event.target.value})}
              />

              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                label='Email'
                type='text'
                onChange = {(event) => this.setState({email:event.target.value})}
              />

              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                label='Senha'
                type='password'
                onChange = {(event) => this.setState({password:event.target.value})}
              />

              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                label='Confirmar senha'
                type='password'
                onChange = {(event) => this.setState({passwordConfirmation:event.target.value})}
              />

              <AreaBotoes>
                <Button
                  variant='contained'
                  fullWidth
                  size='large'
                  onClick = { () => registerUser(this.state) }
                >
                  Concluir
                </Button>
              </AreaBotoes>

              <AreaBotoes>
                <Button
                  variant='contained'
                  fullWidth
                  size='large'
                >
                  Voltar
                </Button>
              </AreaBotoes>
            </Campos>
          </LadoEsquerdo>
        </Switch>
        <LadoDireito>
        </LadoDireito>
      </PaginaInteira>
    );
  }
}

export default SignUp;