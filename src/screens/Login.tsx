import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButtom';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface Props extends StackScreenProps<any,any>{};

export const Login = ({navigation}: Props) => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === "") {
      Alert.alert("Ingresa un email por favor");
    } 
    if (password === "") {
      Alert.alert("Ingresa una contraseña por favor");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate("MyTabs");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(error.message);
        });
    }
  };
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
          Iniciar sesión
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

        <CustomButton value={"Iniciar sesión"} onPress={handleLogin}  />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Nuevo en la app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: '#a14b1b', fontWeight: '700'}}> Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;