import React, { useState } from 'react'
import useAuth from '../hooks/useAuth';
import Input from "../components/Input"
import Button from '../components/Button';

const SignUp = ({ setPage }) => {
  const { signUp } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(form.name , form.email , form.password)

    setPage("login");
  }




  return (
    <div className=' max-w-md mx-auto mt-20 p-6 shadow-xl rounded-2xl '>
      <h2 className=' text-2xl font-bold mb-6 text-center '>Sign up </h2>

      <form onSubmit={handleSubmit}>
        <Input type="text" palceholder="Nmae" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input type="email" palceholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Input type="password" palceholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <Button type="submit">Signup</Button>
      </form>
    
    </div>
  )
}

export default SignUp
