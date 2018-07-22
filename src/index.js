//one component - per file!
//produces html
//handle components
import React, {Component} from 'react';
//handle react dom create
import ReactDOM from 'react-dom';
import TYSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
//es6 const - same as var but const = final values
//not gone reasign app 


const API_KEY = 'AIzaSyBNzke8UOehBPmDMjfZKKRtYPbis3OG7Hk';



//function component - return jsx only
//we use class component due the use of state
class App extends Component {
    //html - jsx = js + html = html
    constructor(props){
        super(props);
        this.state = { videos: [], 
                       selectedVideo: null };
        TYSearch({key: API_KEY, term:'surfboards'}, (data)=>{
            console.log(data);
            this.setState({videos:data, 
                           selectedVideo:data[0]
            }); // es6 // this.setState({videos:videos})
            
        })
    }
    //videos={this.state.videos} passdata into child components via state
    //component render function dont wait for a-sync actions it tries to render itself
    render(){
        return (<div>
            <SearchBar />
            
            <VideoDetails video= {this.state.videos[0]}/>
            
            <VideoList 
                onVideoSelect = {selectdVideo => this.setState({selectedVideo})}    
                videos={this.state.videos}
             /> 
        
            
        </div>);
    }
    
}
//put in dom generated html
//ReactDOM.render takes instance of a class 
//takes 2 args a instance and a html exsiting component to put it to
ReactDOM.render(<App />, document.querySelector('.container'));
//downards data flow
//only the parent should handle data