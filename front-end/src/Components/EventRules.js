import React from "react"
import { useParams } from "react-router-dom"



function EventRules() {
    const params = useParams()
    let EventData = null

    if (params.id === 'timeWrap') {
        EventData = {
            EventName: "Time warp",
            EventRules: "hgfhjhghfhgfhfffhgfhghghfhfhgfhghfghfhghgfgfgfhghgfghfhgfhg"

        }
    }

    if (params.id === 'mindMines') {
        EventData = {
            EventName: "Mind Mines",
            EventRules: "hgfhjhghfhgfhfffhgfhghghfhfhgfhghfghfhghgfgfgfhghgfghfhgfhg"
        }
    }


    return (
        <>
            <p>Event Rules: </p>
            {
                EventData != null ?
                    <>
                        <h2>{EventData.EventName}</h2>
                        <h2>{EventData.EventRules}</h2>
                    </>
                    : ''
            }

        </>
    )

}

export default EventRules