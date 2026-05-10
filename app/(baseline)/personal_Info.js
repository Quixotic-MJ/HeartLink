import "../../global.css";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function StepOneScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    // Form State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    // UI State for active input highlights
    const [focusedField, setFocusedField] = useState(null);

    // Basic validation to enable/disable button
    const isFormValid = firstName.trim() !== '' && lastName.trim() !== '';

    const handleContinue = () => {
        if (!isFormValid) return;
        console.log('Proceeding to Step 2...');
        // router.push('/step-2');
    };

    return (
        <SafeAreaView className="flex-1 bg-[#F8FAFC]" edges={['top']}>
            <StatusBar style="dark" />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView
                    contentContainerClassName="flex-grow px-6 pt-4 pb-32"
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Header */}
                    <View className="flex-row items-center mb-6">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm shadow-slate-200"
                            activeOpacity={0.7}
                        >
                            <Feather name="arrow-left" size={20} color="#0F172A" />
                        </TouchableOpacity>
                        <Text className="ml-4 text-lg font-bold text-slate-800">
                            HeartLink
                        </Text>
                    </View>

                    {/* Progress Section */}
                    <View className="mb-8">
                        <View className="flex-row justify-between items-center mb-3">
                            <Text className="text-slate-500 font-bold text-xs uppercase tracking-wider">
                                Step 1 of 6
                            </Text>
                            <Text className="text-[#1D4ED8] font-bold text-sm">
                                16%
                            </Text>
                        </View>
                        <View className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                            <View className="h-full bg-[#1D4ED8] rounded-full w-1/6" />
                        </View>
                    </View>

                    {/* Title Section */}
                    <View className="mb-8">
                        <Text className="text-3xl leading-[40px] font-black text-slate-900 tracking-tight mb-3">
                            Let's get to know you
                        </Text>
                        <Text className="text-base text-slate-500 leading-relaxed pr-4">
                            We use this data to calibrate our clinical algorithms specifically for your physiology.
                        </Text>
                    </View>

                    {/* Form Fields */}
                    <View className="space-y-5">

                        {/* First Name */}
                        <View>
                            <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                First Name
                            </Text>
                            <View className={`bg-white rounded-[20px] h-14 px-4 justify-center border-2 shadow-sm ${focusedField === 'first' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                <TextInput
                                    className="flex-1 text-slate-900 text-[15px] font-medium"
                                    placeholder="e.g. Julianne"
                                    placeholderTextColor="#94A3B8"
                                    value={firstName}
                                    onChangeText={setFirstName}
                                    onFocus={() => setFocusedField('first')}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </View>
                        </View>

                        {/* Last Name */}
                        <View>
                            <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                Last Name
                            </Text>
                            <View className={`bg-white rounded-[20px] h-14 px-4 justify-center border-2 shadow-sm ${focusedField === 'last' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                <TextInput
                                    className="flex-1 text-slate-900 text-[15px] font-medium"
                                    placeholder="e.g. Sterling"
                                    placeholderTextColor="#94A3B8"
                                    value={lastName}
                                    onChangeText={setLastName}
                                    onFocus={() => setFocusedField('last')}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </View>
                        </View>

                        {/* Date of Birth */}
                        <View>
                            <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                Date of Birth
                            </Text>
                            <View className={`bg-white rounded-[20px] h-14 px-4 flex-row items-center border-2 shadow-sm ${focusedField === 'dob' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                <TextInput
                                    className="flex-1 text-slate-900 text-[15px] font-medium"
                                    placeholder="MM/DD/YYYY"
                                    placeholderTextColor="#94A3B8"
                                    keyboardType="numeric"
                                    value={dob}
                                    onChangeText={setDob}
                                    onFocus={() => setFocusedField('dob')}
                                    onBlur={() => setFocusedField(null)}
                                    maxLength={10}
                                />
                                <Feather name="calendar" size={20} color={focusedField === 'dob' ? '#1D4ED8' : '#94A3B8'} />
                            </View>
                        </View>

                        {/* Gender (Simulated Dropdown) */}
                        <View>
                            <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                Gender
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                className="bg-white rounded-[20px] h-14 px-4 flex-row items-center justify-between border-2 border-transparent shadow-sm shadow-slate-100"
                            >
                                <Text className={`text-[15px] font-medium ${gender ? 'text-slate-900' : 'text-[#94A3B8]'}`}>
                                    {gender || "Select gender"}
                                </Text>
                                <Feather name="chevron-down" size={20} color="#64748B" />
                            </TouchableOpacity>
                        </View>

                        {/* Height & Weight Row */}
                        <View className="flex-row space-x-4">
                            <View className="flex-1">
                                <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                    Height (cm)
                                </Text>
                                <View className={`bg-white rounded-[20px] h-14 px-4 justify-center border-2 shadow-sm ${focusedField === 'height' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                    <TextInput
                                        className="flex-1 text-slate-900 text-[15px] font-medium"
                                        placeholder="175"
                                        placeholderTextColor="#94A3B8"
                                        keyboardType="numeric"
                                        value={height}
                                        onChangeText={setHeight}
                                        onFocus={() => setFocusedField('height')}
                                        onBlur={() => setFocusedField(null)}
                                        maxLength={3}
                                    />
                                </View>
                            </View>

                            <View className="flex-1">
                                <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                    Weight (kg)
                                </Text>
                                <View className={`bg-white rounded-[20px] h-14 px-4 justify-center border-2 shadow-sm ${focusedField === 'weight' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                    <TextInput
                                        className="flex-1 text-slate-900 text-[15px] font-medium"
                                        placeholder="70"
                                        placeholderTextColor="#94A3B8"
                                        keyboardType="numeric"
                                        value={weight}
                                        onChangeText={setWeight}
                                        onFocus={() => setFocusedField('weight')}
                                        onBlur={() => setFocusedField(null)}
                                        maxLength={3}
                                    />
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Floating Continue Button */}
            <View 
                className="absolute bottom-0 left-0 right-0 bg-[#F8FAFC]/95 border-t border-slate-200/50 px-6 pt-4"
                style={{ paddingBottom: Math.max(insets.bottom, 24) }}
            >
                <TouchableOpacity
                    onPress={() => router.push('/baseline')}
                    disabled={!isFormValid}
                    activeOpacity={0.8}
                    className={`h-14 rounded-full flex-row justify-center items-center shadow-md ${
                        isFormValid ? 'bg-[#1D4ED8] shadow-blue-500/30' : 'bg-slate-200 shadow-transparent'
                    }`}
                >
                    <Text className={`font-bold text-lg ${isFormValid ? 'text-white' : 'text-slate-400'}`}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}