import { Link } from 'react-router-dom'
import SignUp from '../SignUp'

function DonatorSignUp() {

  const user = 'donator'
  return (
      <SignUp user_type={user} />
  )
}

export default DonatorSignUp;
