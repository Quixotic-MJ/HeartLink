import "../global.css";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login attempt:', email);
    };

    return (
        <SafeAreaView className="flex-1 bg-slate-50">
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView
                    // FIX: Layout classes must go in contentContainerClassName for ScrollView
                    contentContainerClassName="flex-grow justify-center px-8 pb-12"
                    showsVerticalScrollIndicator={false}
                >

                    {/* Header Section */}
                    <View className="mb-12">
                        <View className="h-16 w-16 bg-blue-600 rounded-2xl items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                            <Text className="text-white text-3xl font-black">H</Text>
                        </View>
                        <Text className="text-5xl font-black text-slate-900 tracking-tighter">
                            HeartLink
                        </Text>
                        <Text className="text-lg text-slate-500 mt-2 font-medium">
                            Monitoring well-being, protecting lives.
                        </Text>
                    </View>

                    {/* Input Fields */}
                    <View className="space-y-5">
                        <View>
                            <Text className="text-slate-600 font-bold mb-2 ml-1">Email Address</Text>
                            <TextInput
                                className="bg-white border border-slate-200 p-4 rounded-2xl text-slate-900 shadow-sm focus:border-blue-500"
                                placeholder="name@example.com"
                                placeholderTextColor="#94a3b8"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        <View>
                            <Text className="text-slate-600 font-bold mb-2 ml-1">Password</Text>
                            <TextInput
                                className="bg-white border border-slate-200 p-4 rounded-2xl text-slate-900 shadow-sm focus:border-blue-500"
                                placeholder="Enter your password"
                                placeholderTextColor="#94a3b8"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity className="mt-3 items-end">
                                <Text className="text-blue-600 font-semibold text-sm">Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View className="mt-10">
                        <TouchableOpacity
                            onPress={handleLogin}
                            activeOpacity={0.8}
                            className="bg-blue-600 py-5 rounded-2xl shadow-xl shadow-blue-300 active:bg-blue-700"
                        >
                            <Text className="text-white text-center font-bold text-xl">
                                Sign In
                            </Text>
                        </TouchableOpacity>

                        <View className="flex-row justify-center mt-8">
                            <Text className="text-slate-500 text-base">New to the platform? </Text>
                            <TouchableOpacity>
                                <Text className="text-blue-600 font-bold text-base">Create Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}