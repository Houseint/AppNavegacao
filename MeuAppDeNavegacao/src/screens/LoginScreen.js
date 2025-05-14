import React from 'react';
import { useState } from 'react';
import {View, Text, Button, StyleSheet, Dimensions, TextInput} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen ({navigation}){
        const [usuario, setUsuario] = useState('');
        const [senha, setSenha]= useState('');
        const handleLogin = () => {
            if (!usuario || !senha) {
                Alert.alert('Erro', 'Por favor, preencha todos os campos.');
                return;
            }
        
            if (usuario === 'admin' && senha === '1234') {
                navigation.navigate('Home');
            } else {
                Alert.alert('Erro', 'Usuário ou senha inválidos.');
            }
        };
    return (
    <View style={styles.container}>
        

            <Text style={styles.title}>Login</Text>
            <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                keyboardType="email-address"
                value={usuario}
                onChangeText={setUsuario}
                />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="numeric" value={senha}
                onChangeText={setSenha}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Home')}
                />
                </View>
          </View>
    </View>
    )
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A8CAE6', //cor de fundo da tela de login
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontFamily: 'unageo',
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth *0.5,
        borderRadius: 5,
    },
});