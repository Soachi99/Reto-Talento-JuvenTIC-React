import React from "react";
import { Card } from "react-bootstrap";



class CardServicios extends React.Component {
    render(props) { 
        return (
            <div>
            <Card className="cards bg-transparent border-dark mt-5 mb-5 rounded-2 shadow" style={{ width: '22rem', height: '38rem', margin: ' 10px auto' }}>
                <Card.Img variant="top" src={this.props.imagen} />
                <Card.Body>
                    <Card.Title className="text-center fs-3 mt-3 text-black fw-bold">{this.props.titulo}</Card.Title>
                    <Card.Text className="text-center fs-5 text-black">
                        {this.props.texto}
                    </Card.Text>                   
                </Card.Body>
            </Card>
        </div>
        );
    }
}
 
export default CardServicios;