import { Container, Row } from "react-bootstrap"
import useFetch from "../hooks/useFetch"
import Loading from "./Loading"
import './genres.css'
const Genres = () => 
{
    const list = useFetch('genre/list')
    return (
        <div className="p-4">
            <hr className='mx-5 mt-5 hrs'/>
            <Container className="d-flex justify-content-center">
            <div className="heading3">
                    <h3>Choose your Genre</h3>
                    </div>
            </Container>
            <hr className='mx-5 hrs'/>
            {list == undefined && <Loading/>}
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
            {list?.map(gen => 
            <div className="text-black" key={gen.id}>
                ● <a className="genres" href={`/genres/${gen.id}`}>{gen.title}</a>
            </div>)}
            </Row>
        </div>
    )
}

export default Genres