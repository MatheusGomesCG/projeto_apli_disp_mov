import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import carrinhoStyles from './CarrinhoStyles';

export interface CarrinhoProps {
  route: {
    params: {
      cartItems: { id: number; name: string; price: number; image: any }[];
      onRemoveItem: (productId: number) => void;
    };
  };
  navigation: any;
}

const Carrinho: React.FC<CarrinhoProps> = ({ route, navigation }) => {
  const { cartItems, onRemoveItem } = route.params;
  const [localCartItems, setLocalCartItems] = useState(cartItems);

  const handleRemoveFromCart = useCallback(
    (productId: number) => {
      onRemoveItem(productId);
      setLocalCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    },
    [onRemoveItem]
  );

  const calculateTotalPrice = () => {
    return localCartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      params: {
        cartItems: localCartItems,
        onRemoveItem: handleRemoveFromCart,
      },
    });
  }, [navigation, localCartItems, handleRemoveFromCart]);

  return (
    <View style={carrinhoStyles.container}>
      <Text style={carrinhoStyles.title}>Itens no Carrinho:</Text>
      <FlatList
        data={localCartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={carrinhoStyles.productItem}>
            <View style={carrinhoStyles.productImageContainer}>
              <Image source={item.image} style={carrinhoStyles.productImage} />
            </View>
            <Text style={carrinhoStyles.productName}>{item.name}</Text>
            <Text style={carrinhoStyles.productPrice}>R${item.price.toFixed(2)}</Text>
            <Button title="Remover do Carrinho" onPress={() => handleRemoveFromCart(item.id)} />
          </View>
        )}
      />
      <Text style={carrinhoStyles.title}>Total: R${calculateTotalPrice()}</Text>
    </View>
  );
};

export default Carrinho;




















