"use client"

import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";

function SignupForm() {
  return (
    <Flex direction="column" gap="2">
      <label htmlFor="name">Name:</label>
      <TextField.Root>
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          type="text"
          placeholder="Ingrese su Nombre"
          autoFocus
        ></TextField.Input>
      </TextField.Root>

      <label htmlFor="email">Email</label>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          type="email"
          placeholder="correo@dominio.com"
          autoFocus
        ></TextField.Input>
      </TextField.Root>

      <label htmlFor="password">Password</label>

      <TextField.Root>
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          type="password"
          placeholder="*******"
          autoFocus
        ></TextField.Input>
      </TextField.Root>

      <Button>Sign Up</Button>
    </Flex>
  )
}

export default SignupForm;