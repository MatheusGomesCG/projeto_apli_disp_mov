import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, ImageSourcePropType } from 'react-native';
import styles from './HomeStyles';
import Carrinho from './Carrinho';

interface Product {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
}

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleLogout = () => {
    navigation.navigate('login');
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { id: product.id, name: product.name, price: product.price, image: product.image },
    ]);
    alert(`${product.name} adicionado ao carrinho!`);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleViewCart = () => {
    navigation.navigate('carrinho', { cartItems, onRemoveItem: handleRemoveFromCart });
  };

  const products: Product[] = [
    { id: 1, name: 'Arroz', price: 5.99, image: require('./imagens/arroz.jpeg') },
    { id: 2, name: 'Feijão', price: 3.49, image: require('./imagens/feijao.jpeg') },
    { id: 3, name: 'Macarrão', price: 2.99, image: require('./imagens/macarrao.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Button title="Sair" onPress={handleLogout} />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <View style={styles.productImageContainer}>
              <Image source={item.image} style={styles.productImage} />
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>R${item.price.toFixed(2)}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => handleAddToCart(item)} />
          </View>
        )}
      />
      <Button title="Ver Carrinho" onPress={handleViewCart} />
    </View>
  );
};

export default Home;





