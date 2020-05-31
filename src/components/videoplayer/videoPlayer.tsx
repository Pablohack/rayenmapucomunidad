import React from 'react'
import ReactPlayer from 'react-player'
import '../style/videoplayer.css';

interface IVideo{
    link: string;
}
export default function VideoPlayer(props:IVideo) {
    return (
        <div className="container">
            <ReactPlayer url={props.link} loop controls width={'215%'} height={'90%'}/>
        </div>
    );
}