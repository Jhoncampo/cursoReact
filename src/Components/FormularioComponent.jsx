import React, { useEffect, useRef, useState } from 'react'
import { useForm } from '../Hooks/useForm'

export const FormularioComponent = () => {

  const focusRef = useRef()
  console.log(focusRef)

  const initialForm = {
    userName: "",
    email: "",
    password: ""
  }
  const { userName, email, password, onInputChange } = useForm(initialForm)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(userName, email, password)
  }

  useEffect(()=>{
    focusRef.current.focus()
  },[])

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">User name</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          value={userName}
          placeholder='Enter your username'
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          ref={ focusRef}
          type="email"
          className="form-control"
          name="email"
          value={email}
          placeholder='Enter your email'
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          placeholder='Password'
          onChange={onInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
