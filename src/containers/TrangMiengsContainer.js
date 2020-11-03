import React, {Component} from 'react';
import { connect } from 'react-redux';
import DsTrangMieng from '../components/DsTrangMieng';
import TrangMieng from '../components/TrangMieng';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from '../actions/index';
class TrangMiengsContainer extends Component {
    render() {
        var {trangmiengs} = this.props;
	    return (   
            <DsTrangMieng >
                {this.showProducts(trangmiengs)}
            </DsTrangMieng>
	     );
    }
    showProducts(trangmiengs){
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
            if(trangmiengs.length > 0){
                    result = trangmiengs.map((trangmieng, index) =>{
                            return <TrangMieng 
                            key = {index} 
                            trangmieng={trangmieng}
                            onAddToCart = {onAddToCart}
                            onChangeMessage = {onChangeMessage}
                            />
                });
            }     
        return result;
    }
}

TrangMiengsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStatetoProps = state => {
    return {
        trangmiengs : state.trangmiengs //gọi products từ reducers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (trangmieng) => {
            dispatch(actAddToCart(trangmieng,1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(TrangMiengsContainer);