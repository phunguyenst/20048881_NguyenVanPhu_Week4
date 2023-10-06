import {StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'




export default function App(){
    return(
        <View style = {styles.container}>
           <View style= {styles.view_image}>
                <Image
                 style = {styles.image_usb} 
                 source={require('../assets/usb.jpg')}  
                ></Image>
                <View style = {styles.view_text}>
                <Text style={styles.text_usb}>
                    USB Bluetooth Music Receiver
                </Text>
                <Text style = {styles.text_title}>
                HJX-001 - Biến loa thường thành loa bluetooth
                </Text>
                  
                </View>
               
           </View>
            <View style = {styles.view_evaluate}>
                <Text style= {{fontSize:18, fontWeight:"bold"}}>Cực kỳ hài lòng</Text>
                <View style ={styles.view_star}>
                    <Image
                        style = {styles.image_star}
                        source={require('../assets/star.jpg')}
                    >
                    </Image>
                    <Image
                        style = {styles.image_star}
                        source={require('../assets/star.jpg')}
                    >
                    </Image>
                    <Image
                        style = {styles.image_star}
                        source={require('../assets/star.jpg')}
                    >
                    </Image>
                    <Image
                        style = {styles.image_star}
                        source={require('../assets/star.jpg')}
                    >
                    </Image>
                    <Image
                        style = {styles.image_star}
                        source={require('../assets/star.jpg')}
                    >
                    </Image>
                </View>
                <View style = {styles.view_addImage}>
                    <TextInput
                       
                        left ={
                            <TextInput.Icon
                            color="black"
                            icon="camera"
                            size="30px"
                            style = {{margin:"10px"}}
                            />
                        }
                        style = {styles.text_addImage}
                        placeholder='Thêm hình ảnh'
                    >


                    </TextInput>
                </View>
                <View style = {styles.view_textArea}>
                    <TextInput
                        multiline ={true}
                        numberOfLines={7}
                        placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm'
                        style = {styles.text_area}
                    />
                </View>
            </View>
            <View style = {{flex:1, alignItems: "center", marginBottom:"20px", justifyContent: "flex-end"}}>
                <TouchableOpacity style= {{width:300, height:40, borderRadius: "5px", backgroundColor: "#0D5DB6"}}>
                    <Text style = {{color:"#fff", fontSize: "20px", fontWeight: "bold", alignItems:"center", textAlign:"center", margin:"auto"}}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
       
    },
    view_image:{
        flex:1,
        flexDirection:"row",
        margin:20,
        justifyContent:"center",
        alignItems:"center",
        padding: 20,
    },

    view_text:{
        flex:1,

    },
    view_evaluate:{
        flex:3,
        alignItems:"center",
        justifyContent:"center",
       flexDirection:"column",
       
        

    },
    view_star:{
        marginVertical: 8,
        flexDirection:"row",
       
    },
    view_addImage:{
        marginVertical: 8,

    },
    view_textArea:{
        marginVertical: 8,
    },
    image_usb:{
        height:100,
        width:100,

    },
    text_usb:{
        fontSize:16,
        fontWeight:'bold',
    },
    text_title:{
        fontSize:14,
        fontWeight:'bold',
    },
    image_star:{
        height:40,
        width:40,
        margin:8
    },
    text_addImage:{
        margin:10,
        border: "2px solid blue",
        width:300
        
    },
    text_area:{
        height:210,
        width:300
    }
})