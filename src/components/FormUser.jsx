import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'

const FormUser = ({createUser, infoUpdate, updateUser,setInfoUpdate }) => {

    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
      reset(infoUpdate)
    }, [infoUpdate])

    const Submit = data=> {
      if(infoUpdate){
        updateUser('/users', infoUpdate.id, data)
        setInfoUpdate()
      } else {
       createUser('/users', data)
      }

       reset({
        email:'',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
      
       })
    }

  return (
   
    <form onSubmit={handleSubmit(Submit)} className='formu'>
        <div className='formu_one'><label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id='email' />
        </div>

        <div className='formu_two'><label htmlFor="password">Password</label>
        <input {...register('password')}type="password" id='password' />
        </div>

        <div className='formu_three'><label htmlFor="first_name">First Name</label>
        <input{...register('first_name')}  type="text" id='first_name' />
        </div>

        <div className='formu_four'><label htmlFor="last_name">Last Name</label>
        <input {...register('last_name')} type="text" id='last_name' />
        </div>

        <div className='formu_five'><label htmlFor="birthday">Birthday</label>
        <input {...register('birthday')} type="date" id='birthday' />
        </div>

        <button className='formu_six'>{infoUpdate ? 'update' : 'Create' }</button>
    </form>
    
  )
}

export default FormUser