import React from 'react';

const VideoListItem = ({video}) =>{
    const url = video.snippet.thumbnails.default.url;    
    return( <li>
                <div>
                    <img src = {url}/>
                    {video.snippet.title}
                </div>
            </li>
    );
};

export default VideoListItem;