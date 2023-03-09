import styled from "styled-components";
import Session from "../../components/Session";

export default function SessionsPage(props) {

    const { id, session, setSession, setSeats, setDataSession } = props;

    return (
        <PageContainer>
            Selecione o horário
            <Session id={id} session={session} setSession={setSession} setDataSession={setDataSession} setSeats={setSeats} />

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`