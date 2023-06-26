import React, { useState } from 'react'
import { Text, View,Image,Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButtom';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const Signup = () => {
  
  const navigation = useNavigation();
  const auth = getAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSignUp = () => { 
    
    if (email === "") {
      Alert.alert("Ingresa un email por favor")
    } else if (password === "") {
      Alert.alert("Ingresa una contraseña por favor")
    } else if (confirmPass.length == 0) {
      Alert.alert("Ingresa la contraseña de confirmación por favor");
    } else if (password != confirmPass) {
      Alert.alert("La contraseña de confirmación no coincide con la contraseña anterior ingresada");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.goBack();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }



  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: "#f1d99e" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center', paddingBottom: 50 }}>
          <Image
            source={require('../images/Avion.png')}
            style={{height:200,width:350, opacity: 1, borderRadius:20}}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#a14b1b',
            marginBottom: 30,
          }}>
          Registrarse
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#a14b1b"
            style={{ marginRight: 5, marginBottom:20 }}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              borderBottomColor: '#a14b1b',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
              flex: 1,
              color:'#a14b1b'
            }}  
            placeholder="Email"
            placeholderTextColor={'#a14b1b'}
            keyboardType='email-address'
            onChangeText={(val) => setEmail(val)}
            
          />
          
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#a14b1b"
            style={{marginRight: 5, marginBottom:20}}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              borderBottomColor: '#a14b1b',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
              flex: 1,
              color:'#a14b1b'
            }} 
            placeholder="Contraseña"
            placeholderTextColor={'#a14b1b'}
            secureTextEntry={true}
            onChangeText={(val) => setPassword(val)}
            
          />
          
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#a14b1b"
            style={{marginRight: 5, marginBottom:20}}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              borderBottomColor: '#a14b1b',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
              flex: 1,
              color:'#a14b1b'
            }} 
            placeholder="Confirmar contraseña"
            placeholderTextColor={'#a14b1b'}
            secureTextEntry={true}
            onChangeText={(val) => setConfirmPass(val)}
            
          />
          
        </View>

        <CustomButton value={"Registrar"} onPress={handleSignUp}  />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Ya estás registrado?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#a14b1b', fontWeight: '700'}}> Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Signup;
