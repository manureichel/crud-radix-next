"use client"

import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form"
import axios from "axios"

function SignupForm() {

  const { control, handleSubmit, formState: { errors } } = useForm({
    values: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post('/api/auth/register', data)
    console.log(res)
  }
  )

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Nombre:</label>
        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="name"
            control={control}
            rules={
              {
                required: {
                  message: "Se requiere un Nombre:",
                  value: true
                }
              }
            }
            render={({ field }) => {
              return (
                <TextField.Input
                  type="text"
                  placeholder="Ingrese su Nombre"
                  {...field}
                />
              )
            }}
          />
        </TextField.Root>
        {errors.name && <Text color="red" className="text-xs">{errors.name.message}</Text>}

        <label htmlFor="email">Email:</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            control={control}
            name="email"
            rules={
              {
                required: {
                  message: "Ingrese un Email",
                  value: true
                }
              }
            }
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="correo@dominio.com"
                  {...field}
                />
              )
            }}
          />
        </TextField.Root>
        {errors.email && <Text color="red" className="text-xs">{errors.email.message}</Text>}

        <label htmlFor="password">Contraseña:</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            rules={
              {
                required: {
                  message: "Ingrese una contraseña",
                  value: true
                },
                minLength: {
                  message: "La contraseña debe tener al menos 8 caracteres",
                  value: 8
                }
              }
            }
            render={
              ({ field }) => {
                return (
                  <TextField.Input
                    type="password"
                    placeholder="*******"
                    {...field}
                  />
                )
              }
            }
          />
        </TextField.Root>
        {errors.password && <Text color="red" className="text-xs">{errors.password.message}</Text>}
        <Button type="submit" mt="4">Crear Cuenta</Button>
      </Flex>
    </form>
  )
}

export default SignupForm;