import React,{Component} from 'react';


class SearchBar extends Component{
    constructor(props){
super(props);
this.state={term:''};

}


render(){

    return(
        <div>

        <input value = {this.state.term} onChange={(event)=>this.setState({term:event.target.value})}/>;

            <input type="submit" value="Submit" onClick={(event)=>this.onInputChange(this.state.term)} />

        </div>
        )
}

    onInputChange(term){

       // this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;