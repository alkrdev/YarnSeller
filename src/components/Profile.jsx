import { useState } from "react"

import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, Image, Switch } from "react-native"
import { Picker } from "@react-native-picker/picker"
import Constants from "expo-constants"

import back from "./../images/back.png"
import yarn from "./../images/yarn.jpg"
import image from "./../images/Bertha.jpg"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Checkout = (props) => {
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
                    {"Profil"}
                </Text>
            </View>
            {/* <Text>Amount: {route.params.amount}</Text> */}

            <View style={{ margin: width * 0.1} }>

                <Image 
                    source={image}
                    style={styles.image}
                />

                <Text>Bertha Soerensen</Text>

                <Text>Sprog</Text>
                <Picker
                    selectedValue={"da"}
                    style={{ height: 50, width: 150, backgroundColor: "#EEE" }}
                >
                    <Picker.Item label="Dansk" value="da" />
                    <Picker.Item label="Engelsk" value="en" />                
                </Picker>

                <View style={styles.vat}>
                    <Text>Moms</Text>
                                
                    <Switch
                        trackColor={{ false: "#FF4A4A", true: "#3B8905" }}
                        thumbColor={"#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => props.setIsCompany(previousState => !previousState)}
                        value={props.isCompany}
                    />
                </View>

                <View>
                    <Text>Tidligere køb</Text>
                    <View style={styles.reorder}>
                        <Image 
                            source={yarn}
                            style={styles.miniImage}
                        />
                        <Text style={{ fontSize: 23 }}>{`x69 = kr. ${ props.isCompany ? (1000.5) : (800.4)},-`}</Text>
                        <TouchableHighlight style={styles.reorderButton}>
                            <Text style={{ color: "white", }}>GENBESTIL</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.reorder}>
                        <Image 
                            source={yarn}
                            style={styles.miniImage}
                        />
                        <Text style={{ fontSize: 23 }}>{`x69 = kr. ${ props.isCompany ? (1000.5) : (800.4)},-`}</Text>
                        <TouchableHighlight style={styles.reorderButton}>
                            <Text style={{ color: "white", }}>GENBESTIL</Text>
                        </TouchableHighlight>
                    </View>
                </View>            
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

    }
})

export default Checkout;