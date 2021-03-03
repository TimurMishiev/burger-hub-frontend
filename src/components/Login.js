import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }

  return (
    
      <div className='login-container'>
         <nav className= 'login'>
          <form onSubmit={handleSubmit}>
        
            <h2>LOGIN</h2>
            <p>Enter you Username and Password</p>
            
              <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
              <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
              
        
          <button className ='github'>Enter</button>
        
        </form>
        </nav>
      </div>
      
    // </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

// review this part again video 3, 53 minute.
export default connect(mapStateToProps, { updateLoginForm, login })(Login)