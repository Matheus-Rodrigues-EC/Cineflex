import styled from "styled-components"
import Sucess from "../../components/Succes"

export default function SuccessPage(props) {

    const { dataSession, reservation, selects, setSelects } = props;

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>
            <Sucess dataSession={dataSession} reservation={reservation} selects={selects} setSelects={setSelects} />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    
    h1 {
        color: #247A6B;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
    a{
        text-decoration: none;
    }
    button{
        margin-top: 50px;
    }
`
