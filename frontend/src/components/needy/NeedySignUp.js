import { Link } from 'react-router-dom'
import SignUp from '../SignUp'

function NeedySignUp() {

  const user = 'needy'
  
  return (
    <SignUp user_type={user} />
  )
}

export default NeedySignUp;
