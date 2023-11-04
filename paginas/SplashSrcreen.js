import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Cadastro');  // Navega para a tela de Cadastro após 5 segundos
        }, 5000);  // 5 segundos
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('./logo.jpg')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',  // ou qualquer outra cor que você preferir
    },
    logo: {
        width: 200,
        height: 200,  // Ajuste estas dimensões conforme necessário
    }
});

export default SplashScreen;
