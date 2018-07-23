import React from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{
    const url = video.snippet.thumbnails.default.url;    
    return( <li onClick = {() => onVideoSelect(video)}>
                <div>
                    <img src = {url}/>
                    {video.snippet.title}
                </div>
            </li>
    );
};

export default VideoListItem;