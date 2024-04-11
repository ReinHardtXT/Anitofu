import { Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Loading from "./Loading"
import CardData from "./CardData"
import './genre.css'
const Genre = () => 
{
    const {genreID} = useParams()
    const results = useFetch('genre/'+genreID)

    return (
        <div className="p-4">
        <hr className='mx-5 mt-5 hrs'/>
        <Container className="d-flex justify-content-center">
        <div className="Heading5">
                    <h3 className="meow">{genreID} series</h3>
                    </div>
        </Container>
        <hr className='mx-5 hrs'/>
        {results==undefined && <Loading/>}
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3">
            {results?.results.map(obj=><CardData key={obj.id} anime={obj} isRecent={false}/>)}
        </Row>
    </div>
    )
}

export default Genre