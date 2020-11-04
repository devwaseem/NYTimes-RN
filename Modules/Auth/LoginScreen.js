

import React , {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Pressable,
  Alert
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faEnvelope,faLock, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

const LoginStyle = StyleSheet.create({
  styledInputTextInput: { 
    
  }
});

const LoginScreen = ({navigation}) => {
  const [emailValue, onChangeEmailValue] = useState("")
  const [passwordValue, onChangePasswordValue] = useState("")
  const [isEmailValid, onChangeEmailValid] = useState(true)
  const [isPasswordValid, onChangePasswordValid] = useState(true)


  function nagivateToSignupScreen(){
    navigation.navigate("SignUpScreen")
  }

  function onChangePassword(text) {
    onChangePasswordValue(text)
    if (text){
      if (text == ""){
        return onChangePasswordValid(true)
      }
      if(text.length >= 8){
        return onChangePasswordValid(true)
      }
      onChangePasswordValid(false)
    }else {
      onChangePasswordValid(true)
    }
  }

  function onChangeEmail(text){
    onChangeEmailValue(text)
    if (text){
      if (text == ""){
        return onChangeEmailValid(true)
      }
      if(text == "waseem07799@gmail.com"){
        return onChangeEmailValid(true)
      }
      onChangeEmailValid(false)
    }else {
      onChangeEmailValid(true)
    }
  }

  function loginClicked() {
    if (emailValue == "") {
      Alert.alert("Email cannot be empty")
    }else if(!isEmailValid) {
      Alert.alert("Email is invalid", "Please check the entered email")
    }else if (passwordValue == "") {
      Alert.alert("Password cannot be empty")
    }else if(!isPasswordValid) {
      Alert.alert("Password should be more than 8 characters")
    }else {
      Alert.alert("Log in Successful",null,[{ text: "OK", onPress: navigateToHomeScreen }])
    }
  }

  function navigateToHomeScreen(){
    navigation.navigate("HomeScreen")
  }

  return (
    <>
      <StatusBar barStyle="default" />
      
      <View style={{flex:2}}>

      </View>
      {/* login fields */}
      <View style={{flex:6, marginHorizontal: 24}}>
        <Text style={{fontWeight:"bold",fontSize:50}}>Login</Text>
          <Text style={{fontSize:18, color:'gray', marginTop:8}}>
              Please sign in to continue.
          </Text>
        <StyledTextInput 
        style={{
        }}
        icon={faEnvelope}
        placeholder = "Email" 
        onChangeText={onChangeEmail} 
        value={emailValue}
        isValid={isEmailValid}
        />
        <StyledTextInput 
        style={{marginTop:16}}
        icon={faLock}
        placeholder = "Password" 
        onChangeText={onChangePassword} 
        value={passwordValue}
        secureTextEntry={true}
        isValid={isPasswordValid}
        />
        <View
        style={{
          height:55,
          marginTop:24,
          flexDirection:"row-reverse",
          alignItems: 'center',
          backgroundColor: '#0000'
        }}
        >
        <Pressable
        onPress={loginClicked}
        style={{
          backgroundColor:'rgb(254,147,61)',
          width:"40%",
          height:"100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          flexDirection:"row",
          shadow: {
            shadowColor: "black",
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 5,
          }
        }}>
        {() => (
          <>
          <Text
          style={{fontWeight:"bold", color:"white"}}
          >
            LOGIN
          </Text>
          <FontAwesomeIcon icon={faLongArrowAltRight} color="rgba(0,0,0,0.2)" size={20} color={"white"} style={{marginLeft:8}} />
          </>
        )}
      </Pressable>
        </View>
      </View>
      <LoginFooter onNavigation={()=>nagivateToSignupScreen()}/>
    </>
  );
};




const StyledTextInput = (props) => {
  
  const styles = StyleSheet.create({
    view: {
      flexDirection:"row", 
      height:60, 
      alignItems:"center", 
      borderBottomColor:(props.isValid ?? false) ? "rgba(0,0,0,0.12)" : "red", 
      borderBottomWidth:(props.isValid ?? false) ? 1 : 2,
      backgroundColor: '#0000',
      marginTop:40,
    },

    shadow: {
      shadowColor: "black",
      shadowOffset: {
            width: 0,
            height: 2,
      },
      shadowOpacity: 0.12,
      shadowRadius: 4,
      elevation: 5,
    },

    icon: {
      marginLeft:8
    },

    input: {
      flex:1,
      marginHorizontal:16, 
      fontSize:16,
      fontWeight:"bold"
    }

  });

  return (
    <View style={[styles.view, props.style, (props.isFocused ? styles.shadow : undefined)]}>
      <FontAwesomeIcon icon={props.icon} color="rgba(0,0,0,0.2)" size={18} style={styles.icon} />
      <TextInput
          placeholder={props.placeholder}
          style = {styles.input}
          onChangeText = {text => props.onChangeText(text)}
          value = {props.value}
          secureTextEntry={props.secureTextEntry ?? false}
          clearButtonMode="while-editing"
          onFocus={props.onFocus}
          autoCapitalize = {props.autoCapitalize ?? 'none'}
        />
        
    </View>
  )

}

const LoginFooter = (props) => {
  return (
      <View style={{flexDirection:"row", flex:0.8, justifyContent:'center'}}>
        <Text>Don't have an account?</Text>
        <Pressable
        style={{backgroundColor:'#0000'}}
        onPress={() => {
          props.onNavigation()
        }}
        >
        <Text style={{fontWeight:'bold', color:'rgb(254,147,61)', marginLeft:4}}>
            Sign up
        </Text>
        </Pressable>
      </View>
  )
}



export default LoginScreen;

