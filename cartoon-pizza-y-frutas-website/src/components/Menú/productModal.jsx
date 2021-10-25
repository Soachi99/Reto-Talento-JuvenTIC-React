import React from "react";

class ProductModal extends React.Component {
    render(props) {
        let style = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
            
        }
        return (

            <>
                <div className="modal show fade" style={style}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold">Detalles {this.props.title}</h5>
                                <button type="button" className="btn-close" onClick={this.props.hide}></button>
                            </div>
                            <div className="modal-body">
                                <img src={process.env.PUBLIC_URL + this.props.img} className="img-fluid rounded mx-auto d-block" alt="modal img"/>
                                <p className="text-center me-5 ms-5 mt-3 ">{this.props.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductModal;