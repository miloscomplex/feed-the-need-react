
function Login() {

  function handleOnSubmit(event) {
    event.preventDefault()
  }

  return (
    <login>
      <h1>Login for Donator & Needy</h1>
      <form name='chatBoxForm'>
        <label for='name'>Name:</label>
        <input type='text' />
        <label for='password'>Password:</label>
        <input type='text' />
        <input type='submit' value='submit'/>
      </form>
    </login>

  )
}

export default Login;
