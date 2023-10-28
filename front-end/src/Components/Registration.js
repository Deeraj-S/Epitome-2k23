import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../styles/RegForms.css'
import image from '../payment.jpg'
import LoadingSpinner from './LoadingSpinner';

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

  const [college_name, setcollege_name] = useState("");
  const handlecollege_nameChange = (event) => {
    setcollege_name(event.target.value);
  };
  const [email_id,setemail_id]=useState("");
  const handleemail_idChange = (event)=>{
    setemail_id(event.target.value);
  };
  const [quiz_user1, setquiz_user1] = useState("");
  const [quiz_phno1, setquiz_phno1] = useState("");
  const [quiz_user2, setquiz_user2] = useState("");
  const handleQuiz_user1Change = (event) => {
    setquiz_user1(event.target.value);
  };
  const handleQuiz_phno1Change = (event) => {
    setquiz_phno1(event.target.value);
  };
  const handleQuiz_user2Change = (event) => {
    setquiz_user2(event.target.value);
  };

  const [manager_user1, setmanager_user1] = useState("");
  const [manager_phno1, setmanager_phno1] = useState("");
  const handleManager_user1Change = (event) => {
    setmanager_user1(event.target.value);
  };
  const handleManager_phno1Change = (event) => {
    setmanager_phno1(event.target.value);
  };

  const [code_user1, setcode_user1] = useState("");
  const [code_phno1, setcode_phno1] = useState("");
  const [code_user2, setcode_user2] = useState("");
  const handleCode_user1Change = (event) => {
    setcode_user1(event.target.value);
  };
  const handleCode_phno1Change = (event) => {
    setcode_phno1(event.target.value);
  };
  const handleCode_user2Change = (event) => {
    setcode_user2(event.target.value);
  };

  const [treasure_user1, settreasure_user1] = useState("");
  const [treasure_phno1, settreasure_phno1] = useState("");
  const [treasure_user2, settreasure_user2] = useState("");
  const handleTreasure_user1Change = (event) => {
    settreasure_user1(event.target.value);
  };
  const handleTreasure_phno1Change = (event) => {
    settreasure_phno1(event.target.value);
  };
  const handleTreasure_user2Change = (event) => {
    settreasure_user2(event.target.value);
  };

  const [photography_user1, setphotography_user1] = useState("");
  const [photography_phno1, setphotography_phno1] = useState("");
  const handlePhotography_user1Change = (event) => {
    setphotography_user1(event.target.value);
  };
  const handlePhotography_phno1Change = (event) => {
    setphotography_phno1(event.target.value);
  };

  const [logo_user1, setlogo_user1] = useState("");
  const [logo_phno1, setlogo_phno1] = useState("");
  const handleLogo_user1Change = (event) => {
    setlogo_user1(event.target.value);
  };
  const handleLogo_phno1Change = (event) => {
    setlogo_phno1(event.target.value);
  };

  const [thematic_user1, setthematic_user1] = useState("");
  const [thematic_phno1, setthematic_phno1] = useState("");
  const [thematic_user2, setthematic_user2] = useState("");
  const [thematic_user3, setthematic_user3] = useState("");
  const [thematic_user4, setthematic_user4] = useState("");
  const [thematic_user5, setthematic_user5] = useState("");
  const [thematic_user6, setthematic_user6] = useState("");
  const handleThematic_user1Change = (event) => {
    setthematic_user1(event.target.value);
  };
  const handleThematic_phno1Change = (event) => {
    setthematic_phno1(event.target.value);
  };
  const handleThematic_user2Change = (event) => {
    setthematic_user2(event.target.value);
  };
  const handleThematic_user3Change = (event) => {
    setthematic_user3(event.target.value);
  };
  const handleThematic_user4Change = (event) => {
    setthematic_user4(event.target.value);
  };
  const handleThematic_user5Change = (event) => {
    setthematic_user5(event.target.value);
  };
  const handleThematic_user6Change = (event) => {
    setthematic_user6(event.target.value);
  };

  const [movie_user1, setmovie_user1] = useState("");
  const [movie_phno1, setmovie_phno1] = useState("");
  const [movie_user2, setmovie_user2] = useState("");
  const [movie_user3, setmovie_user3] = useState("");
  const [movie_user4, setmovie_user4] = useState("");
  const [movie_user5, setmovie_user5] = useState("");
  const [movie_user6, setmovie_user6] = useState("");
  const handleMovie_user1Change = (event) => {
    setmovie_user1(event.target.value);
  };
  const handleMovie_phno1Change = (event) => {
    setmovie_phno1(event.target.value);
  };
  const handleMovie_user2Change = (event) => {
    setmovie_user2(event.target.value);
  };
  const handleMovie_user3Change = (event) => {
    setmovie_user3(event.target.value);
  };
  const handleMovie_user4Change = (event) => {
    setmovie_user4(event.target.value);
  };
  const handleMovie_user5Change = (event) => {
    setmovie_user5(event.target.value);
  };
  const handleMovie_user6Change = (event) => {
    setmovie_user6(event.target.value);
  };

  const [pot_user1, setpot_user1] = useState("");
  const [pot_phno1, setpot_phno1] = useState("");
  const [pot_user2, setpot_user2] = useState("");
  const [pot_user3, setpot_user3] = useState("");
  const handlePot_user1Change = (event) => {
    setpot_user1(event.target.value);
  };
  const handlePot_phno1Change = (event) => {
    setpot_phno1(event.target.value);
  };
  const handlePot_user2Change = (event) => {
    setpot_user2(event.target.value);
  };
  const handlePot_user3Change = (event) => {
    setpot_user3(event.target.value);
  };

  const [fashion_user1, setfashion_user1] = useState("");
  const [fashion_phno1, setfashion_phno1] = useState("");
  const [fashion_user2, setfashion_user2] = useState("");
  const [fashion_user3, setfashion_user3] = useState("");
  const [fashion_user4, setfashion_user4] = useState("");
  const [fashion_user5, setfashion_user5] = useState("");
  const [fashion_user6, setfashion_user6] = useState("");
  const handleFashion_user1Change = (event) => {
    setfashion_user1(event.target.value);
  };
  const handleFashion_phno1Change = (event) => {
    setfashion_phno1(event.target.value);
  };
  const handleFashion_user2Change = (event) => {
    setfashion_user2(event.target.value);
  };
  const handleFashion_user3Change = (event) => {
    setfashion_user3(event.target.value);
  };
  const handleFashion_user4Change = (event) => {
    setfashion_user4(event.target.value);
  };
  const handleFashion_user5Change = (event) => {
    setfashion_user5(event.target.value);
  };
  const handleFashion_user6Change = (event) => {
    setfashion_user6(event.target.value);
  };

  const [debate_user1, setdebate_user1] = useState("");
  const [debate_phno1, setdebate_phno1] = useState("");
  const [debate_user2, setdebate_user2] = useState("");
  const handleDebate_user1Change = (event) => {
    setdebate_user1(event.target.value);
  };
  const handleDebate_phno1Change = (event) => {
    setdebate_phno1(event.target.value);
  };
  const handleDebate_user2Change = (event) => {
    setdebate_user2(event.target.value);
  };

  const [gaming_user1, setgaming_user1] = useState("");
  const [gaming_phno1, setgaming_phno1] = useState("");
  const [gaming_user2, setgaming_user2] = useState("");
  const handleGaming_user1Change = (event) => {
    setgaming_user1(event.target.value);
  };
  const handleGaming_phno1Change = (event) => {
    setgaming_phno1(event.target.value);
  };
  const handleGaming_user2Change = (event) => {
    setgaming_user2(event.target.value);
  };

  const [trans, settrans] = useState("");
  const handleTransChange = (event) => {
    settrans(event.target.value);
  };

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault();
    console.log("college_name : ", college_name);
    console.log("quiz_user1 : ", quiz_user1);
    console.log("quiz_phno1 : ", quiz_phno1);
    console.log("quiz_user2 : ", quiz_user2);

    console.log("manager_user1 : ", manager_user1);
    console.log("manager_user1 : ", manager_phno1);

    console.log("code_user1 : ", code_user1);
    console.log("code_phno1 : ", code_phno1);
    console.log("code_user2 : ", code_user2);

    console.log("treasure_user1 : ", treasure_user1);
    console.log("treasure_phno1 : ", treasure_phno1);
    console.log("treasure_user2 : ", treasure_user2);

    console.log("photography_user1 : ", photography_user1);
    console.log("photography_phno1 : ", photography_phno1);

    console.log("logo_user1 : ", logo_user1);
    console.log("logo_phno1 : ", logo_phno1);

    console.log("thematic_user1 : ", thematic_user1);
    console.log("thematic_phno1 : ", thematic_phno1);
    console.log("thematic_user2 : ", thematic_user2);
    console.log("thematic_user3 : ", thematic_user3);
    console.log("thematic_user4 : ", thematic_user4);
    console.log("thematic_user5 : ", thematic_user5);
    console.log("thematic_user6 : ", thematic_user6);

    console.log("pot_user1 : ", pot_user1);
    console.log("pot_phno1 : ", pot_phno1);
    console.log("pot_user2 : ", pot_user2);
    console.log("pot_user3 : ", pot_user3);

    console.log("movie_user1 : ", movie_user1);
    console.log("movie_phno1 : ", movie_phno1);
    console.log("movie_user2 : ", movie_user2);
    console.log("movie_user3 : ", movie_user3);
    console.log("movie_user4 : ", movie_user4);
    console.log("movie_user5 : ", movie_user5);
    console.log("movie_user6 : ", movie_user6);

    console.log("fashion_user1 : ", fashion_user1);
    console.log("fashion_phno1 : ", fashion_phno1);
    console.log("fashion_user2 : ", fashion_user2);
    console.log("fashion_user3 : ", fashion_user3);
    console.log("fashion_user4 : ", fashion_user4);
    console.log("fashion_user5 : ", fashion_user5);
    console.log("fashion_user6 : ", fashion_user6);

    console.log("debate_user1 : ", debate_user1);
    console.log("debate_phno1 : ", debate_phno1);
    console.log("debate_user2 : ", debate_user2);

    console.log("gaming_user1 : ", gaming_user1);
    console.log("gaaming_phno1 : ", gaming_phno1);
    console.log("gaming_user2 : ", gaming_user2);

    console.log("trans : ", trans);

    axios.post('http://localhost:5000/register', {
      college_name: college_name,
      email_id: email_id,   
      quiz_user1: quiz_user1,
      quiz_user2: quiz_user2,
      quiz_phno1: quiz_phno1,
      manager_user1: manager_user1,
      manager_phno1: manager_phno1,
      code_user1: code_user1,
      code_user2: code_user2,
      code_phno1: code_phno1,
      treasure_user1: treasure_user1,
      treasure_user2: treasure_user2,
      treasure_phno1: treasure_phno1,
      photography_user1: photography_user1,
      photography_phno1: photography_phno1,
      logo_user1: logo_user1,
      logo_phno1: logo_phno1,
      thematic_user1: thematic_user1,
      thematic_user2: thematic_user2,
      thematic_user3: thematic_user3,
      thematic_user4: thematic_user4,
      thematic_user5: thematic_user5,
      thematic_user6: thematic_user6,
      thematic_phno1: thematic_phno1,
      pot_user1: pot_user1,
      pot_user2: pot_user2,
      pot_user3: pot_user3,
      pot_phno1: pot_phno1,
      movie_user1: movie_user1,
      movie_user2: movie_user2,
      movie_user3: movie_user3,
      movie_user4: movie_user4,
      movie_user5: movie_user5,
      movie_user6: movie_user6,
      movie_phno1: movie_phno1,
      fashion_user1: fashion_user1,
      fashion_user2: fashion_user2,
      fashion_user3: fashion_user3,
      fashion_user4: fashion_user4,
      fashion_user5: fashion_user5,
      fashion_user6: fashion_user6,
      fashion_phno1: fashion_phno1,
      debate_user1: debate_user1,
      debate_user2: debate_user2,
      debate_phno1: debate_phno1,
      gaming_user1: gaming_user1,
      gaming_user2: gaming_user2,
      gaming_phno1: gaming_phno1,
      trans: trans
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

  };
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
              <input type="text" autoComplete='off' placeholder="College name" name="college_name" value={college_name} onChange={handlecollege_nameChange} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Email id" name="email_id" value={email_id} onChange={handleemail_idChange} required />
            </div>
            <h4>IT MANAGER</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="manager_user1" value={manager_user1} onChange={handleManager_user1Change} required />
              <input type="number" autoComplete='off' placeholder="Phone no" name="manager_phno1" value={manager_phno1} onChange={handleManager_phno1Change} required />
            </div>

            <h4>IT QUIZ</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="quiz_user1" value={quiz_user1} onChange={handleQuiz_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="quiz_user2" value={quiz_user2} onChange={handleQuiz_user2Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="quiz_phno1" value={quiz_phno1} onChange={handleQuiz_phno1Change} required />
            </div>

            <h4>CODING AND WEB DESIGN</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="code_user1" value={code_user1} onChange={handleCode_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="code_user2" value={code_user2} onChange={handleCode_user2Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="code_phno1" value={code_phno1} onChange={handleCode_phno1Change} required />
            </div>

            <h4>TREASURE HUNT </h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="treasure_user1" value={treasure_user1} onChange={handleTreasure_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="treasure_user2" value={treasure_user2} onChange={handleTreasure_user2Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="treasure_phno1" value={treasure_phno1} onChange={handleTreasure_phno1Change} required />
            </div>

            <h4>PHOTOGRAPHY </h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="photography_user1" value={photography_user1} onChange={handlePhotography_user1Change} required />
              <input type="number" autoComplete='off' placeholder="Phone no" name="photography_phno1" value={photography_phno1} onChange={handlePhotography_phno1Change} required />
            </div>

            <h4>LOGO RECREATION</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="logo_user1" value={logo_user1} onChange={handleLogo_user1Change} required />
              <input type="number" autoComplete='off' placeholder="Phone no" name="logo_phno1" value={logo_phno1} onChange={handleLogo_phno1Change} required />
            </div>

            <h4>THEMATIC DANCE</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="thematic_user1" value={thematic_user1} onChange={handleThematic_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="thematic_user2" value={thematic_user2} onChange={handleThematic_user2Change} />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 3" name="thematic_user3" value={thematic_user3} onChange={handleThematic_user3Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 4" name="thematic_user4" value={thematic_user4} onChange={handleThematic_user4Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 5" name="thematic_user5" value={thematic_user5} onChange={handleThematic_user5Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 6" name="thematic_user6" value={thematic_user6} onChange={handleThematic_user6Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="thematic_phno1" value={thematic_phno1} onChange={handleThematic_phno1Change} required />
            </div>

            <h4>MOVIE MAKING</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="movie_user1" value={movie_user1} onChange={handleMovie_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="movie_user2" value={movie_user2} onChange={handleMovie_user2Change} />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 3" name="movie_user3" value={movie_user3} onChange={handleMovie_user3Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 4" name="movie_user4" value={movie_user4} onChange={handleMovie_user4Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 5" name="movie_user5" value={movie_user5} onChange={handleMovie_user5Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 6" name="movie_user6" value={movie_user6} onChange={handleMovie_user6Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="movie_phno1" value={movie_phno1} onChange={handleMovie_phno1Change} required />
            </div>

            <h4>Dumb Charades</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="pot_user1" value={pot_user1} onChange={handlePot_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="pot_use2" value={pot_user2} onChange={handlePot_user2Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 3" name="pot_user3" value={pot_user3} onChange={handlePot_user3Change} required />
              <input type="number" autoComplete='off' placeholder="Phone no" name="pot_phno1" value={pot_phno1} onChange={handlePot_phno1Change} required />
            </div>

            <h4>IT DEBATE</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="debate_user1" value={debate_user1} onChange={handleDebate_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="debate_user2" value={debate_user2} onChange={handleDebate_user2Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="debate_phno1" value={debate_phno1} onChange={handleDebate_phno1Change} required />
            </div>

            <h4>FASHION SHOW</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="fashion_user1" value={fashion_user1} onChange={handleFashion_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="fashion_user2" value={fashion_user2} onChange={handleFashion_user2Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 3" name="fashion_user3" value={fashion_user3} onChange={handleFashion_user3Change} required />
              <input type="text" placeholder="Participant 4" name="fashion_user4" value={fashion_user4} onChange={handleFashion_user4Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 5" name="fashion_user5" value={fashion_user5} onChange={handleFashion_user5Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 6" name="fashion_user6" value={fashion_user6} onChange={handleFashion_user6Change} />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="fashion_phno1" value={fashion_phno1} onChange={handleFashion_phno1Change} required />
            </div>

            <h4>GAMING</h4>
            <div className='reg-input-box'>
              <input type="text" autoComplete='off' placeholder="Participant 1" name="gaming_user1" value={gaming_user1} onChange={handleGaming_user1Change} required />
              <input type="text" autoComplete='off' placeholder="Participant 2" name="gaming_user2" value={gaming_user2} onChange={handleGaming_user2Change} required />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder="Phone no" name="gaming_phno1" value={gaming_phno1} onChange={handleGaming_phno1Change} required />
            </div>

            <h4>PAYMENT</h4>
            <div className='reg-input-box'>
              <img src={image} height={200} width={200} alt='Payment' />
            </div>
            <div className='reg-input-box'>
              <input type="number" autoComplete='off' placeholder='Enter the transaction no' name="trans" value={trans} onChange={handleTransChange} required />
            </div>
            {message && <h3 className={message.includes('sent') ? 'Success-message' : 'errors-message'}>{message}</h3>}
            <a href={link} onClick={handleSubmit} className='register-btn'>
              Submit
            </a>

          </form>

        </div>
      </div>
      <Footer />
    </>
  )
}
export default Form

