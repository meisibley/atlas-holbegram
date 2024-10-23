// import { Pressable, Text, View } from 'react-native';
// import { Link, useRouter } from 'expo-router';

// export default function Page() {
//     const router = useRouter();
//     return (
//         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//             <Text>Login</Text>
//             <Link href="/register" replace>
//                 <Text>Create a new account</Text>
//             </Link>

//             <Pressable onPress={() => {router.replace("/(tabs)/")}}>
//                 <Text>Sign In</Text>
//             </Pressable>
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

    async function login() {
        setLoading(true);
        try {
            await auth.login(email, password);
            router.replace("/(tabs)/");
        } catch(err) {
            alert(`Email ${email} or password ${password} is incorrect`);
        }
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.header}>Login</Text>
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

            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            
            <Link href="/register" replace>
                <Text style={styles.text}>Create a new account</Text>
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