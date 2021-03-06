import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';


class Series extends Component {
    
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
    
    componentDidMount() {
    
    }

    onSeriesInputChange = e => {
        this.setState({ seriesName : e.target.value, isFetching: true });
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then(json => this.setState({ series: json , isFetching: false }))
        console.log(e);
        console.log(e.target.value);
    }

    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div> 
                <Intro message="Here u can find all of your loved series" />
                the length of series array: {this.state.series.length}<br /><br />
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
                </div>    
                { series.length === 0  && seriesName.trim() === '' 
                    && <p>Please enter series into the input</p>
                }

                { series.length === 0 && seriesName.trim() !== ''
                    && <p>No TV series have been found with this name</p> 
                }
                
                { isFetching && <Loader /> }
                
                { !isFetching && <SeriesList list ={this.state.series} /> }

                
            </div>
        )
    }
}

export default Series;