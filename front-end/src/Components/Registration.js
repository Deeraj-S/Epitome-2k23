import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../styles/RegForms.css'
import image from '../payment.jpg'
import LoadingSpinner from './LoadingSpinner';
<<<<<<< HEAD
import BackToTopButton from './BackToTopButton';
=======
import { useFormik } from 'formik';
import { registrationSchema } from '../schemas/signupSchema';

const initialValues={
  college_name: "",
  email_id: "",
  quiz_user1: "",
  quiz_user2: "",
  quiz_phno1: "",
  manager_user1: "",
  manager_phno1: "",
  code_user1: "",
  code_user2: "",
  code_phno1: "",
  treasure_user1: "",
  treasure_phno1: "",
  photography_user1: "",
  photography_phno1: "",
  logo_user1: "",
  logo_phno1: "",
  thematic_user1: "",
  thematic_user2: "",
  thematic_user3: "",
  thematic_user4: "",
  thematic_user5: "",
  thematic_user6: "",
  thematic_phno1: "",
  pot_user1: "",
  pot_user2: "",
  pot_phno1: "",
  movie_user1: "",
  movie_user2: "",


  movie_user3: "",
  movie_user4: "",
  movie_user5: "",
  movie_user6: "",
  movie_phno1: "",
  fashion_user1: "",
  fashion_user2: "",
  fashion_user3: "",
  fashion_user4: "",
  fashion_user5: "",
  fashion_user6: "",
  fashion_phno1: "",
  debate_user1: "",
  debate_user2: "",
  debate_phno1: "",
  gaming_user1: "",
  gaming_user2: "",
  gaming_phno1: "",
  trans: ""
}
>>>>>>> f09f2aefe685065f8b8e87e3fec6106ca5e91d9c

