import { FormEvent } from "react";
import { Button } from "./Button"
import { Input } from "./Input"

function Login() {
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return(
    <div className="login-container">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <Input name="email" title="Email"/>

          <Input name="firtName" title="Nome"/>
          
          <Input name="phone" title="Celular"/>
          
          <Input name="password" title="Senha"/>

          <Input name="password" title="Senha"/>

          <Input name="password" title="Senha"/>

          <Input name="password" title="Senha"/>

          <Button title="Entrar" />
          
        </form>
      </div>
  )
}

export { Login }