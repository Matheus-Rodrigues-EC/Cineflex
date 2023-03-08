import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";


export default function Session(props){

    const api = axios.create();
    const { id, session, setSession } = props;

    useEffect(() => {

        api.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`)
            .then((response) => setSession(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        // console.log(session);
    });

    if(session === undefined) return <h2>Loading...</h2>;

    const Days = session.days;

    return(
        <>
            <SessionContainer>
                {Days.map((dia) => (
                    <>
                    <Infos key={dia.id}>
                        <h2 key={dia.weekday.id}>{dia.weekday} - {dia.date}</h2>
                        <Buttons key={dia.weekday}>
                        {dia.showtimes.map((hora) => (
                            <Button key={dia.showtimes.id}>
                                {hora.name}
                            </Button>
                        ))}
                        </Buttons>
                    {/* 0: {id: 24102021, weekday: 'Domingo', date: '24/10/2021', showtimes: Array(2)} */}
                    </Infos>

                        <FooterContainer>
                            <div>
                                <img src={session.posterURL} alt={session.overview} />
                            </div>
                            <div>
                                <p>{session.title}</p>
                            </div>
                        </FooterContainer>
                    </>
                ))}
                    

                
            </SessionContainer> 

            
        </>
    )

}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 ;
`

const Infos = styled.div`
    display: block;
    margin: 0 20px;
`
const Buttons = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
`
const Button = styled.button`
    display: flex;
    width: 83px;
    height: 43px;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;

    background: #E8833A;
    color: #FFFFFF;
    border-radius: 3px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        p {
            display: inline-flex;
            text-align: left;
            align-items: center;
            justify-content: center;
            
        }
    }
`


// {id: 1, title: 'Zack Snyder Justice League', posterURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg', overview: 'Determined to ensure Superman ultimate sacrifice w…n approaching threat of catastrophic proportions.', releaseDate: '2021-03-18T00:00:00.000Z', …}
// days: Array(8)
    // 0: {id: 24102021, weekday: 'Domingo', date: '24/10/2021', showtimes: Array(2)}
    // 1: {id: 25102021, weekday: 'Segunda-feira', date: '25/10/2021', showtimes: Array(2)}
    // 2: {id: 26102021, weekday: 'Terça-feira', date: '26/10/2021', showtimes: Array(2)}
    // 3: {id: 27102021, weekday: 'Quarta-feira', date: '27/10/2021', showtimes: Array(2)}
    // 4: {id: 28102021, weekday: 'Quinta-feira', date: '28/10/2021', showtimes: Array(2)}
    // 5: {id: 29102021, weekday: 'Sexta-feira', date: '29/10/2021', showtimes: Array(2)}
    // 6: {id: 30102021, weekday: 'Sábado', date: '30/10/2021', showtimes: Array(2)}
    // 7: {id: 31102021, weekday: 'Domingo', date: '31/10/2021', showtimes: Array(2)}
// length: 8
// [[Prototype]]: Array(0)
// id: 1
// overview: "Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
// posterURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
// releaseDate: "2021-03-18T00:00:00.000Z"
// title: "Zack Snyder Justice League"
