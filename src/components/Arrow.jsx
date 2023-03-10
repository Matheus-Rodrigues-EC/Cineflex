import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import Back from "./../assets/back.png"

export default function Arrow(props){

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
        <Image onClick={() => BackArrow()} src={Back} alt="Back" id={id}/>
    )
}

const Image = styled.img`
    display: ${(props) => 
        (props.id > 0) ? "block" : "none"
    };
    width: 50px;
    position: absolute;
    left: 15px;
    top: 10px;
`