import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'


class App extends Component {
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {}

    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie) => {
            console.log(movie)
            return <Movie
                title={movie.title_english}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                synopsis={movie.synopsis}
                key={movie.id}
            />
        })
        return movies
    }

    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }

    render() {
        const {movies} = this.state;
        return (
            <div>
                <div className="Title">Sort by Like Count</div>
                <div className={movies ? "App" : "App--loding"}>
                    {movies ? this._renderMovies() : 'Loading'}
                </div>
            </div>
        );
    }
}

export default App;
