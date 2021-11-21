import React from "react";
import { Card } from "react-bootstrap";



class CardServicios extends React.Component {
    render(props) {
        return (
            <div>
                <Card className="cards border-light mt-5 mb-5" style={{ width: '22rem', height: '20rem', margin: ' 15px auto' }}>
                    <Card.Body className="body rounded-2" style={{ padding: '15px 15px', textAlign: 'center' }}>
                        <div className="front">
                            <Card.Title className="text-center fs-3 mt-4 text-black fw-bold">{this.props.titulo}</Card.Title>
                            <Card.Text className="text-center fs-5 text-black">
                                {this.props.texto}
                            </Card.Text>
                        </div>
                        <div className="back">
                            <Card.Title className="titulo-back text-center fs-3 text-light fw-bold">{this.props.titulo}</Card.Title>
                            <Card.Text className="text-center fs-5 ms-2 me-2 text-light">
                                {this.props.texto}
                            </Card.Text>
                        </div>


                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardServicios;