import React,{ useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Nav from './src/nav';
import Generate from './src/generate';
import ListItems from './src/listItems';

const App = () => {
  const[hello,sethello]=useState(true);
  const[random,setrandom]=useState([20,30]);


  useEffect(()=>{
    setTimeout(()=>{
      sethello(false)
    },2000)
  },[])

 onAddRandom = () => {
  const randomVal = Math.floor(Math.random()*100)+1;
  const newState = [...random,randomVal];
  setrandom(newState);

 }

  return(
    <View style={styles.mainView}>
      <Nav nameofApp='Awesome'/>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>First line text</Text>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>second line text</Text>
      </View>
       {/* {hello?
       <Text>Hello Everybody</Text> 
       :null} */}
       <View>
        <Generate add = {() => onAddRandom()}/>
       </View>
       <View>
        <ListItems items={random} />
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
        flex:1,
        alignsItems: 'flex-start',
        paddingTop: 50,
        justifyContent: 'flex-start',

  },
  basicView: {
    backgroundColor: 'green',
    width:'100%',
    marginBottom: 5,
  },
  basicText:{
    fontSize:20,
    textAlign:'center',
    color:'#ffffff',
    
  }


})
export default App;