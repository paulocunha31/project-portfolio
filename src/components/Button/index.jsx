import { ButtonContato, ButtonTest } from './styles'
function Button({ children, contact }) {
  return (
    <>
      {contact ? (
        <ButtonContato>{children}</ButtonContato>
      ) : (
        <ButtonTest>{children}</ButtonTest>
      )}
    </>
  )
}

export default Button
