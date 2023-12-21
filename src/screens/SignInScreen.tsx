import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignInScreen = () => {
    return (
        <View style={styles.center}>
            <Text>Écran de connexion</Text>
            {/* Ajoutez vos éléments de formulaire ici */}
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignInScreen;
