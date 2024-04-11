import { useId } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './CardData.css'; // Import CSS file

const CardData = ({ anime, isRecent }) => {
    const navigate = useNavigate()
    const ID = useId()

    const watch = () => {
        const target = document.getElementById(ID)
        localStorage.removeItem('watching')
        localStorage.setItem('watching', target.childNodes[1].childNodes[0].value)
        navigate("/watch/" + anime.episodeId)
    }

    const info = () => {
        const target = document.getElementById(ID)
        localStorage.removeItem('watching')
        localStorage.setItem('watching', target.childNodes[1].childNodes[0].value)
        navigate("/info/" + anime.id)
        window.location.reload()
    }

    return (
        <>
            {
                isRecent
                    ?
                    <Col>
                        <Card
                            id={ID}
                            onClick={watch}
                            className='h-100 p-2 cards rare-wind-gradient border-light custom-card' // Use custom-card class
                        >
                            <Card.Img width={'100px'} src={anime.image} alt={anime.title} />
                            <Card.ImgOverlay>
                                <Button className='epNumber' value={anime.id} variant='warning'>
                                    {anime.episodeNumber || anime.releaseDate}
                                </Button>
                            </Card.ImgOverlay>
                            <Card.Footer>
                                <Card.Title className='text-center fs-6 text-truncate'>{anime.title}</Card.Title>
                            </Card.Footer>
                        </Card>
                    </Col>
                    :
                    <Col>
                        <Card
                            id={ID}
                            onClick={info}
                            className='cards h-100 p-2 border-light custom-card' // Use custom-card class
                        >
                            <Card.Img width={'100px'} src={anime.image} alt={anime.title} />
                            <Card.ImgOverlay>
                                <Button className='epNumber' value={anime.id} variant='warning'>
                                    {anime.subOrDub || anime.released || 'TOP'}
                                </Button>
                            </Card.ImgOverlay>
                            <Card.Footer>
                                <Card.Title className='text-center fs-6 text-truncate'>{anime.title}</Card.Title>
                                <Card.Text className='text-center'>{anime.releaseDate}</Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
            }
        </>
    )
}

export default CardData;
