import React, {Component} from 'react';
import { connect } from 'react-redux';
import DsDoUong from '../components/DsDoUong';
import DoUong from '../components/DoUong';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from '../actions/index';
class DoUongsContainer extends Component {
    render() {
        var {douongs} = this.props;
	    return (   
            <DsDoUong >
                {this.showProducts(douongs)}
            </DsDoUong>
	     );
    }
    showProducts(douongs){
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
            if(douongs.length > 0){
                    result = douongs.map((douong, index) =>{
                            return <DoUong 
                            key = {index} 
                            douong={douong}
                            onAddToCart = {onAddToCart}
                            onChangeMessage = {onChangeMessage}
                            />
                });
            }     
        return result;
    }
}

DoUongsContainer.propTypes = {
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
        douongs : state.douongs //gọi douongs từ reducers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (douong) => {
            dispatch(actAddToCart(douong,1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(DoUongsContainer);