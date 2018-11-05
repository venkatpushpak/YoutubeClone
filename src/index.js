import ReactDom from 'react-dom';
import React,{Component} from 'react';
import SearchBar from './components/search_bar';
import VideoDetail from'./components/video_detail';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY='add your own api key here';
class App extends Component{
    constructor(props){
        super(props);
        this.state={videos:[],selectedVideo:null};

        this.videoSearch('game of thrones');

    }
videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=> {
        this.setState({videos:videos,selectedVideo:videos[0]});

        //the above line can written as this.setState({videos}); when both key and value names are same
    });

}
    render(){

        return(

            <div>

                <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                //this is passed as a property to VideoList
                videos={this.state.videos}

            />

            </div>


        );
    }
}

ReactDom.render(<App/>,document.querySelector('.container'));
