import React from 'react'
import { Form } from 'react-router-dom'
import { UserPlusIcon } from '@heroicons/react/16/solid'
import illustration from '../assets/illustration.jpg'
const Intro = () => {
  return (
    <div className="intro">
        <div>
            <h1>
                Take control of <span className="accent">
                    Your Money
                </span>
             
            </h1>
            <p>
                    Personal freedom is  the secret to Financial freedom.Start your journey today.
            </p>
            <Form method='POST'>
            <input type="text"
            placeholder='Enter your name'
            required
            aria-label='Enter userName'
            name='nameOfUser'
            autoComplete='given-name'
            />
            <button type='submit' className='btn btn--dark'>
                <span>
                    Create Account
                </span>
                <UserPlusIcon width={20} />

            </button>
            </Form>
            <img src={illustration} alt="Person with money" width={600}/>
        </div>
    </div>
  )
}

export default Intro
