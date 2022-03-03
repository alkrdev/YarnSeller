import React from "react"
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"

import menu from "./../images/menu.bmp"
import profile from "./../images/profile.bmp"

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const Header = (props) => {
    return (
        <View style={styles.view}>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Navigation', { })}>
                    <Image 
                        style={styles.menu}
                        source={menu}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile', { })}>
                    <Image 
                        style={styles.profile}
                        source={profile}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width,
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
    },
    profile: {
        height: height / 11,
        width: 60,
        marginRight: 25
    }
})

export default Header;