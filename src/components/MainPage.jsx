import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import CardData from "./CardData";
import { Container, Row, Col } from "react-bootstrap";
import './mainPage.css';

const MainPage = () => {
    const results = useFetch('recent-episodes');

    return (
        <div className="main-container">
            <hr className='mx-5 mt-5 hrs'/>
            <div className="d-flex justify-content-center">
                <div className="heading1">
                    <h3>Recent uploads</h3>
                </div>
            </div>
            <hr className='mx-5 hrs'/>
            {results == undefined && <Loading/>}
            <Container>
                <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-3">
                    {results?.results.map(obj => (
                        <Col key={obj.id}>
                            <CardData anime={obj} isRecent={true}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default MainPage;
