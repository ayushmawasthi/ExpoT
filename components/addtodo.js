import React,{useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
export default function AddTodo({submitHandler}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);

    };
    return (
        <View>
        <TextInput
        style={styles.input}
        placeholder='add new task..'
        onChangeText={changeHandler}
        value={text}
        
        />
        <Button
        onPress={()=>submitHandler(text)} title='Add Task to th list'
        color='BAE02A'
        />
        </View>
    )
}
const styles=StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});