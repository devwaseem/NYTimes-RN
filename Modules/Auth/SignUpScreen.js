

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
import {faArrowLeft, faEnvelope,faLock, faLongArrowAltRight, faUser} from '@fortawesome/free-solid-svg-icons'
import FontAwesomeIconButton from '../../UI Components/FontAwesomeIconButton';



const SignUpScreen = ({navigation}) => {
  const [fullNameValue, onChangeFullNameValue] = useState("")
  const [emailValue, onChangeEmailValue] = useState("")
  const [passwordValue, onChangePasswordValue] = useState("")
  const [ConfirmPasswordValue, onChangeConfirmPasswordValue] = useState("")

  function nagivateToLoginScreen(){
    navigation.navigate("LoginScreen")
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <ScrollView>
      <View style={{ marginHorizontal: 24, marginTop:70}}>
        <FontAwesomeIconButton icon={faArrowLeft} onPress={nagivateToLoginScreen} iconSize={20}/>
        <Text style={{fontWeight:"bold",fontSize:50, marginTop:24}}>Create Account</Text>
        <StyledTextInput 
        icon={faUser}
        
        placeholder = "Full Name" 
        onChangeText={onChangeFullNameValue} 
        value={fullNameValue}
        />
        <StyledTextInput 
        style={{marginTop:16}}
        icon={faEnvelope}
        placeholder = "Email" 
        onChangeText={onChangeEmailValue} 
        value={emailValue}
        />
        <StyledTextInput 
        style={{marginTop:16}}
        icon={faLock}
        placeholder = "Password" 
        onChangeText={onChangePasswordValue} 
        value={passwordValue}
        secureTextEntry={true}
        />
        <StyledTextInput 
        style={{marginTop:16}}
        icon={faLock}
        placeholder = "Confirm Password" 
        onChangeText={onChangeConfirmPasswordValue} 
        value={ConfirmPasswordValue}
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
        onPress={() => {
          Alert.alert("Sign up successful","Login to continue", [{ text: "OK", onPress: () => nagivateToLoginScreen() }])
        }}
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
            SIGN UP
          </Text>
          <FontAwesomeIcon icon={faLongArrowAltRight} color="rgba(0,0,0,0.2)" size={20} color={"white"} style={{marginLeft:8}} />
          </>
        )}
      </Pressable>
        </View>
      </View>
      <SignUpFooter onNavigation={()=>nagivateToLoginScreen()}/>
      </ScrollView>
    </>
  );
};




const StyledTextInput = (props) => {
  
  const styles = StyleSheet.create({
    view: {
      flexDirection:"row", 
      height:60, 
      alignItems:"center", 
      borderBottomColor:"rgba(0,0,0,0.12)", 
      borderBottomWidth:1,
      backgroundColor: "#0000",
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
        />
        
    </View>
  )

}

const SignUpFooter = (props) => {
  return (
      <View style={{flexDirection:"row",justifyContent:'center', marginTop: 40}}>
        <Text>Already have an account?</Text>
        <Pressable
        style={{backgroundColor:'#0000'}}
        onPress={() => {
          props.onNavigation()
        }}
        >
        <Text style={{fontWeight:'bold', color:'rgb(254,147,61)'}}> Log in</Text>
        </Pressable>
      </View>
  )
}



export default SignUpScreen;

