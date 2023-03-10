import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Back from "./assets/back.png"

export default function App() {
    const [id, setId] = useState(0);
    const [session, setSession] = useState();
    const [dataSession, setDataSession] = useState();
    const [seats, setSeats] = useState();
    const [selects, setSelects] = useState([]);
    const [reservation, setReservation] = useState()
    
    function CleanId(){
        // if(session === undefined){
            const zerar = 0;
            setId(zerar);
        // }
    }

    return (

        <BrowserRouter>
            <NavContainer>
                <Link to={ `/`} onClick={() => {CleanId()}} data-test="go-home-header-btn" >
                {/* (id > 0) ? `/sessoes/${id}` : */}
                    <Arrow src={Back} alt="Back" id={id} seats={seats} />
                </Link>
                CINEFLEX
            </NavContainer>

            <Routes>
                <Route path="/" element={<HomePage id={id} setId={setId} />} />
                <Route path={`/sessoes/${id}`} element={<SessionsPage 
                                                                    id={id} 
                                                                    session={session} 
                                                                    setSession={setSession} 
                                                                    setDataSession={setDataSession} 
                                                                    seats={seats} 
                                                                    setSeats={setSeats} 
                                                                    />} />
                <Route path={`/assentos/${seats}`} element={<SeatsPage 
                                                                session={session} 
                                                                seats={seats} 
                                                                setSeats={setSeats} 
                                                                dataSession={dataSession} 
                                                                setReservation={setReservation}
                                                                selects={selects}
                                                                setSelects={setSelects}
                                                                />} />

                <Route path="/sucesso" element={<SuccessPage dataSession={dataSession}  reservation={reservation} selects={selects} setSelects={setSelects} />} />
            </Routes>


        </BrowserRouter>

        
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
const Arrow = styled.img`
    display: ${(props) => 
        (props.id > 0) ? "block" : "none"
    };
    width: 50px;
    position: absolute;
    left: 15px;
    top: 10px;
    
`