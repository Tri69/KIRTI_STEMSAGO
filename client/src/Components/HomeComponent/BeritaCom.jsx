import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import kegiatan from '../../assets/kegiatan.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const BeritaCom = () => {
    const data = [
        {
            title: 'lorem ianna saois OIBKSACA jjba sajsa jkajbs'
        },
        {
            title: 'lorem ianna saois OIBKSACA jjba sajsa jkajbs'
        }, {
            title: 'lorem ianna saois OIBKSACA jjba sajsa jkajbs'
        }
    ]
    return (
        <>
            <Container>
                

                    <Row 
                        xs={2}>
                        <Col>{data.map(datas => (
                            <Card 
                            style={{ width: '18rem' }}>
                                <Card.Img 
                                variant='top'
                                src={kegiatan} />
                                <Card.Body>
                                    <Card.Title>
                                        About Kirti
                                    </Card.Title>
                                    <Card.Text>
                                        {datas.title}
                                    </Card.Text>
                                    <Button 
                                        variant='primary'>
                                        Get Here
                                    </Button>
                                </Card.Body>
                            </Card>))}
                        </Col>
                    </Row>
            </Container>
        </>
    )
}
export default BeritaCom;