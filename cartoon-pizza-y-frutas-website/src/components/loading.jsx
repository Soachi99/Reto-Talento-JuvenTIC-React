import React from "react";
import PizzaCarga from "../js/load";

class Cargando extends React.Component {
    componentDidMount(){
        PizzaCarga();
    }

    render(props) {
        if(this.props.isOpen === true)
        {
            return (
                <>
                    <canvas className="d-block mx-auto" id="pizza"></canvas>
                </>
            );
        }
        else{
            return (
                <>
                </>
            );
        }
        
    }
}

export default Cargando;