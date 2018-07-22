import React from 'react';

const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Loading....</div>;
    }
    const videoID = video.id.videoId;
    //es6 templte string
    const url = `https://youtube.com/embed/${videoID}`;
    return (
        <div>
            <iframe src ={url}></iframe>
            <div>{video.snippet.title} </div>
            <div>{video.snippet.description} </div>
        </div>
    );
};

export default VideoDetail;