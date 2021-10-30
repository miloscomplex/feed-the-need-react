function SignUp() {
  return (
    <div id='content'>
      <h1>Sign Up Below</h1>
      <form name='signUpForm'>
        <label for='name'>Name:</label>
        <input type='text' name='name' />

        <label for='email'>Email:</label>
        <input type='text' name='email' />

        <label for='about'>About:</label>
        <textarea name='about' />

        <label for='password'>Password:</label>
        <input type='text' name='password' />

        <label for='passwor-confirm'>Password Confirmation</label>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default SignUp;
