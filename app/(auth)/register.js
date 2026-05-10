import "../../global.css";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
    const router = useRouter();

    // Form State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Toggle States for Passwords
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = () => {
        console.log('Registering with:', email);
        // Add registration logic here
    };

    return (
        <SafeAreaView className="flex-1 bg-[#F4F7FB]">
            <StatusBar style="dark" />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView
                    contentContainerClassName="flex-grow px-6 pt-2 pb-12"
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header */}
                    <View className="flex-row items-center mb-10 mt-2">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="p-2 -ml-2"
                        >
                            <Feather name="arrow-left" size={24} color="#1E293B" />
                        </TouchableOpacity>
                        <Text className="ml-4 text-lg font-bold text-slate-800">
                            HeartLink
                        </Text>
                    </View>

                    {/* Title Section */}
                    <View className="mb-10">
                        <Text className="text-[40px] leading-[44px] font-black text-slate-900 tracking-tight mb-4">
                            Create Your{"\n"}Account
                        </Text>
                        <Text className="text-base text-slate-600 font-medium leading-relaxed pr-4">
                            Join the collective for proactive cardiac wellness and empathetic medical precision.
                        </Text>
                    </View>

                    {/* Form Fields */}
                    <View className="space-y-6">
                        {/* Email Input */}
                        <View>
                            <Text className="text-slate-800 font-bold mb-2 ml-1 text-sm">
                                Email Address
                            </Text>
                            <View className="bg-[#E2E8F0]/70 rounded-2xl h-14 px-4 justify-center">
                                <TextInput
                                    className="flex-1 text-slate-900 text-base"
                                    placeholder="name@medical.com"
                                    placeholderTextColor="#94A3B8"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                        </View>

                        {/* Password Input */}
                        <View>
                            <Text className="text-slate-800 font-bold mb-2 ml-1 text-sm">
                                Password
                            </Text>
                            <View className="bg-[#E2E8F0]/70 rounded-2xl h-14 px-4 flex-row items-center">
                                <TextInput
                                    className="flex-1 text-slate-900 text-base"
                                    placeholder="••••••••"
                                    placeholderTextColor="#94A3B8"
                                    secureTextEntry={!showPassword}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    className="p-2 -mr-2"
                                >
                                    <Feather
                                        name={showPassword ? "eye" : "eye-off"}
                                        size={20}
                                        color="#475569"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Confirm Password Input */}
                        <View>
                            <Text className="text-slate-800 font-bold mb-2 ml-1 text-sm">
                                Confirm Password
                            </Text>
                            <View className="bg-[#E2E8F0]/70 rounded-2xl h-14 px-4 flex-row items-center">
                                <TextInput
                                    className="flex-1 text-slate-900 text-base"
                                    placeholder="••••••••"
                                    placeholderTextColor="#94A3B8"
                                    secureTextEntry={!showConfirmPassword}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="p-2 -mr-2"
                                >
                                    <Feather
                                        name={showConfirmPassword ? "eye" : "eye-off"}
                                        size={20}
                                        color="#475569"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Register Button */}
                    <View className="mt-10">
                        <TouchableOpacity
                            onPress={() => router.push('../(baseline)/focus')}
                            activeOpacity={0.8}
                            className="bg-[#1D4ED8] h-14 rounded-2xl flex-row justify-center items-center shadow-lg shadow-blue-500/30"
                        >
                            <Text className="text-white font-bold text-lg mr-2">
                                Register
                            </Text>
                            <MaterialCommunityIcons name="account-check" size={22} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Footer Login Link */}
                    <View className="flex-row justify-center mt-8">
                        <Text className="text-slate-500 font-medium text-base">
                            Already have an account?{" "}
                        </Text>
                        <TouchableOpacity onPress={() => router.push('/login')}>
                            <Text className="text-[#1D4ED8] font-bold text-base">
                                Log in
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}