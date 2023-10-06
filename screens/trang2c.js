import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput, Checkbox } from "react-native-paper";

export default function trang2c() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialSymbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let characters = "";
    if (includeLowerCase) {
      characters += lowerCaseLetters;
    }
    if (includeUpperCase) {
      characters += upperCaseLetters;
    }
    if (includeNumbers) {
      characters += numbers;
    }
    if (includeSpecialSymbols) {
      characters += specialSymbols;
    }
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  const handleGeneratePassword = () => {
    const password = generatePassword();
    setGeneratedPassword(password);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>
            PASSWORD{" "}
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>
            GENERATOR
          </Text>
        </View>
        <View style={styles.view_box}>
          <Text
            style={{ height: 55, width: 315, backgroundColor: "#151537" }}
          ></Text>
        </View>
        {/* <View style = {{flex:5, flexDirection:"column"}}>
                    <View style = {{flex:1, flexDirection:"row", padding: 10}}>
                        <Text>Password length</Text>
                        
                    </View>
                    <View style = {{flex:1, flexDirection:"row"}}>
                        <View style ={{justifyContent:"center"}}> <Text>Include lower case letters</Text></View>
                        <View style ={{justifyContent:"center"}}><CheckBox style = {{height: 25, width: 25}}></CheckBox></View>
                        
                        
                    </View>
                    <View style = {{flex:1, flexDirection:"row"}}>
                        <Text>Include upcase letters</Text>
                        <CheckBox style = {{height: 25, width: 25}}></CheckBox>
                    </View>
                    <View style = {{flex:1, flexDirection:"row"}}>
                        <Text>Include number</Text>
                        <CheckBox style = {{height: 25, width: 25}}></CheckBox>
                    </View>
                    <View style = {{flex:1, flexDirection:"row"}}>
                        <Text>Include special symbol</Text>
                        <CheckBox style = {{height: 25, width: 25}}></CheckBox>
                    </View> 
                </View> */}
        <View style={{ flex: 5, flexDirection: "column", marginTop: 30 }}>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text
              style={{
                flex: 1,
                marginRight: 50,
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Password length
            </Text>
            <TextInput
              style={{ height: 30, width: 110, marginLeft: 25 }}
              onChangeText={(text) => setPasswordLength(text)}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Include lower case letters
            </Text>

            <Checkbox
              status={includeLowerCase ? "checked" : "unchecked"}
              onPress={() => setIncludeLowerCase(!includeLowerCase)}
            />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Include upper case letters
            </Text>
            <Checkbox
              status={includeUpperCase ? "checked" : "unchecked"}
              onPress={() => setIncludeUpperCase(!includeUpperCase)}
            />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Include numbers
            </Text>
            <Checkbox
              status={includeNumbers ? "checked" : "unchecked"}
              onPress={() => setIncludeNumbers(!includeNumbers)}
            />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Include special symbols
            </Text>
            <Checkbox
              status={includeSpecialSymbols ? "checked" : "unchecked"}
              onPress={() => setIncludeSpecialSymbols(!includeSpecialSymbols)}
            />
          </View>
        </View>
        {generatedPassword !== "" && (
          <View style={styles.generatedPasswordContainer}>
            <Text style={{color:"red", fontSize:16}}>Generated Password:</Text>
            <Text style={{color: "#fff", fontWeight:"bold", fontSize:14}}>{generatedPassword}</Text>
          </View>
        )}
        <View style={styles.view_button}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 315,
              backgroundColor: "#3B3B98",
              border: "2px solid blue",
            }}
            onPress={handleGeneratePassword}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                textAlign: "center",
                color: "#fff",
                marginTop: 5,
              }}
            >
              GENERATE PASSWORD
            </Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9696c2",
    flex: 1,
    alignItems: "center",
  },
  container1: {
    height: "95%",
    width: "90%",
    backgroundColor: "#23235B",
    margin: "auto",
    borderRadius: "15px",
    alignItems: "center",
    justifyContent: "space-around",
  },
  generatedPasswordContainer:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-around",
  },
  view_box: {
    flex: 1,
    marginTop: 30,
  },
  view_button: {
    flex: 1,
  },
  style_checkbox: {
    marginBottom: 100,
  },
});