function Form() {
  const navigate = useNavigate()
  const link = ''
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(false)

  useEffect(() => {
    const token = Cookies.get('TOKEN');
    if (!token) {
      navigate('/signin')
    }

  }, [navigate])

  const {values,touched,errors,handleChange,handleBlur,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:registrationSchema,

    onSubmit:(values)=>{
      setLoading(true)
      console.log(values)

      axios.post('http://localhost:5000/register', {
        college_name: values.college_name,
        email_id: values.email_id,
        quiz_user1: values.quiz_user1,
        quiz_user2: values.quiz_user2,
        quiz_phno1: values.quiz_phno1,
        manager_user1: values.manager_user1,
        manager_phno1: values.manager_phno1,
        code_user1: values.code_user1,
        code_user2: values.code_user2,
        code_phno1: values.code_phno1,
        treasure_user1: values.treasure_user1,
        treasure_phno1: values.treasure_phno1,
        photography_user1: values.photography_user1,
        photography_phno1: values.photography_phno1,
        logo_user1: values.logo_user1,
        logo_phno1: values.logo_phno1,
        thematic_user1: values.thematic_user1,
        thematic_user2: values.thematic_user2,
        thematic_user3: values.thematic_user3,
        thematic_user4: values.thematic_user4,
        thematic_user5: values.thematic_user5,
        thematic_user6: values.thematic_user6,
        thematic_phno1: values.thematic_phno1,
        pot_user1: values.pot_user1,
        pot_user2: values.pot_user2,
        pot_phno1: values.pot_phno1,
        movie_user1: values.movie_user1,
        movie_user2: values.movie_user2,
        movie_user3: values.movie_user3,
        movie_user4: values.movie_user4,
        movie_user5: values.movie_user5,
        movie_user6: values.movie_user6,
        movie_phno1: values.movie_phno1,
        fashion_user1: values.fashion_user1,
        fashion_user2: values.fashion_user2,
        fashion_user3: values.fashion_user3,
        fashion_user4: values.fashion_user4,
        fashion_user5: values.fashion_user5,
        fashion_user6: values.fashion_user6,
        fashion_phno1: values.fashion_phno1,
        debate_user1: values.debate_user1,
        debate_user2: values.debate_user2,
        debate_phno1: values.debate_phno1,
        gaming_user1: values.gaming_user1,
        gaming_user2: values.gaming_user2,
        gaming_phno1: values.gaming_phno1,
        trans: values.trans

      }).then((res) => {
        if (res.data.code === 200) {
          alert("Registration Successful")
          navigate('/')
        }
  
        if (res.data.code === 500) {
          setMessage("All fields must be filled")
        }
  
      }).catch((err) => {
        
      }).finally(() => {
        setLoading(false)
      })
  
    
    }

  });
  

    
  return (
    <>
      {loading && <LoadingSpinner />}
      <Navbar />
      <div className='reg-body'>
        <div className='reg-box'>
          <p>REGISTER</p>
          <form onSubmit={handleSubmit}>
            <h4>COLLEGE NAME</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="College name" name="college_name" value={values.college_name} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <h4>REGISTER'S EMAIL ID</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Email id" name="email_id" value={values.email_id} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
            <h4>IT MANAGER</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="manager_user1" value={values.manager_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="number" autoComplete='off' placeholder="Phone no" name="manager_phno1" value={values.manager_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>IT QUIZ</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="quiz_user1" value={values.quiz_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="quiz_user2" value={values.quiz_user2} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="quiz_phno1" value={values.quiz_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>CODING AND WEB DESIGN</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="code_user1" value={values.code_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="code_user2" value={values.code_user2} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="code_phno1" value={values.code_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>TREASURE HUNT </h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="treasure_user1" value={values.treasure_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="number" autoComplete='off' placeholder="Phone no" name="treasure_phno1" value={values.treasure_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>
           
            <h4>PHOTOGRAPHY </h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="photography_user1" value={values.photography_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="number" autoComplete='off' placeholder="Phone no" name="photography_phno1" value={values.photography_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>LOGO RECREATION</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="logo_user1" value={values.logo_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="number" autoComplete='off' placeholder="Phone no" name="logo_phno1" value={values.logo_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>THEMATIC DANCE</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="thematic_user1" value={values.thematic_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="thematic_user2" value={values.thematic_user2} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 3" name="thematic_user3" value={values.thematic_user3} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 4" name="thematic_user4" value={values.thematic_user4} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 5" name="thematic_user5" value={values.thematic_user5} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 6" name="thematic_user6" value={values.thematic_user6} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="thematic_phno1" value={values.thematic_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>MOVIE MAKING</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="movie_user1" value={values.movie_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="movie_user2" value={values.movie_user2} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 3" name="movie_user3" value={values.movie_user3} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 4" name="movie_user4" value={values.movie_user4} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 5" name="movie_user5" value={values.movie_user5} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 6" name="movie_user6" value={values.movie_user6} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="movie_phno1" value={values.movie_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>Dumb Charades</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="pot_user1" value={values.pot_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="pot_user2" value={values.pot_user2} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="pot_phno1" value={values.pot_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>IT DEBATE</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="debate_user1" value={values.debate_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="debate_user2" value={values.debate_user2} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="debate_phno1" value={values.debate_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>FASHION SHOW</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="fashion_user1" value={values.fashion_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="fashion_user2" value={values.fashion_user2} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 3" name="fashion_user3" value={values.fashion_user3} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" placeholder="Participant 4" name="fashion_user4" value={values.fashion_user4} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 5" name="fashion_user5" value={values.fashion_user5} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 6" name="fashion_user6" value={values.fashion_user6} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="fashion_phno1" value={values.fashion_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>GAMING</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="gaming_user1" value={values.gaming_user1} onChange={handleChange} onBlur={handleBlur} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="gaming_user2" value={values.gaming_user2} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="gaming_phno1" value={values.gaming_phno1} onChange={handleChange} onBlur={handleBlur} required />
            </div>

            <h4>PAYMENT</h4>
            <div className='reg-input-box'>
              <img src={image} height={200} width={200} alt='Payment' />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder='Enter the transaction no' name="trans" value={values.trans} onChange={handleChange} onBlur={handleBlur} required />
            </div>
            {message && <h3 className={message.includes('sent') ? 'Success-message' : 'errors-message'}>{message}</h3>}
            <a href={link} onClick={handleSubmit} className='register-btn'>
              Submit
            </a>

          </form>

        </div>
      </div>
      <BackToTopButton />
      <Footer />
    </>
  )
}
export default Form

