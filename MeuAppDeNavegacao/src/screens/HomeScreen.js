import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen ({navigation}){
    return (
        <View style={style.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Vá para os Detalhes"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        <View style={styles.buttonContainer}>
            <Button
                title="Vá para o Perfil"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    </View>
    )
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A8CAE6', //cor de fundo da tela do app
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