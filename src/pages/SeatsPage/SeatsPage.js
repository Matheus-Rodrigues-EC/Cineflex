import styled from "styled-components";
import Seats from "../../components/Seats";

export default function SeatsPage(props) {

    const { seats, session, dataSession } = props;

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <Seats session={session} seats={seats} dataSession={dataSession} />


        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`