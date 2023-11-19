"use client"

import { TextField, TextArea, Button, Container, Card, Flex, Heading } from "@radix-ui/themes"
import { useForm, Controller } from "react-hook-form"

const TaskNewPage = () => {

  const { control, handleSubmit } = useForm({
    values: {
      title: "",
      description: ""
    }
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
              <Heading>Crear nuevo proyecto</Heading>
              <label>Título de Proyecto:</label>
              <Controller
                control={control}
                name="title"
                render={({ field }) => {
                  return (
                    <TextField.Input {...field} size="3" placeholder="Ingrese un título" />
                  )
                }}
              />
              <label>Descripción</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => {
                  return (
                    <TextArea {...field} size="3" placeholder="Ingrese una descripción" />
                  )
                }}
              />
              <Button type="submit">Crear Proyecto</Button>
            </form>
          </Card>
        </Flex>
      </Container>
    </div>
  )
}

export default TaskNewPage
