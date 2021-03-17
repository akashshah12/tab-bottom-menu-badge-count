import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import { EventRegister } from 'react-native-event-listeners'
//import {addProductToCart} from '../reuse/AddToCart';

export default class BadgeCounter extends React.Component {

    state = {
        cartCount: 0
    }
    componentDidMount() {
        this.getCart();
        this.listener = EventRegister.addEventListener('cartBadgeCounter', (count) => {
            if (count == null) {
                this.getCart();
            }
            else {
                this.setState({ cartCount: count })
            }
        })
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }

    getCart() {
        getCartCount().then(value => { //getCartCount() is model's async storage method which returns items added to cart.
            let cartcnt = 0;
            if (value != null) {
                value.map(cart => { cartcnt = cartcnt + cart.qty; return cart; })
                this.setState({ cartCount: cartcnt })
            }
        })
    }


    render() {
        return (

            <View>
              <Icon name={this.props.name} size={22} color={'#000'} style={{marginBottom: 0, marginLeft:0 }} />
                    {
                        this.state.cartCount>0 ? 
                            <View style={{
                                position: 'absolute', 
                                top: -2, 
                                right: -5, 
                                backgroundColor: 'red', 
                                borderRadius: 9, 
                                height: 18, 
                                width: 18, 
                                alignItems: 'center', 
                                justifyContent: 'center'
                            }}>
                                <SupSm style={{color: '#000'}}>{this.state.cartCount}</SupSm>
                            </View> : 
                        null
                    }
            </View>

        )

    }

}

