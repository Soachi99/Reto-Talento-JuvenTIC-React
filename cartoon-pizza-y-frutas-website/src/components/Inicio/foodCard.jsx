import React from "react";
import { Card } from "react-bootstrap";

class foodCard extends React.Component {
    render(props) {
        return (
            <>
                <Card className="card shadow" style={{ width: '20rem', margin: ' 10px auto' }}>
                    <Card.Img variant="top" src={this.props.imagen} />
                    <Card.Body>
                        <Card.Title className="text-center fs-5 fw-bold">{this.props.titulo}</Card.Title>                        
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default foodCard;