import React,{Component} from 'react';
import { Text,View,StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.driodSafeArea} />
                <View style = {styles.titleBar}>
                    <Text style = {styles.titleText}>ISS TRACKER APP</Text>
                </View>

                <TouchableOpacity style = {styles.routeCard}>
                    <Text style = {styles.routeText}> ISS LOCATION</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.routeCard}>
                    <Text style = {styles.routeText}> METEORS </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.routeCard}>
                    <Text style = {styles.routeText}> Updates </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    driodSafeArea : {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: 'center'
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop : 50,
        borderRadius : 30,
        backgroundColor: 'blue'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color : "white",
        marginTop: 75,
        paddingLeft: 30
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black"
    }
})