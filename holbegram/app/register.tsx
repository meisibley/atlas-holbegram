// import { Text, View } from 'react-native';
// import { Link } from 'expo-router';

// export default function Page() {
//     return (
//         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//             <Text>Register</Text>
//             <Link href="/login" replace>
//                 <Text>Log in to existing account</Text>
//             </Link>
//         </View>
//     );
// }
import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import { Colors } from "@/constants/Colors";
import { useAuth } from "@/components/AuthProvider";
import Loading from "@/components/Loading";
//import { CreateNewAccountLink, SignInButton } from "@/components/Buttons";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = useAuth();
    const router = useRouter();

    async function register() {
        setLoading(true);
        try {
            await auth.register(email, password);
            
            router.replace("/(tabs)/");
        } catch(err) {
            console.log(err);
            // alert('Unable to create an account');
        }
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.header}>Register</Text>
            {/* <CreateNewAccountLink /> */}

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#fff"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#fff"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <Link href="/login" replace>
                <Text style={styles.text}>Login to existing account</Text>
            </Link>
            {loading && <Loading />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        // backgroundColor: Colors.background
        backgroundColor: '#000435',
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
        // color: Colors.primary
        color: '#fff',
    },
    logo: {
        width: 150,  // Adjust the width of the logo
        height: 150, // Adjust the height of the logo
        resizeMode: "contain",
        marginBottom: 30
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#069494',
        backgroundColor: 'transparent',
        fontSize: 16,
        color: '#fff',
    },
    button: {
        width: '80%',
        backgroundColor: '#069494',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});