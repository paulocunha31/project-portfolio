import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { H2 } from '../Title/styles'
import { Container, ContainerTitle } from './styles'

const schema = yup
  .object()
  .shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório')
  })
  .required()

function SectionForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit(userData) {
    try {
      const templateParams = {
        from_name: userData.name,
        message: userData.message,
        email: userData.email
      }

      emailjs
        .send(
          'service_zr4ljtq',
          'template_9fbwqbi',
          templateParams,
          'C2TGkQUp6Bf5ap2Tm'
        )
        .then((response) => {
          console.log('EMAIL ENVIADO', response.status, response.text)
        })
      navigate('/obrigado')
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      console.log('ERRO: ', error)
    }

    reset()
  }

  return (
    <Container id="fale-comigo">
      <ContainerTitle>
        <H2>
          FALE <span>COMIGO.</span>
        </H2>
      </ContainerTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            {...register('name', { required: true })}
            placeholder="Nome:"
          />
          <span>{errors.name?.message}</span>
        </label>

        <label>
          <input
            {...register('email', { required: true })}
            placeholder="Email:"
          />
          <span>{errors.email?.message}</span>
        </label>

        <label>
          <textarea {...register('message')} placeholder="Sua mensagem:" />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  )
}

export default SectionForm
