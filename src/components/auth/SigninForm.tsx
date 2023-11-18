"use client"

import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";

function SigninForm() {
  return (
    <Flex direction="column" gap="2">
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

      <Button>Sign In</Button>
    </Flex>
  )
}

export default SigninForm;