import Nav from "./components/Nav";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
    const [id, setId] = useState(0);
    const [session, setSession] = useState();
    const [dataSession, setDataSession] = useState();
    const [seats, setSeats] = useState();
    const [selects, setSelects] = useState([]);
    const [reservation, setReservation] = useState()


    return (

        <BrowserRouter>
            
            <Nav id={id} setId={setId} dataSession={dataSession} setDataSession={setDataSession} />

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
                                                                setId={setId}
                                                                />} />

                <Route path="/sucesso" element={<SuccessPage    dataSession={dataSession} 
                                                                reservation={reservation} 
                                                                selects={selects} 
                                                                setSelects={setSelects}
                                                                />} />
            </Routes>


        </BrowserRouter>

        
    )
}
