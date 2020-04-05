import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';
import cardImage1 from '../../resource/Image/adult-blur-blurred-background-687824.png';
import cardImage2 from '../../resource/Image/chef-cook-food-33614.png'
import cardImage3 from '../../resource/Image/architecture-building-city-2047397.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'


const MarketingSection = () => {

    const centering = {
        color: 'white',
        position: 'absolute',
        top: "50%",
        left: '50%',
        transform: 'translate(-50%,-50%)'

    }

    return (
        <div>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={cardImage1} />
                    <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <div style={{ display: 'flex' }}>
                            <span style={{ marginRight: 20, width: 20, height: 20, background: 'red', borderRadius: '50%', padding: 20, position: "relative" }}><FontAwesomeIcon icon={faBus} style={centering} /></span>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
        </Card.Text>
                        </div>

                        <p className="text-primary" style={{ textAlign: 'left', padding: 0, marginTop: 30 }}>See More </p>

                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <Card.Img variant="top" src={cardImage2} />
                    <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <div style={{ display: 'flex' }}>
                            <span style={{ marginRight: 20, width: 20, height: 20, background: 'red', borderRadius: '50%', padding: 20, position: "relative" }}><FontAwesomeIcon icon={faBus} style={centering} /></span>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
        </Card.Text>
                        </div>

                        <p className="text-primary" style={{ textAlign: 'left', padding: 0, marginTop: 30 }}>See More </p>

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={cardImage3} />
                    <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <div style={{ display: 'flex' }}>
                            <span style={{ marginRight: 20, width: 20, height: 20, background: 'red', borderRadius: '50%', padding: 20, position: "relative" }}><FontAwesomeIcon icon={faBus} style={centering} /></span>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
        </Card.Text>
                        </div>

                        <p className="text-primary" style={{ textAlign: 'left', padding: 0, marginTop: 30 }}>See More </p>

                    </Card.Body>

                </Card>
            </CardColumns>
        </div>

    )
};

export default MarketingSection;