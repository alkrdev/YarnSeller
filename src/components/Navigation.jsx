import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Alert, Image, ScrollView, Platform, Dimensions } from 'react-native';
import Constants from "expo-constants"
import yarn from "./../images/yarn.jpg"
import Header from "./Header"

import back from "./../images/back.png"


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Navigation = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <View>
                    <TouchableOpacity onPress={(e) => {
                        props.navigation.navigate('Products', { })
                    }}>
                        <Image 
                            style={styles.menu}
                            source={back}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    {"Navigation"}
                </Text>
            </View>

            <View style={styles.navButtons}>
                <TouchableHighlight style={styles.navButton} onPress={(e) => {
                    props.navigation.navigate('Products', { })
                }}>
                    <Text style={{ fontSize: 37 }}>Produkter</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.navButton} onPress={(e) => {
                    props.navigation.navigate('Profile', { })
                }}>
                    <Text style={{ fontSize: 37 }}>Profil</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.navButton} onPress={(e) => {
                    props.navigation.navigate('Checkout', { amount: 0 })
                }}>
                    <Text style={{ fontSize: 37 }}>Indkøbskurv</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      
    },
    view: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: height / 10,
        
        borderBottomColor: 'black',
        borderBottomWidth: 4
    },
    menu: {
        height: height / 11,
        width: 60,    
        marginLeft: 25
    },
    title: {
      textAlign: "center",
      fontSize: 47,
      marginRight: 150
    },
    profile: {
        height: height / 11,
        width: 60,
        marginRight: 25
    },
    image: {
        width: width * 0.8,
        height: width * 0.8,
        marginBottom: width * 0.1
    },
    miniImage: {
        width: 50,
        height: 40
    },
    summary: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    proceed: {
      width: width,
      height: 60,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#8FA88B"
    },
    summaryContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    }, 
    vat: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    reorder: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "solid",
        marginTop: 5,
        height: 60
    },
    reorderButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3B8905",
        width: 100,
        height: 40,

    },
    navButtons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    navButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.9,
        height: 100,
        borderWidth: 1,
        margin: 5,
        fontSize: 37


    }
})  

export default Navigation