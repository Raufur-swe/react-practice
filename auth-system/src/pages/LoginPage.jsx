import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import Input from '../components/Input';
import Button from '../components/Button';

const Login = ({ setPage }) => {

  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = () => {
    e.prevetDefault();

    const succss = login(form.email, form.password);

    if (succss) {
      setPage("dashboard");
    } else {
      alert("Invalid credential")
    }
  }
  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default Login