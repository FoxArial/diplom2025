import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, SafeAreaView } from 'react-native';

function WelcomeScreen({navigation}) {
    return (
      <SafeAreaView style={{flex:1, backgroundColor:"#CFBCFF"}}>
        <View style={styles.loginScreen}> 
        <Text style={styles.brandName}> TEAFI</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loginScreen:
    {
        flex: 1,
        justifyContent: "center" ,
        alignItems: "center",
    },
    brandName:{
        fontSize: 64,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#6750A4',
        paddingVertical: 15,        
        paddingHorizontal: 40,     
        borderRadius: 10,           
        marginVertical: 10,         
        width: '80%',               
        alignItems: 'center',       
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
})
export default WelcomeScreen;