import React, {Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed-episode`)
        .then((response) => response.json())
        .then(json => this.setState({ show:json }))
    }

    render() {
        const { show } = this.state;
        console.log(show);

        return (
            <div>
                { show === null && <Loader />}
                {
                    show !== null && 
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p><img alt="Show" src={show.image.medium} /></p>
                    </div>
                }
                <p>the show id is ... {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default SingleSeries;