import styled from "styled-components";
import MovieContainer from "../../components/MovieContainer"

export default function HomePage(props) {

    const {id, setId} = props;

    return (
        <PageContainer>
            Selecione o filme
            <MovieContainer id={id} setId={setId} />
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
    padding-top: 70px;
`
