import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
// import { Entypo ,FontAwesome} from "@expo/vector-icons";
import React ,{ useState} from "react";
import { useNavigation } from "@react-navigation/native";


export default function trang2a() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () =>{
    const userFound  = users.find((user)=>{
      return user.username === username && user.password === password;
    });
    if(userFound){
      console.log(username);
      console.log(password);
      window.alert("đăng nhập thành công");
      navigation.navigate("screen2")
    }
    else{
      console.log("bị sai"+username);
      console.log("bị sai"+password);
      window.alert("sai username hoặc password")
    }
  };
  const handleForget = ()=>{
    navigation.navigate("screen3")
  }
  const users = [
    {
      username : "van phu",
      password :"123"
    },
    {
      username: "vanquy",
      password :"123"
    }
  ]
  return (

    <View style={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.view_header}>
        <Text style={styles.text_header}>LOGIN</Text>
        
      </View>
        <View style={styles.view_input}>
        <TextInput style={styles.input} placeholder="Name"
          activeUnderlineColor="none"
          underlineColor="none"
          value={username}
          onChangeText={(text) => setUsername(text)}
        left ={
            <TextInput.Icon
            color="black"
            icon="account"
            size="34px"/>
        }
      
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        activeUnderlineColor="none"
        underlineColor="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
        left = {
            <TextInput.Icon
            color="black"
            icon="lock"
            size="34px"/>
        }
        right={
          <TextInput.Icon
            color="black"
            icon="eye"
            size="36px"
            style={{ marginTop: "10px" }}
          />
        }
      />
        </View>
  
      <View style={styles.view_all_button}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text_button}>Login</Text>
      </TouchableOpacity>
        
      </View>
       <View style={styles.view_textPrivate}>
            <Text style={styles.p_text } onPress={handleForget}>Forgot your password</Text>
       </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f7c801",
    justifyContent:"space-around"
  },
  view_header:{
    flex:1,
    justifyContent:"center",
    
  },
  view_textPrivate:{
    flex:1,
    justifyContent:"flex-start",
    marginBottom:50,
  },
    view_input:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
  view_all_button:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",

  },
  textPrivate:{
    flex:1,
   
    alignItems:"center",
    textAlign:"center",
    margin:20,
    padding:20,
  },
  p_text:{
    fontSize:22,
    fontWeight:"bold",
    textAlign:"center",
  },
  text_header:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"left",
    marginLeft:50,
  },
  button:{
    
    width:350,
    height:50,
    backgroundColor:"#000000",
    borderRadius:10,
    marginTop:50,
 
  },
  text_button:{
    fontSize:20,
    fontWeight:"bold",
    color:"#fff",
    textAlign:"center"
  },
  input:{
    width:350,
    height:50,
    borderRadius:10,
    backgroundColor:"#FBCB00",
    marginTop:20,
    paddingLeft:10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
  },
  
});
