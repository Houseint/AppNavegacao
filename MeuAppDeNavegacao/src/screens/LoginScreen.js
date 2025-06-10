import React, { useEffect } from 'react';
import { useState } from 'react';
import {View, Text, Button, StyleSheet, Dimensions, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen ({navigation}){
        const [usuario, setUsuario] = useState('');
        const [senha, setSenha]= useState('');

        //ve se o usuário já ta logado
        useEffect(() => {
            const statusLogin = async () => {
                try {
                    const usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
                    if (usuarioLogado) {
                        navigation.navigate('Home');
                    }
                } catch (error) {
                    console.error('Erro ao verificar o status de login:', error);
                }
            };
            statusLogin();
        }, []);

        const Login =async() => {
            if (!usuario || !senha) {
                alert('Erro. Preencha todos os campos.');
                return;
            }
        
            if (usuario !== 'admin@gmail.com') {
                alert('Erro. Usuário inválido.');
                return;
            }
        
            if (senha !== '1234') {
                alert('Erro. Senha incorreta.');
                return;
            }
            try {
                await AsyncStorage.setItem('usuarioLogado', 'logado');
                navigation.navigate('Home');
            } catch (error) {
                console.error('Ocorreu um erro', error);
                alert('Ocorreu um erro ao salvar o login.');
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
                    onPress={Login}
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
        backgroundColor: '#027373', //cor de fundo da tela de login
        borderColor: '#000000',
        borderRadius: 2
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontFamily: 'unageo',
        color: '#A9D9D0'
    },
    buttonContainer: {
        backgroundColor: '#03A63C',
        margin: 10,
        width: windowWidth *0.5,
        borderRadius: 7,
        borderColor: '#000000',
        color: '000000'
    },
    input: {
        borderRadius: 5,
        borderColor: '#ffffff',
        backgroundColor: '#F2E7DC',
        borderWidth: 0.5,
        margin: 3
    },
});
