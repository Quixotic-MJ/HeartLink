import "../../global.css";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function StepFiveScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    
    // State for the requested inputs
    const [familyHistory, setFamilyHistory] = useState('');
    const [smokingStatus, setSmokingStatus] = useState('');
    const [sleepHours, setSleepHours] = useState('');
    const [dietaryRisk, setDietaryRisk] = useState('');
    const [physicalLimitation, setPhysicalLimitation] = useState('');

    // UI State for active input highlights
    const [isSleepFocused, setIsSleepFocused] = useState(false);

    // Options arrays for cleaner rendering
    const familyOptions = ['No known history', 'Yes, immediate family', 'Yes, extended family'];
    const smokingOptions = ['Never', 'Occasionally', 'Regularly'];
    const physicalOptions = ['No limitations, I move freely', 'Mild discomfort during exercise', 'Chronic pain or mobility assistance needed'];
    const dietaryOptions = ['Low Risk', 'Moderate Risk', 'High Risk']; // For mock cycling

    // Validation to enable the Continue button
    const isFormValid = familyHistory && smokingStatus && sleepHours && dietaryRisk && physicalLimitation;

    const handleContinue = () => {
        if (!isFormValid) return;
        console.log('Proceeding to Step 6 with data...');
        // router.push('/step-6');
    };

    // Helper function to cycle dietary risk for the mock dropdown
    const handleDietarySelect = () => {
        const nextIndex = (dietaryOptions.indexOf(dietaryRisk) + 1) % dietaryOptions.length;
        setDietaryRisk(dietaryOptions[nextIndex]);
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
                                Step 5 of 6
                            </Text>
                            <Text className="text-[#1D4ED8] font-bold text-sm">
                                83%
                            </Text>
                        </View>
                        <View className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                            <View className="h-full bg-[#1D4ED8] rounded-full w-5/6" />
                        </View>
                    </View>

                    {/* Title Section */}
                    <View className="mb-8">
                        <Text className="text-3xl leading-[40px] font-black text-slate-900 tracking-tight mb-3">
                            Activity & Habits
                        </Text>
                        <Text className="text-base text-slate-500 font-medium leading-relaxed pr-2">
                            Lifestyle factors help us complete your cardiovascular profile.
                        </Text>
                    </View>

                    {/* Form Cards */}
                    <View className="space-y-5">

                        {/* 1. Family History CVD */}
                        <View className="mb-2">
                            <View className="flex-row items-center mb-3 ml-1">
                                <MaterialCommunityIcons name="heart-multiple-outline" size={20} color="#1D4ED8" />
                                <Text className="font-bold text-slate-800 text-[15px] ml-2">
                                    Family History of CVD
                                </Text>
                            </View>
                            <View className="space-y-3">
                                {familyOptions.map((option) => {
                                    const isSelected = familyHistory === option;
                                    return (
                                        <TouchableOpacity 
                                            key={option}
                                            onPress={() => setFamilyHistory(option)}
                                            activeOpacity={0.7}
                                            className={`bg-white rounded-[20px] p-4 flex-row items-center border-2 shadow-sm ${
                                                isSelected ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'
                                            }`}
                                        >
                                            <View className={`w-5 h-5 rounded-full border-2 items-center justify-center mr-3 ${
                                                isSelected ? 'border-[#1D4ED8]' : 'border-slate-300'
                                            }`}>
                                                {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]" />}
                                            </View>
                                            <Text className={`font-bold text-[14px] ${isSelected ? 'text-[#1D4ED8]' : 'text-slate-700'}`}>
                                                {option}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>

                        {/* 2. Smoking Status */}
                        <View className="mb-2 mt-4">
                            <View className="flex-row items-center mb-3 ml-1">
                                <MaterialCommunityIcons name="smoking" size={20} color="#1D4ED8" />
                                <Text className="font-bold text-slate-800 text-[15px] ml-2">
                                    Smoking Status
                                </Text>
                            </View>
                            <View className="space-y-3">
                                {smokingOptions.map((status) => {
                                    const isSelected = smokingStatus === status;
                                    return (
                                        <TouchableOpacity 
                                            key={status}
                                            onPress={() => setSmokingStatus(status)}
                                            activeOpacity={0.7}
                                            className={`bg-white rounded-[20px] p-4 flex-row items-center border-2 shadow-sm ${
                                                isSelected ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'
                                            }`}
                                        >
                                            <View className={`w-5 h-5 rounded-full border-2 items-center justify-center mr-3 ${
                                                isSelected ? 'border-[#1D4ED8]' : 'border-slate-300'
                                            }`}>
                                                {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]" />}
                                            </View>
                                            <Text className={`font-bold text-[14px] ${isSelected ? 'text-[#1D4ED8]' : 'text-slate-700'}`}>
                                                {status}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>

                        {/* 3. Sleep & Diet Group */}
                        <View className="bg-white rounded-[24px] p-5 shadow-sm shadow-slate-200/50 mt-4 border border-slate-100">
                            {/* Sleep Hours */}
                            <View className="mb-5">
                                <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                    Average Sleep Hours
                                </Text>
                                <View className={`bg-white rounded-[20px] h-14 px-4 flex-row items-center border-2 shadow-sm ${isSleepFocused ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                    <MaterialCommunityIcons name="sleep" size={20} color={isSleepFocused ? '#1D4ED8' : '#94A3B8'} />
                                    <TextInput
                                        className="flex-1 text-slate-900 text-[15px] font-medium ml-3"
                                        placeholder="e.g. 7"
                                        placeholderTextColor="#94A3B8"
                                        keyboardType="numeric"
                                        value={sleepHours}
                                        onChangeText={setSleepHours}
                                        onFocus={() => setIsSleepFocused(true)}
                                        onBlur={() => setIsSleepFocused(false)}
                                        maxLength={2}
                                    />
                                    <Text className="text-slate-400 font-bold text-[13px]">hrs / night</Text>
                                </View>
                            </View>

                            {/* Dietary Risk */}
                            <View>
                                <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                    Dietary Habit Risk
                                </Text>
                                <TouchableOpacity 
                                    activeOpacity={0.7}
                                    onPress={handleDietarySelect}
                                    className="bg-white rounded-[20px] h-14 px-4 flex-row items-center justify-between border-2 border-transparent shadow-sm shadow-slate-100"
                                >
                                    <View className="flex-row items-center">
                                        <MaterialCommunityIcons name="food-apple" size={20} color={dietaryRisk ? '#1D4ED8' : '#94A3B8'} />
                                        <Text className={`text-[15px] font-medium ml-3 ${dietaryRisk ? 'text-slate-900' : 'text-[#94A3B8]'}`}>
                                            {dietaryRisk || "Select risk level..."}
                                        </Text>
                                    </View>
                                    <Feather name="chevron-down" size={20} color="#64748B" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* 4. Physical Limitations */}
                        <View className="mb-2 mt-4">
                            <View className="flex-row items-center mb-3 ml-1">
                                <MaterialCommunityIcons name="wheelchair-accessibility" size={20} color="#E11D48" />
                                <Text className="font-bold text-slate-800 text-[15px] ml-2">
                                    Physical Limitations
                                </Text>
                            </View>
                            <View className="space-y-3">
                                {physicalOptions.map((limit) => {
                                    const isSelected = physicalLimitation === limit;
                                    return (
                                        <TouchableOpacity 
                                            key={limit}
                                            onPress={() => setPhysicalLimitation(limit)}
                                            activeOpacity={0.7}
                                            className={`bg-white rounded-[20px] p-4 flex-row items-center justify-between border-2 shadow-sm ${
                                                isSelected ? 'border-[#E11D48] bg-rose-50/30 shadow-rose-100' : 'border-transparent shadow-slate-100'
                                            }`}
                                        >
                                            <Text className={`font-bold text-[14px] flex-1 pr-4 ${isSelected ? 'text-[#E11D48]' : 'text-slate-700'}`}>
                                                {limit}
                                            </Text>
                                            
                                            <View className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
                                                isSelected ? 'border-[#E11D48]' : 'border-slate-300'
                                            }`}>
                                                {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />}
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
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
                    onPress={handleContinue}
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