import {StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'



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
                <Text>Cực kỳ hài lòng</Text>
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
        flex:5,
        alignItems:"center",
        justifyContent:"center"

    },
    view_star:{
        flex:1,
        flexDirection:"row",
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
        height:25,
        width:25,
    },  
})