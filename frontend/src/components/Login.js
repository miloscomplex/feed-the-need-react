
function Login() {

  function handleOnSubmit(event) {
    event.preventDefault()
  }

  return (
    <login>
      <form name='chatBoxForm'>
        Name:
        <input type='text' />
        Password:
        <input type='text' />
        <input type='submit' value='submit'/>
      </form>
    </login>

  )
}

export default Login;
