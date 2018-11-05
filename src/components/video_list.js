import React from 'react';
import VideoListItem from './vide_list_item';

const VideoList=(props)=>{


    const videItems=props.videos.map((video)=>{
        return(


            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                // we are passing the prop received from App to video_list_item
                key={video.etag} video={video}/>
        //key is used to identify each video seperately
        );
    });
    return (

        <ul className="col-md-4 list-group">

            {videItems}
        </ul>
    )
}

export default VideoList;