import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

// @ts-ignore
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Image
                source={require('../../assets/adaptive-icon.png')}
                style={styles.logo}
            />
            <Image
                source={require('../../assets/backgroundHomePage.png')}
                style={styles.photo}
            />
            <Text>Savourez l'Amour, Une Recette à la Fois.</Text>
            <TouchableOpacity
                style={styles.buttonTwo}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonOne}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logo: {
        width: 130,
        objectFit: "contain",
        position: "absolute",
        zIndex: 2,
        top: 80
    },
    photo: {
        top: 0,
        position: "absolute",
        width: 600,
        objectFit: "contain",
        marginBottom: 20,
    },
    buttonOne: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF376D",
        width: 280,
        height: 50,
        borderRadius: 10,
        marginBottom: 50,
    },
    buttonTwo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF376D",
        width: 280,
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
    },
    buttonText: {
        color: "white",
    }

});

export default HomeScreen;
