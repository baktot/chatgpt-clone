import { SignIn } from '@clerk/clerk-react'
import './signInPage.css'

const SigninPage = () => {
  return (
    <div className='signinPage'>
      <SignIn path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl="/dashboard"/>
    </div>
  )
}

export default SigninPage