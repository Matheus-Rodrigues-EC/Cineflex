import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import Back from "./../assets/back.png"

export default function Nav(props){

    const {id, setId, dataSession, setDataSession } = props;
    const Navigator = useNavigate();

    function BackArrow(){
        if(dataSession === undefined){
            const zerar = 0;
            setId(zerar);
            Navigator('/');
        }else{
            Navigator(`/sessoes/${id}`);
            setDataSession(undefined);
        }
    }

    return(
        <NavContainer>
            <Arrow onClick={() => BackArrow()} src={Back} alt="Back" id={id}/>
            CINEFLEX
        </NavContainer>
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