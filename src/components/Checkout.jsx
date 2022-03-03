import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, Image } from "react-native"
import Constants from "expo-constants"

import back from "./../images/back.png"
import yarn from "./../images/yarn.jpg"

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
                    {"Indkøbskurv"}
                </Text>
            </View>
            {/* <Text>Amount: {route.params.amount}</Text> */}

            <View style={styles.summary}>
                <View style={styles.summaryContainer}>
                    <Image 
                        source={yarn}
                        style={styles.image}
                    />
                    <Text style={{ fontSize: 35 }}>{`x ${props.route.params.amount} = kr. ${props.route.params.amount * (props.isCompany ? 11.6 : 14.5)},-`}</Text>
                </View>
            </View>
            
            <TouchableHighlight style={styles.proceed} onPress={(e) => {}}>
                <Text style={{ fontSize: 31, color: "white" }}>GÅ TIL BETALING</Text>
            </TouchableHighlight>
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
      marginRight: 75
    },
    profile: {
        height: height / 11,
        width: 60,
        marginRight: 25
    },
    image: {
        width: 100,
        height: 100
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

    }
})

export default Checkout;