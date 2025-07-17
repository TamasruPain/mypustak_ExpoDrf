import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import hostUrl from '../host_url';

export default function Order() {
  const { id, title } = useLocalSearchParams();
  const [name, setName] = useState('');
  const router = useRouter();

  const placeOrder = () => {
    fetch(`${hostUrl}/api/v1/order/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        book_id: id,
        customer_name: name
      })
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert("Success", data.message);
        router.back();
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.orderTitle}>Order: {title}</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Place Order" onPress={placeOrder} />
    </View>
  );
}


const styles = StyleSheet.create(
  {
    container: {
      padding: 20
    },
    orderTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    input: {
      borderWidth: 1,
      marginVertical: 10,
      padding: 10
    }
  }
)