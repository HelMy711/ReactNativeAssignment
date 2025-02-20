import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

export default function App() {
const [value, Setvalue] = useState(0);
const [tries, Settries] = useState(0);
const [randomNumber,SetrandomNumber]=useState(Math.floor(Math.random() * 100));
const [perfect,SetPerfect] = useState(false)
const [higher,Sethigher] = useState(false)
const [lower,Setlower] = useState(false)
function reset(){
  console.log(randomNumber);
  SetrandomNumber( Math.floor(Math.random() * 100));
  Setvalue(randomNumber)
  Settries(0)
  SetPerfect(false)
  Sethigher(false)
  Setlower(false)
}
function  Setries(){
  Settries(tries+1)
}
function check (){
  console.log(randomNumber)
    Setries()
    if (randomNumber==value)
      {
        SetPerfect(true)
        Sethigher(false)
        Setlower(false)
      }
      else if (randomNumber>value){
        Sethigher(true)
        Setlower(false)
        SetPerfect(false)
      }
      else if (randomNumber<value){
        Setlower(true)
        SetPerfect(false)
        Sethigher(false)
      }
}  
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="dark" />
      <View style={styles.header}>
      <Text style={{color:'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 21,
      }}>Enter Your Guess Between 0 and 99</Text>
      <TextInput style={styles.input}
              placeholder="write here..."
              placeholderTextColor="brown"
              keyboardType='numeric'
              onChangeText={(text) => {
                console.log(text);
                Setvalue(text);
              }}
      > </TextInput>
      <FontAwesome.Button style={{height:'62', }}name="play" backgroundColor="#3b5998"  onPress={check } >
        Check   
      </FontAwesome.Button>
      </View>
      <View style={{backgroundColor:'#25FFFD'}}>
        <Text  style={{color:'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 21,
        paddingTop: 0,
        paddingBottom: 20,
        marginBottom: 5,
        marginTop: 10,
      }}>Your Number Of Guesses ::: {tries}</Text>
      </View>
      <View style={{backgroundColor:'#FDFF11',alignItems:'center',justifyItems:'flex-start'}}>
        <Text style={{color:'black',
  
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: '70',
        paddingBottom: '200',
      }}
        >
    {perfect 
      ? `Impressive! Spot on! with ${tries} tries` 
    : lower ? "Too high! Try going lower." 
    : higher? " Aim a little higher." 
      : "Give it another shot!"}     </Text>
      </View>
      <View style={{
       backgroundColor:"#3b5998"
      ,paddingTop:10, 
      paddingBottom:60,
      justifyContent: 'center'
      ,paddingLeft:30,
      paddingRight:30,
      alignItems: 'center'
 
      }}>
      <FontAwesome.Button style={{ }} name="rotate-right" onPress={reset} >
        reset   
      </FontAwesome.Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:'15'

  },
  header: {
    backgroundColor: '#FF00FE',
    borderRadius: 5,
     heigth:'',
      width:'',
      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'row',
      flexWrap:'wrap',    
      paddingTop: '30%',
      paddingBottom: '30%',

  },
  input: {
    backgroundColor:'#2BFCFC',
    width: '70%',
    height: '20px',
    fontSize: 30,
    paddingHorizontal: 0,
    marginVertical: 10,
  }
});
