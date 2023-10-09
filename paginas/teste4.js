import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const Teste4 = ({ navigation, route }) => {
    const [listaBotoesTeste4, setListaBotoesTeste4] = useState([false, false, false, false, false, false, false, false, false]);

    const handleButtonPress = (index) => {
        let newLista = [...listaBotoesTeste4];
        newLista[index] = true;
        setListaBotoesTeste4(newLista);
    };

    const navigateToTeste5 = () => {
        navigation.navigate('Teste5', {
            listaBotoesTeste1: route.params.listaBotoesTeste1,
            listaBotoesTeste2: route.params.listaBotoesTeste2,
            listaBotoesTeste3: route.params.listaBotoesTeste3,
            listaBotoesTeste4
        });
    }

    return (
        <View style={styles.container}>
            <Text>Teste 4</Text>

            {/* ... Código para renderizar os botões do Teste4 ... */}
            
            <TouchableOpacity style={styles.navigateButton} onPress={navigateToTeste5}>
                <Text style={styles.navigateButtonText}>Ir para o Teste 5</Text>
            </TouchableOpacity>
        </View>
    );
};

// ... Estilos (podem ser iguais aos do Teste3) ...

export default Teste4;
