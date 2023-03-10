import styled from "styled-components";
import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Movies(props){

    const api = axios.create();
    const { setId } = props;
    const [movies, setMovies] = useState([]);
    const Navigator = useNavigate();

    useEffect(() => {
        api
            .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((response) => setMovies(response.data))
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    });

    function getMovie(id){
        setId(id);
        // console.log(id);
        Navigator(`/sessoes/${id}`);
    }

    if(movies.length === 0){
        return <h3>Loading...</h3>
    }

    return(

        <ListContainer>
            {
            movies.map((movie) => (
                <MovieContainer key={movie.id} onClick={() => { getMovie(movie.id); }} data-test="movie" >
                    <img src={movie.posterURL} alt={movie.overview} />
                </MovieContainer>
            ))
            }

        </ListContainer>

    )
}

const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`

const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`