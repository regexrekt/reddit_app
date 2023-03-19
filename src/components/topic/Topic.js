import React from "react";
import { changeTopic, changeUrlParam } from "./topicSlice";
import { useDispatch } from "react-redux";

export const Topic = (props) => {
    const {id, param, topic} = props;

    const dispatch = useDispatch();

    const handleTopicChange = (e) => {
        const topicPayload = e.target.getAttribute('data-value')
        dispatch(changeTopic(topicPayload))
        dispatch(changeUrlParam(param))
    }
        
    return (
        <div id={id} param={param} onClick={handleTopicChange} data-value={topic} className='topic'>
            {topic}
        </div>
    )
}