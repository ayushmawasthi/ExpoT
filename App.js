import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';

export default function App() {
  const [todos,setTodos]=useState([
    {text: 'Go to College',key:'1'},
    {text: 'Go to Class',key:'2'},
    {text: 'Go to Laboratory',key:'3'}
  ]);
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key);
    });
  };
  const submitHandler=(text)=>{
    if(text.length >3)
    {
    setTodos((prevTodos)=>{
      return [
        {text: text,key: Math.random().toString()},
        ...prevTodos
      ];

    });
    }
    else{
      Alert.alert('Too Small', 'Please try to maintain some big tasks', [
        {text: 'Okay', onPress: () => console.log('alert closed') }
      ]);
    }
  
  };

 
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View  styles={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}/>

          )}
          />
        </View>
      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  items:{
    marginTop: 24,
    padding: 30,
    backgroundColor: '#B7E02A',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
  content:{
    padding:40,
  },
  list:{
    marginTop: 20,
  }
  
 
 
});
