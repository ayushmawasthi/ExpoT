import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
    
   
    return (
    <View style={styles.header}>
        <Text style={styles.title}>
            My Todos
        </Text>
    </View>  
    );
  }

  const styles = StyleSheet.create({
      header:{
          height: 80,
          padding: 38,
          backgroundColor: 'BAE02A',
      },
      title:{
          textAlign: 'center',
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
      }


  });