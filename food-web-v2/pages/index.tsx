import { Button } from '@/components/Button/Button'
import Input from '@/components/Inputs/Input'
import React, { useState } from 'react'
import { getSession, signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { Header } from '@/components/Header/Header'
const intitalData = {
  email: "",
  password: "",
}
const Home = () => {
  const [formdata, setformdata] = useState(intitalData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setformdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      redirect: false,
      email: formdata.email,
      password: formdata.password
    })
    console.log(res)
    if (res?.error) {
      alert(res.error)
    } else {
      window.location.href = "/order"
    }
  }
  return (
    <div style={{
      backgroundImage: `url("bg3.jpg")`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    }}
      className="h-screen overflow-auto"
    >
      <Header
        onlyLogo
      />
      <div className='flex items-center justify-center  mt-14 pb-14' >
        <form onSubmit={handleSubmit} className="grid w-[30%] m-auto gap-y-3 bg-white p-10 shadow-md rounded-md">
          <h1 className='font-bold text-center text-2xl mb-5'>Login</h1>
          <Input required name='email' onChange={handleChange} placeholder='Email' />
          <Input required name='password' onChange={handleChange} placeholder='Password' type='password' />
          <Button title='Submit' type='submit' />
        </form>
      </div>
    </div>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  if (session) {
    return {
      redirect: {
        destination: "/order",
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}