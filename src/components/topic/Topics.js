import React from "react";
import { useState } from "react";
import { Topic } from "./Topic";


export const Topics = () => {

    const [topics, setTopics] = useState([
        {
            urlParam: '/r/battlestations',
            topic: 'Battle Stations'
        },
        {
            urlParam: '/r/pcmasterrace',
            topic: 'PC Master Race'
        },
        {
            urlParam: '/r/gaming/hot',
            topic: 'Gaming'
        }
    ])

    return (
        <div id='subreddits' className='subreddits'>
            <p className='subredditList'>Select Subreddit</p>
            {topics.map(topic => {
                return <Topic key={topics.indexOf(topic)} id={topics.indexOf(topic)} topic={topic.topic} param={topic.urlParam}/>
            })}
        </div>
    )
}