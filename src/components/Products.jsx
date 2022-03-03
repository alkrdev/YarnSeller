import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image, ScrollView, Platform, Dimensions } from 'react-native';
import Constants from "expo-constants"
import yarn from "./../images/yarn.jpg"
import Header from "./Header"

var width = Dimensions.get('window').width; //full width


const Products = (props) => {
    const [products, setProducts] = useState()

    useEffect(() => {
        setProducts([
            {
              id: 1,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 2,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 3,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 4,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 5,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 6,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 7,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 8,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 9,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 10,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 11,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            }, {
              id: 12,
              name: "LILLA GARN",
              currentAmount: 0,
              price: props.isCompany ? "11.60" : "14.50"
            } 
          ])
    }, [props.isCompany])

    return (
        <View style={styles.container}>
            <Header title={"Produkter"} navigation={props.navigation}/>
            {products ? <>
                <ScrollView>
                    <View style={styles.main}>
                        {products.map((product, index) => {
                            return (
                                <View key={index} style={styles.itemContainer}>
                                    <TouchableHighlight onPress={(e) => {}}>
                                        <Image
                                        style={styles.image}
                                        source={yarn}
                                        />
                                    </TouchableHighlight>
                                    <View style={styles.itemDescription}>
                                        {/* ITEM TITLE */}
                                        <View style={styles.itemTitle}>
                                            <Text style={{ fontSize: 34 }}>{product.name}</Text>
                                        </View>

                                        {/* ITEM AMOUNT */}
                                        <View style={styles.itemAmount}>
                                                        
                                            <TouchableHighlight style={styles.itemAmountAdjust} onPress={(e) => {
                                                if (product.currentAmount == 0) return;
                                                var newAmount = product.currentAmount - 1

                                                setProducts(products.map(product => product.id - 1 == index ? {...product, ["currentAmount"]: newAmount} : product))
                                            }}>
                                                <Text style={{ fontSize: 35 }}>-</Text>
                                            </TouchableHighlight>
                                                            
                                            <TouchableHighlight style={styles.itemAmountCurrent} onPress={(e) => {}}>
                                                <Text style={{ fontSize: 38 }}>{product.currentAmount}</Text>
                                            </TouchableHighlight>
                                                            
                                            <TouchableHighlight style={styles.itemAmountAdjust} onPress={(e) => {
                                                var newAmount = product.currentAmount + 1

                                                setProducts(products.map(product => product.id - 1 == index ? {...product, ["currentAmount"]: newAmount} : product))
                                            }}>
                                                <Text style={{ fontSize: 35 }}>+</Text>
                                            </TouchableHighlight>
                                        </View>

                                        {/* ITEM PRICE */}
                                        <View style={styles.itemPrice}>                    
                                            <Text style={{ fontSize: 28 }}>{`kr. ${product.price},-`}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>

                <View style={styles.summary}>
                    <Text>Total pris: kr. {products.map(product => product.currentAmount).reduce((prev, cur) => prev + cur, 0) * (props.isCompany ? 11.6 : 14.5)},-</Text>
                    <Text>|</Text>
                    <Text>{products.map(product => product.currentAmount).reduce((prev, cur) => prev + cur, 0)} varer i kurv</Text>
                </View>
                <TouchableHighlight style={styles.proceed} onPress={(e) => {
                    props.navigation.navigate('Checkout', { amount: products.map(product => product.currentAmount).reduce((prev, cur) => prev + cur, 0) })
                }}>
                    <Text style={{ fontSize: 31, color: "white" }}>GÅ TIL KURV</Text>
                </TouchableHighlight>
            </> : <></>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
    itemContainer: {
      flex: 1,
      flexDirection: 'row',
      width: width - 20,
      height: 200,
      borderStyle: "solid",
      borderColor: "black",
      borderWidth: 1,
      marginBottom: 20
    },
    image: {
      width: 190,
      height: 190
    },
    main: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    itemTitle: {
      flex: 1,
      fontSize: 35,
      justifyContent: "center",
      alignItems: "center",
      width: 190
    },
    itemAmount: {
      flex: 1,
      flexDirection: "row",
      width: 190,
      borderColor: "black",
      borderWidth: 1,
      borderStyle: "solid",
  
    },
    itemPrice: {
      flex: 1,
      fontSize: 31,
      justifyContent: "center",
      alignItems: "center",
      width: 190
    },
    itemDescription: {
      flex: 1,
      alignItems: "stretch",
    },
    itemAmountAdjust: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(210, 0, 0)",
    },
    itemAmountCurrent: { 
      justifyContent: "center",
      alignItems: "center",
      flex: 1,    
    },
    proceed: {
      width: width,
      height: 60,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#8FA88B"
    },
    summary: { 
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-evenly",
      borderTopWidth: 1, 
      borderStyle: "solid", 
      borderColor: "black" 
    }
  });
  

export default Products