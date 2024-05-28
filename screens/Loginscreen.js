import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as AppAuth from "expo-app-auth"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Loginscreen = () => {
     const navigation= useNavigation()

    //  useEffect(()=>{
    //   const checkTokenVlidity = async () =>{
    //     const accessToken= await AsyncStorage.getItem("token")
    //     const expirationDate= await AsyncStorage.getItem("expirationDate")

    //     console.log(accessToken)
    //     console.log(expirationDate)

    //     if (accessToken && expirationDate) {
    //         const currentDate= Date.now()
    //         if (currentDate< parseInt(expirationDate)) {
    //             // here the token is still valid 
    //             navigation.replace("Main")
    //         }else{
    //             // token would expire so we need to remove it from async storage
    //             AsyncStorage.removeItem("token")
    //             AsyncStorage.removeItem("expirationDate")
    //         }
    //     }
    //   }

    //   checkTokenVlidity()

    //  },[])

    useEffect(() => {
        const checkTokenValidity = async () => {
            const accessToken = await AsyncStorage.getItem("token");
            const expirationDate = await AsyncStorage.getItem("expirationDate");
    
            console.log(accessToken);
            console.log(expirationDate);
    
            if (accessToken && expirationDate) {
                const currentDate = Date.now();
                if (currentDate < parseInt(expirationDate, 10)) {
                    // Token is still valid
                    navigation.replace("Main");
                } else {
                    // Token has expired, so remove it from AsyncStorage
                    await AsyncStorage.removeItem("token");
                    await AsyncStorage.removeItem("expirationDate");
                }
            }
        };
    
        checkTokenValidity();
    }, []);
    

    // async function authenticate(){
    //     try {     
    //         const config={
    //             issuer:"https://accounts.spotify.com",
    //             clientId:"ec8d1a7c58934534acbb9445102e5871",
    //             scopes: [
    //                 "user-read-email",
    //                 "user-library-read",
    //                 "user-read-recently-played",
    //                 "user-top-read",
    //                 "playlist-read-private",
    //                 "playlist-read-collaborative",
    //                 "playlist-modify-public" // or "playlist-modify-private"
    //               ],
    //               redirectUrl:"exp://localhost:8081/--/spotify-auth-callback"
    //         }
    //         const result = await AppAuth.authAsync(config)
    //         if (result.accessToken) {
    //             const expirationDate= new Date(result.accessTokenExpirationDate).getTime()
    //             AsyncStorage.setItem("token", result.accessToken);
    //             AsyncStorage.setItem("expirationDate", expirationDate.toString())
    //             navigation.navigate("Main")
    //         }
    //     } catch (error) {
    //         console.error('Error during authentication:', error);
    //     }
    // }

    async function authenticate() {
        const config = {
            issuer: "https://accounts.spotify.com",
            clientId: "ec8d1a7c58934534acbb9445102e5871",
            scopes: [
                "user-read-email",
                "user-library-read",
                "user-read-recently-played",
                "user-top-read",
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-public" // or "playlist-modify-private"
            ],
            redirectUrl: "exp://192.168.0.105:8081/--/spotify-auth-callback"
        };
    
        try {
            const result = await AppAuth.authAsync(config);
            if (result.accessToken) {
                const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
                await AsyncStorage.setItem("token", result.accessToken);
                await AsyncStorage.setItem("expirationDate", expirationDate.toString());
                navigation.navigate("Main");
            }
        } catch (error) {
            console.error("Authentication error: ", error);
        }
    }
    

    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Entypo name="spotify" size={80} color="white" style={{ textAlign: "center" }} />
                <Text
                    style={{ textAlign: "center", color: "white", fontWeight: "bold", marginTop: 40, fontSize: 40 }}>
                    Millions of songs free on spotify </Text>

                <View style={{ height: 80 }} />
                <Pressable
                onPress={authenticate}
                    style={{
                        backgroundColor: "#1DB954",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical:10
                    }}

                >
                    <Text>sign in with spotify</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical:10,
                        flexDirection:"row",
                        borderColor:"#C0C0C0",
                        borderWidth:0.8
                    }}

                >
                    <AntDesign name="mobile1"  size={24} color="white" />
                    <Text style={{fontWeight:"500", textAlign:"center", color:"white", flex:1}}>continue with Phone number</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical:10,
                        flexDirection:"row",
                        borderColor:"#C0C0C0",
                        borderWidth:0.8
                    }}

                >
                   <AntDesign name="google" size={24} color="red" />
                    <Text style={{fontWeight:"500", textAlign:"center", color:"white", flex:1}}>continue with Google</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical:10,
                        flexDirection:"row",
                        borderColor:"#C0C0C0",
                        borderWidth:0.8
                    }}

                >
                   <Entypo name="facebook" size={24} color="blue" />
                    <Text style={{fontWeight:"500", textAlign:"center", color:"white", flex:1}}>continue with Facebook</Text>
                </Pressable>

            </SafeAreaView>
        </LinearGradient>
    )
}

export default Loginscreen