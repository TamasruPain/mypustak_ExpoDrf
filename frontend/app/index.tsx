import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Book } from '../types';
import hostUrl from '../host_url';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${hostUrl}/api/v1/books/`)
      .then(res => res.json())
      .then((data: Book[]) => setBooks(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.heading}>Books List</Text>
      <View style={styles.container}>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cards}
              onPress={() => router.push({ pathname: '/order', params: { id: item.id.toString(), title: item.title } })}>
              <Text style={styles.cardsTitle}>
                {item.title}
              </Text>
              <Text style={styles.cardsAuthor}>
                by {item.author}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    marginTop: 20,
    borderColor: "black",
    borderWidth: 1,
    height:'90%',
    padding: 30,
    borderRadius: 10
  },
  cards: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  },
  cardsTitle: {
    fontSize: 18,
    marginVertical: 10,
    color: 'blue'
  },
  cardsAuthor: {
    fontSize: 16,
    color: 'gray'
  }

})