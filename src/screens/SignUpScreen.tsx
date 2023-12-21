import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpScreen = () => {
    return (
        <View style={styles.center}>
            <Text>Écran d'inscription</Text>
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

export default SignUpScreen;
