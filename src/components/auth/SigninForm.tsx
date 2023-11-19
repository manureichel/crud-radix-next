"use client"

import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField, Text } from "@radix-ui/themes";
import { useForm, Controller } from 'react-hook-form'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

function SigninForm() {

  const router = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm({
    values: {
      email: "",
      password: "",
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', { redirect: false, email: data.email, password: data.password })

    if (!res?.ok) {
      console.log(res)
    }

    router.push("/dashboard")
  })

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="email"
            control={control}
            rules={
              {
                required: {
                  message: "Email requerido",
                  value: true,
                }
              }
            }
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="correo@dominio.com"
                  autoFocus
                  {...field}
                />
              )
            }}
          />
        </TextField.Root>
        {errors.email && <Text color="red" className="text-xs">{errors.email.message}</Text>}

        <label htmlFor="password">Contraseña</label>

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
                  message: "Password requerido",
                  value: true,
                },
                minLength: {
                  message: "Debe tener al menos 8 caracteres",
                  value: 8,
                }
              }
            }
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="*******"
                  {...field}
                />
              )
            }}
          />
        </TextField.Root>

        {errors.password && <Text color="red" className="text-xs">{errors.password.message}</Text>}

        <Button type="submit" mt="4">Iniciar Sesión</Button>
      </Flex>
    </form>
  )
}

export default SigninForm;