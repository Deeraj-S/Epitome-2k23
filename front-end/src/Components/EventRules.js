import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie';
import Navbar from './Navbar'
import '../styles/EventForms.css'

function EventRules() {
    const navigate = useNavigate()
    const params = useParams()
    let EventData = null
    let EventParadox = null

    useEffect(() => {
        const token = Cookies.get('TOKEN');
        if (!token) {
            navigate('/signin')
        }
    }, [navigate])

    if (params.id === 'timeWrap') {
        EventData = {
            EventName1: 'Time Wrap',
            EventName2: '(IT Quiz)',
            EventDetails1: '* No.of participants : 2.',
            EventDetails2: '* No electronic gadgets are allowed .',
            EventDetails3: '* They should have knowlege on general topics, logos, taglines, coding related topics.',
            EventDetails4: '* There will be 3 rounds.',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Sunny Joel Paulose - 9481769484',
            Eventinfo2: 'Abita Mahabaleshwar Naik - 9606762070'
        }
    }

    if (params.id === 'mindMines') {
        EventData = {
            EventName1: 'MIND MINES',
            EventName2: '(Coding and webdesign)',
            EventDetails1: '* No.of participants : 2 ',
            EventDetails2: '* Participants must be familiar with Java and html,css language.',
            EventDetails3: '* Round will include debugging, web design and implementation.',
            EventDetails4: '* There will be 4 rounds',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Vijeth - 9400926835',
            Eventinfo2: 'Aswhith K J - 9448757292'
        }
    }

    if (params.id === 'futureFlash') {
        EventData = {
            EventName1: 'FUTURE FLASH',
            EventName2: '(Movie making)',
            EventDetails1: '* No of Participants: 4(min)-6(max) members.',
            EventDetails2: '* Shortfilm must be 3-7 minutes long.',
            EventDetails3: '* Film can be created using Phone or Digital Camera.',
            EventDetails4: '* Gopro is not allowed.',
            EventDetails5: '* External video (from youtube,etc) cannot be added in shotfilm.',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Abdulla Nishad PM - 9633164690',
            Eventinfo2: 'Om Prakash Jangid - 9571305470'
        }
    }

    if (params.id === 'turnTheTable') {
        EventData = {
            EventName1: 'TURN THE TABLE',
            EventName2: '(IT Debate)',
            EventDetails1: '* No. of Participants: 1 member.',
            EventDetails2: '* Usage of offensive words are strictly prohibited.',
            EventDetails3: '* They should be ready to take up any role.',
            EventDetails4: '* There will be 3 rounds',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Raksha Aithappa Shetty - 8330883303',
            Eventinfo2: 'Anusha Rose- 6363336587',
        }
    }

    if (params.id === 'chronoBeats') {
        EventData = {
            EventName1: 'CHRONOBEATS',
            EventName2: '(THEMATIC DANCE)',
            EventDetails1: '* No.of Participants: 5(min)-6(max)',
            EventDetails2: '* The choice of the theme is entirely up to the teams.',
            EventDetails3: '* The time limit for each performance is 4 minutes, with an additional 1 minute allocated for setup before the performance begins.',
            EventDetails4: '* Participants must be aware that any obscene or offensive acts are completely unacceptable and will lead to immediate disqualification.',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Rashmi n - 7892998798',
            Eventinfo2: 'Akashy Kumar - 9740791523',
        }
    }

    if (params.id === 'stellar') {
        EventParadox = {
            EventName1: 'STELLAR',
            EventName2: '(Fashion show)',
            EventDetails1: '* No.of Participants: 5(min)-6(max)',
            EventDetails2: '* The theme for the Fashion Show is “Celestial: Fashions Voyage from the Stars to Earth”',
            EventDetails3: '* Each team will have a total performance time of 7+2 minutes, including both setup and performance.',
            EventDetails4: '* Participants must carry their tracks/audio files in a pen drive and also provide a copy in their Google Drive.',
            EventDetails5: '* Participants are encouraged to submit their own digital backdrop file in HD format before the event. These will be displayed during their presentation.',
            EventDetails6: '* All costumes are permitted as long as they maintain decency. No vulgarity in the costumes (e.g., sleeveless, backless, short dresses, etc.) is allowed. Violation of this rule will result in disqualification.',
            EventDetails7: '* Professionally made or rented costumes are not permitted. Participants must use their own creativity and skills to create the costumes.',
            EventDetails8: '* Props such as fire, powder, water, light, and glass are strictly prohibited.',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Alroy Menezes - 8073128251',
            Eventinfo2: 'Reiona Dsouza – 7498440933',
        }
    }

    if (params.id === 'conunDrum') {
        EventData = {
            EventName1: 'CONUNDRUM',
            EventName2: '(Treasure hunt)',
            EventDetails1: '* No.of Participents: 2(min)-3(max)',
            EventDetails2: '* Be prepared with puzzle solving knowledge, riddles, knowledge about technologies.',
            EventDetails3: '* Location will be whole campus.',
            EventDetails4: '* There will be 4 rounds',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Ashika Sheikh - 9778397497',
            Eventinfo2: 'Srilakshmi Shenoy - 8592901487',
        }
    }

    if (params.id === 'itManager') {
        EventData = {
            EventName1: ' IT PHARAOH ',
            EventName2: '(IT Manager)',
            EventDetails1: '* No.of Participants: 1.\n\n\n\n',
            EventDetails2: '* Dress code is "Formal attire".',
            EventDetails3: '* Participants should bring their own laptops.',
            EventDetails4: '* Rounds will consist of apptitude, mock press, case study, stress interview.',
            EventDetails5: '* There will be 5 rounds',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Anvitha Alva - 8310400951',
            Eventinfo2: 'Kavana - 8431395996'
        }
    }

    if (params.id === 'flashForward') {
        EventData = {
            EventName1: 'FLASH FORWARD',
            EventName2: '(Photography)',
            EventDetails1: '* No.of Participant: 1.\n\n\n\n',
            EventDetails2: '* Participants should get their equipments like laptop, camera, mobile, tripod etc.',
            EventDetails3: '* They should be familar with editing.',
            EventDetails4: '* There will be 4 rounds',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Chaithanya KS - 8050244505 ',
            Eventinfo2: 'Joyce Smitha Pereira - 7349756316'
        }
    }

    if (params.id === 'dumCharades') {
        EventData = {
            EventName1: 'DELOREAN MUTES',
            EventName2: '(Dumb Charades)',
            EventDetails1: '* No.of Participant: 3. \n \n \n',
            EventDetails2: '* Participants are required to possess a well-rounded knowledge of both cinema, including movies and actors, as well as a solid understanding of general computer knowledge and current trends and technologies in the IT field.',
            EventDetails3: '* Teams must maintain respect and avoid any offensive gestures or actions.',
            EventDetails4: '* There will be 3 rounds.',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Vyalary Juni Vaz - 9481818835',
            Eventinfo2: 'Rohit Mathew - 9072169986'
        }
    }

    if (params.id === 'games') {
        EventData = {
            EventName1: 'WARLORDS',
            EventName2: '(Gaming)',
            EventDetails1: '* No.of Participants: 2.\n\n',
            EventDetails2: '* No hacks, points depend on kills and positions.',
            EventDetails3: '* Participants should bring headphones.',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Abhay Kulkarni - 9962797068',
            Eventinfo2: 'Brijesh - 9766465683'
        }
    }

    if (params.id === 'paradox') {
        EventParadox = {
            EventName1: 'PARADOX',
            EventName2: '(Logo Recreation and Meme making)',
            EventDetails1: '* No.of Paticipants: 1.',
            EventDetails2: '* Participant should get their own laptop.',
            EventDetails3: '* Only use the logo that is being provided by the team.',
            EventDetails4: '* Any offline medium can be used to recreate the logo.',
            EventDetails5: '* The theme for IT MEME Making will be provided.',
            EventDetails6: '* Your meme must be appropriate for all ages. This means no religious, political violence or hate speech.',
            EventDetails7: '* Your meme must be relevant to the theme that is being provided.',
            EventDetails8: '* There will be 2 rounds.',
            EventHeads: 'EVENT HEADS',
            Eventinfo1: 'Ashritha Rai - 7204097278',
            Eventinfo2: 'Anvith G - 9483335593'
        }
    }

    return (
        <>
            <Navbar />
            {
                params.id == null ?
                    <>
                        <div className="details-body">
                            <div className="details-box">
                                <div className='details-paragraph'>
                                    <p className='para-one'>EVENT NAME</p>
                                </div>
                                <div className="details-content">
                                    <h4>Click on the Event Posters to get more details on event Rules</h4>
                                    <h3>EVENT HEADS</h3>
                                </div>
                            </div>
                        </div>
                    </>
                    : ''
            }

            {
                EventData != null ?
                    <>
                        <div className="details-body">

                            <div className="details-box">
                                <div className='details-paragraph'>
                                    <p className='para-one'>{EventData.EventName1}</p>
                                    <p >{EventData.EventName2}</p>
                                </div>
                                <div className="details-content">
                                    <h4>{EventData.EventDetails1}</h4>
                                    <h4>{EventData.EventDetails2}</h4>
                                    <h4>{EventData.EventDetails3}</h4>
                                    <h4>{EventData.EventDetails4}</h4>
                                    <h4>{EventData.EventDetails5}</h4>
                                    <h4>{EventData.EventDetails6}</h4>
                                    <h4>{EventData.EventDetails7}</h4>
                                    <h4>{EventData.EventDetails8}</h4>
                                    <h3>{EventData.EventHeads}</h3>
                                    <h4>{EventData.Eventinfo1}</h4>
                                    <h4>{EventData.Eventinfo2}</h4>
                                </div>
                            </div>
                        </div>

                    </>
                    : ''
            }

            {
                EventParadox != null ?
                    <>
                        <div className="paradox-body">

                            <div className="paradox-box">
                                <div className='paradox-paragraph'>
                                    <p className='para-one'>{EventParadox.EventName1}</p>
                                    <p >{EventParadox.EventName2}</p>
                                </div>
                                <div className="paradox-content">
                                    <h4>{EventParadox.EventDetails1}</h4>
                                    <h4>{EventParadox.EventDetails2}</h4>
                                    <h4>{EventParadox.EventDetails3}</h4>
                                    <h4>{EventParadox.EventDetails4}</h4>
                                    <h4>{EventParadox.EventDetails5}</h4>
                                    <h4>{EventParadox.EventDetails6}</h4>
                                    <h4>{EventParadox.EventDetails7}</h4>
                                    <h4>{EventParadox.EventDetails8}</h4>
                                    <h3>{EventParadox.EventHeads}</h3>
                                    <h4>{EventParadox.Eventinfo1}</h4>
                                    <h4>{EventParadox.Eventinfo2}</h4>
                                </div>
                            </div>
                        </div>

                    </>
                    : ''
            }
        </>
    )
}

export default EventRules