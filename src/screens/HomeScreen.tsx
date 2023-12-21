import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {useFonts, Montserrat_700Bold, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat";

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
            <Text style={styles.homeText}>Savourez l'Amour, Une Recette à la Fois.</Text>
            <TouchableOpacity
                style={styles.buttonTwo}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonTextTwo}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonOne}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonTextOne}>S'inscrire</Text>
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
        width: 280,
        height: 50,
        borderRadius: 10,
        marginBottom: 50,
        borderWidth: 1.2,
        borderColor: "#FF376D"
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
    buttonTextTwo: {
        color: "white",
        fontFamily: "Montserrat_600SemiBold",
        fontWeight: "600",
    },
    buttonTextOne: {
        color: "#FF376D",
        fontFamily: "Montserrat_600SemiBold",
        fontWeight: "600",
    },
    homeText: {
        marginBottom: 20,
        fontSize: 26,
        width: 280,
        textAlign: "center",
        fontFamily: "Montserrat_700Bold",
        fontWeight: "700",
        color: "#001665"
    }

});

export default HomeScreen;
