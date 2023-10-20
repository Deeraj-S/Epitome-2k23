import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import mystyle from '../styles/EventForms.css'

function EventRules() {
    const params = useParams()
    let EventData = null

    if(params.id === 'timeWrap'){
        EventData = {
            EventName: 'Time Wrap(IT Quiz)',
            EventDetails: '*No.of participants : 2. \n * No electronic gadgets are allowed .\n * They should have knowlege on general topics, logos, taglines, coding related topics.\n * There will be 3 rounds.\n ' ,
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Sunny Joel Paulose - 9481769484\n Abita Mahabaleshwar Naik - 9606762070\n'
        }
    }
    
    if(params.id === 'mindMines'){
        EventData = {
            EventName: 'MIND MINES(Coding and webdesign)',
            EventDetails: '* No.of participants : 2 * Participants must be familiar with Java and html,css language * Round will include debugging, web design and implementation. * There will be 4 rounds' ,
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Vijeth - 9400926835 \n Aswhith K J - 9448757292'
        }
    }

    if(params.id === 'futureFlash'){
        EventData = {
            EventName: 'FUTURE FLASH(Movie making)',
            EventDetails: 'No of Participants: 4(min)-6(max) members. \n *Shotfilm must be 3-7 minutes long. \n* Film can be created using Phone or Digital Camara. \n* Gopro is not allowed.\n *External video (from youtube,etc) cannot be added in shotfilm.',
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Abdulla Nishad PM - 9633164690 \n Om Prakash Jangid - 9571305470'
        }
    }

    if(params.id === 'turnTheTable'){
        EventData = {
            EventName: 'TURN THE TABLE(IT Debate)',
            EventDetails: '* No. of Participants: 1 member. \n *Usage of offensive words are strictly prohibited. \n* They should be ready to take up any role. \n* There will be 3 rounds' ,
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Raksha Aithappa Shetty - 8330883303 \nAnusha Rose- 6363336587'
        }
    }

    if(params.id === 'chronoBeats'){
        EventData = {
            EventName: 'CHRONOBEATS(IT Quiz)',
            EventDetails: '* No.of Participants: 5(min)-6(max) \n* The choice of the theme is entirely up to the teams.\n* The time limit for each performance is 4 minutes, with an additional 1 minute allocated for setup before the performance begins. \n* Participants must be aware that any obscene or offensive acts are completely unacceptable and will lead to immediate disqualification.',
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Rashmin - 7892998798\n Akashy Kumar - 9740791523\n'
        }
    }

    if(params.id === 'stellar'){
        EventData = {
            EventName: 'STELLAR(Fashion show)',
            EventDetails: '* No.of Participants: 5(min)-6(max) \n* The theme for the Fashion Show is “Celestial: Fashions Voyage from the Stars to Earth” \n* Each team will have a total performance time of 7+2 minutes, including both setup and performance. \n* Participants must carry their tracks/audio files in a pen drive and also provide a copy in their Google Drive.\n* Participants are encouraged to submit their own digital backdrop file in HD format before the event. These will be displayed during their presentation. \n* All costumes are permitted as long as they maintain decency. No vulgarity in the costumes (e.g., sleeveless, backless, short dresses, etc.) is allowed. Violation of this rule will result in disqualification.\n* Professionally made or rented costumes are not permitted. Participants must use their own creativity and skills to create the costumes.\n* Props such as fire, powder, water, light, and glass are strictly prohibited.\n',
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Alroy Menezes - 8073128251 \nReiona Dsouza – 7498440933\n'
        }
    }

    if(params.id === 'conunDrum'){
        EventData = {
            EventName: 'CONUNDRUM(Treasure hunt)',
            EventDetails: '* No.of Participents: 2(min)-3(max) \n* Be prepared with puzzle solving knowledge, riddles, knowledge about technologies. \n* Location will be whole campus. \n* There will be 4 rounds\n' ,
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Ashika Sheikh - 9778397497 \n Srilakshmi Shenoy - 8592901487\n'
        }
    }

    if(params.id === 'itManager'){
        EventData = {
            EventName: ' IT PHARAOH (IT Manager)',
            EventDetails: '* No.of Participants: 1.\n* Dress code is "Formal attire".\n* Participants should bring their own laptops.\n* Rounds will consist of apptitude, mock press, case study, stress interview.\n* There will be 5 rounds\n' ,
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Anvitha Alva - 8310400951\n Kavana - 8431395996 '
        }
    }

    if(params.id === 'flashForward'){
        EventData = {
            EventName: 'FLASH FORWARD(Photography)',
            EventDetails: '*No.of Participant: 1.\n*Participants should get their equipments like laptop, camera, mobile, tripod etc.\n* They should be familar with eiditing.\n* There will be 4 rounds\n' ,
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Chaithanya KS - 8050244505 \n Joyce Smitha Pereira - 7349756316\n'
        }
    }

    if(params.id === 'dumCharades'){
        EventData = {
            EventName: 'DUMCHARADES(Pot Pouri)',
            EventDetails: '* No.of Participant: 3. \n*Participants are required to possess a well-rounded knowledge of both cinema, including movies and actors, as well as a solid understanding of general computer knowledge and current trends and technologies in the IT field. \n* Teams must maintain respect and avoid any offensive gestures or actions. \n* There will be 3 rounds.',
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Vyalary Juni Vaz - 9481818835\n Rohit Mathew - 9072169986\n'
        }
    }

    if(params.id === 'games'){
        EventData = {
            EventName: 'WARLORDS(Gaming)',
            EventDetails: '* No.of Participants: 2.\n* No hacks, points depend on kills and positions.\n* Participants should bring headphones.' ,
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Abhay Kulkarni - 9962797068\n Brijesh - 9766465683\n'
        }
    }

    if(params.id === 'paradox'){
        EventData = {
            EventName: 'PARADOX(Logo Recreation and Meme making)',
            EventDetails: '* No.of Paticipants: 1.\n* Participant should get their own laptop.\n* Only use the logo that is being provided by the team.\n* Any offline medium can be used to recreate the logo.\n*The theme for IT MEME Making will be provided.\n*Your meme must be appropriate for all ages. This means no religious, political violence or hate speech.\n*Your meme must be relevant to the theme that is being provided.\n* There will be 2 rounds.' ,
            EventHeads: 'EVENT HEADS',
            Eventinfo: 'Ashritha Rai - 7204097278\n Anvith G - 9483335593\n'
        }
    }
    return(
        <>
        <p>Event Rules : </p>
        {
            EventData != null ?
            <>                  
                
            <div className={mystyle.event_body}>
                    <div className={mystyle.event_box}>
                        <p>{EventData.EventName}</p>
                        <div className={mystyle.event_content}>
                            <h4>{EventData.EventDetails}</h4>
                            <h3>{EventData.EventHeads}</h3>
                            <h4>{EventData.Eventinfo}</h4>
                        </div>
                    </div>
                </div>

            </>
            :''
        }
        </>
    )
}
export default EventRules