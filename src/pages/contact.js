import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Layout from "../components/LayoutComponents/Layout"
import Seo from "../components/SEO/Seo"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 40px auto 0 auto;
`

const InputText = styled.input`
  margin-bottom: 10px;
  height: 30px;
  padding: 10px;
`

const InputSubmit = styled.input`
  border: 2px solid #fff;
  background: none;
  height: 30px;
  max-width: 100px;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
`

const ErrorText = styled.p`
  color: #f00;
  margin: 0 0 10px 0;
`

const SubmisionMessageElement = styled.p`
  max-width: 300px;
  margin: 0 auto;
`

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email(),
  })
  .required()

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [submissionMessage, setSubmissionMessage] = useState()

  const onSubmit = data => {
    setSubmissionMessage("Wysyłanie...")
    axios
      .post("https://formsubmit.co/ajax/6ba904975a078c194f03f77e52a3be31", {
        _subject: "Hello!",
        firstName: data.firstName,
        email: data.email,
      })
      .then(() => {
        setSubmissionMessage("Formularz wysłany")
      })
      .catch(() => {
        setSubmissionMessage("Formularz nie mógł byc wwysłany")
      })
  }

  return (
    <Layout>
      <Seo title={"Kontakt"} description={"Kontakt :)"} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText placeholder={"Imię"} {...register("firstName")} />
        {errors.firstName && <ErrorText>{errors.firstName.message}</ErrorText>}
        <InputText placeholder={"Email"} {...register("email")} />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        <InputSubmit type="submit" />
      </Form>
      {submissionMessage && (
        <SubmisionMessageElement>{submissionMessage}</SubmisionMessageElement>
      )}
    </Layout>
  )
}

export default Contact
