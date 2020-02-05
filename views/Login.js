import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {StatusBar} from "react-native-web";
import PropTypes from 'prop-types';
import {login, register} from "../hooks/APIHooks";
import useSignUpForm from "../hooks/LoginHooks";
import useRegisterForm from "../hooks/RegisterHooks";
import FormTextInput from "../components/FormTextInput";
import {Header, Body, Title, Text, Button, ThemeProvider, ThemeConsumer} from "react-native-elements";

/*
Login is the View taking care of the user management
 */

const Login = (props) => {
  let signInCheck = false;
  const {handleUsernameChange, handlePasswordChange, inputs} = useSignUpForm();
  const {handleUsernameReg, handlePasswordReg, handleEmailReg, regInputs} = useRegisterForm();

  const signInAsync = async () => {
    try {
      const user = await login(inputs.username, inputs.password);
      console.log('Logged in as: ' + user.user.username);
      await AsyncStorage.setItem('userToken', user.token);
      await AsyncStorage.setItem('username', user.user.username);
      await AsyncStorage.setItem('userEmail', user.user.email);
      props.navigation.navigate('App');
    } catch (e) {
      console.log('Error in signInAsync: ' + e.message);
    }
  };

  const registerAsync = async () => {
    try {
      const res = await register(regInputs.username, regInputs.password, regInputs.email);
      if (res.message === "User created successfully") {
        const user = await login(regInputs.username, regInputs.password);
        console.log('Logged in as: ' + user.user.username);
        await AsyncStorage.setItem('userToken', user.token);
        await AsyncStorage.setItem('username', user.user.username);
        await AsyncStorage.setItem('userEmail', user.user.email);
        props.navigation.navigate('App');
      } else {
        console.log(res.message);
      }
    } catch (e) {
      console.log('Error in registerAsync: ' + e.message);
    }
  };

  if(signInCheck){

  }else{

  }

};

const signIn = () => {
  return (<View style={{marginTop: StatusBar.currentHeight}}>
  <Text style={{textAlign: 'center'}}>Login</Text>
  <ThemeProvider>
    <FormTextInput
      autoCapitalize='none'
      placeholder='username'
      onChangeText={handleUsernameChange}
      value={inputs.username}
    />
    <FormTextInput
      autoCapitalize='none'
      placeholder='password'
      secureTextEntry={true}
      onChangeText={handlePasswordChange}
      value={inputs.password}
    />
    <Button title="Sign in!" onPress={signInAsync}/>
    <Button title="Don't have an account? Register here" onPress={signIn(signInCheck)}/>
  </ThemeProvider>
</View>);
};

  const register = () => {
    return ( <View>
    <Text>Register</Text>
    <ThemeProvider>
      <FormTextInput
        autoCapitalize='none'
        placeholder='username'
        onChangeText={handleUsernameReg}
        value={regInputs.username}
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='email'
        onChangeText={handleEmailReg}
        value={regInputs.email}
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='password'
        secureTextEntry={true}
        onChangeText={handlePasswordReg}
        value={regInputs.password}
      />
      <Button title="Register!" onPress={registerAsync}/>
      <Button title="Already have an account? Sign in here" onPress={signIn(signInCheck)}/>
    </ThemeProvider>
  </View> );};

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  form: {
    paddingTop: 5,
    margin: 10,
    width: 250
  },
});
*/

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
