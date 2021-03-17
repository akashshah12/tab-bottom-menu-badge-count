import React from 'react';
import { FlatList } from 'react-native';
//import {addProductToCart} from '../reuse/AddToCart';

export default class ProductListing extends React.Component {
  
  _keyProductExtractor = (item, index) => item.id;

  addToCart(item) {
		let variant={
			Id:item.VariationId,
			VariantPrice:item.price,
			Name:item.VariantName,
			sku:item.sku
		}
		let cartObject=addProductToCart(variant,item).then(value=>{//addProductToCart is a method which stores item to async storage
			//this.props.navigation.navigate('Cart');
			EventRegister.emit('cartBadgeCounter', null); // call event which declared in BadgeCounter.js file
		});

  _renderItem = ({item}) => {
		return (
			<ProductGridItem
				key={item.id}
				addToCart={this.addToCart.bind(this)}
				item={item}
				style={{marginHorizontal: 2, flex: 0.5, maxWidth: (width/2)}}
				{...this.props}
			/>
		)
	}

  render() {
		return (
        <FlatList 
							key={'grid'}
							data={this.state.products}
							extraData={this.state}
							keyExtractor={this._keyProductExtractor}
							renderItem={this._renderItem}
							numColumns={2}
							contentContainerStyle={{flex: 1}}
							//bounces={false}
							onEndReachedThreshold={0.1}
							onEndReached={this.handleLoadMore}
							ListHeaderComponent={this.renderHeader}
							ListFooterComponent={this.renderFooter}
							//onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
							contentContainerStyle={{
								flexGrow: 1,
								}}
						/>
      )
  }
}
