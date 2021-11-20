import React from "react";
import { Card } from "react-bootstrap";



class CardServicios extends React.Component {
    render(props) { 
        return (
            <div>
            <Card className="cards border-dark mt-5 mb-5 rounded-2" style={{ width: '22rem', height: '18rem', margin: ' 10px auto' }}>                
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