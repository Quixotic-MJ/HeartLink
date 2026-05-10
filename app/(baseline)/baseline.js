import "../../global.css";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Switch } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function StepThreeScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    
    // State for the requested clinical inputs
    const [chestPainType, setChestPainType] = useState('');
    const [exerciseAngina, setExerciseAngina] = useState(false);
    
    const [restingBP, setRestingBP] = useState('');
    const [cholesterol, setCholesterol] = useState('');
    const [fastingBloodSugar, setFastingBloodSugar] = useState('');
    const [maxHeartRate, setMaxHeartRate] = useState('');

    // UI State for active input highlights
    const [focusedField, setFocusedField] = useState(null);

    const cpOptions = [
        'Typical Angina', 
        'Atypical Angina', 
        'Non-anginal Pain', 
        'Asymptomatic'
    ];

    // Require at least the chest pain type to continue
    const isFormValid = chestPainType !== '';

    const handleContinue = () => {
        if (!isFormValid) return;
        console.log('Proceeding to Step 4 with data...');
        // router.push('/step-4');
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
                                Step 3 of 6
                            </Text>
                            <Text className="text-[#1D4ED8] font-bold text-sm">
                                50%
                            </Text>
                        </View>
                        <View className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                            <View className="h-full bg-[#1D4ED8] rounded-full w-1/2" />
                        </View>
                    </View>

                    {/* Title Section */}
                    <View className="mb-8">
                        <Text className="text-3xl leading-[40px] font-black text-slate-900 tracking-tight mb-3">
                            Your Health Baseline
                        </Text>
                        <Text className="text-base text-slate-500 font-medium leading-relaxed pr-2">
                            We use clinical data to personalize your cardiovascular insights and activity recommendations.
                        </Text>
                    </View>

                    {/* Section 1: Symptoms */}
                    <View className="mb-10">
                        <Text className="text-[11px] font-black tracking-[0.15em] text-slate-400 uppercase mb-4 ml-1">
                            1. Symptoms & Conditions
                        </Text>
                        
                        <Text className="text-slate-700 font-bold mb-3 ml-1 text-[13px]">
                            Chest Pain Type
                        </Text>
                        
                        {/* Chest Pain Radios */}
                        <View className="space-y-3 mb-4">
                            {cpOptions.map((type, index) => {
                                const isSelected = chestPainType === type;
                                return (
                                    <TouchableOpacity 
                                        key={index}
                                        onPress={() => setChestPainType(type)}
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
                                        <Text className={`font-bold text-[15px] ${isSelected ? 'text-[#1D4ED8]' : 'text-slate-700'}`}>
                                            {type}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>

                        {/* Exercise Induced Angina Toggle */}
                        <View className="bg-white rounded-[20px] p-5 flex-row justify-between items-center mt-2 shadow-sm shadow-slate-100 border-2 border-transparent">
                            <View className="flex-1 pr-4">
                                <Text className="font-bold text-slate-800 text-[15px] mb-1">
                                    Exercise Induced Angina
                                </Text>
                                <Text className="text-slate-500 text-[12px] leading-5">
                                    Do you experience chest pain or discomfort during physical activity?
                                </Text>
                            </View>
                            <Switch 
                                value={exerciseAngina} 
                                onValueChange={setExerciseAngina}
                                trackColor={{ false: '#E2E8F0', true: '#1D4ED8' }}
                                ios_backgroundColor="#E2E8F0"
                            />
                        </View>
                    </View>

                    {/* Section 2: Clinical Metrics */}
                    <View className="mb-4 space-y-5">
                        <Text className="text-[11px] font-black tracking-[0.15em] text-slate-400 uppercase mb-1 ml-1">
                            2. Clinical Metrics (Optional)
                        </Text>

                        {/* Metrics Group 1: BP & Max HR (Side by Side) */}
                        <View className="flex-row space-x-4">
                            <View className="flex-1">
                                <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                    Resting BP (mmHg)
                                </Text>
                                <View className={`bg-white rounded-[20px] h-14 px-4 justify-center border-2 shadow-sm ${focusedField === 'bp' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                    <TextInput
                                        className="flex-1 text-slate-900 text-[15px] font-medium"
                                        placeholder="e.g. 120"
                                        placeholderTextColor="#94A3B8"
                                        keyboardType="numeric"
                                        value={restingBP}
                                        onChangeText={setRestingBP}
                                        onFocus={() => setFocusedField('bp')}
                                        onBlur={() => setFocusedField(null)}
                                        maxLength={3}
                                    />
                                </View>
                            </View>

                            <View className="flex-1">
                                <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                    Max HR (BPM)
                                </Text>
                                <View className={`bg-white rounded-[20px] h-14 px-4 flex-row items-center justify-between border-2 shadow-sm ${focusedField === 'hr' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                    <TextInput
                                        className="flex-1 text-slate-900 text-[15px] font-medium"
                                        placeholder="e.g. 150"
                                        placeholderTextColor="#94A3B8"
                                        keyboardType="numeric"
                                        value={maxHeartRate}
                                        onChangeText={setMaxHeartRate}
                                        onFocus={() => setFocusedField('hr')}
                                        onBlur={() => setFocusedField(null)}
                                        maxLength={3}
                                    />
                                    <MaterialCommunityIcons name="heart-pulse" size={20} color={focusedField === 'hr' ? '#E11D48' : '#94A3B8'} />
                                </View>
                            </View>
                        </View>

                        {/* Metrics Group 2: Cholesterol & Fasting Blood Sugar (Side by Side) */}
                        <View className="flex-row space-x-4">
                            <View className="flex-1">
                                <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                    Cholesterol (mg/dl)
                                </Text>
                                <View className={`bg-white rounded-[20px] h-14 px-4 justify-center border-2 shadow-sm ${focusedField === 'chol' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                    <TextInput
                                        className="flex-1 text-slate-900 text-[15px] font-medium"
                                        placeholder="e.g. 200"
                                        placeholderTextColor="#94A3B8"
                                        keyboardType="numeric"
                                        value={cholesterol}
                                        onChangeText={setCholesterol}
                                        onFocus={() => setFocusedField('chol')}
                                        onBlur={() => setFocusedField(null)}
                                        maxLength={3}
                                    />
                                </View>
                            </View>

                            <View className="flex-1">
                                <Text className="text-slate-700 font-bold mb-2 ml-1 text-[13px]">
                                    Fasting Sugar
                                </Text>
                                <View className={`bg-white rounded-[20px] h-14 px-4 flex-row items-center justify-between border-2 shadow-sm ${focusedField === 'sugar' ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-100' : 'border-transparent shadow-slate-100'}`}>
                                    <TextInput
                                        className="flex-1 text-slate-900 text-[15px] font-medium"
                                        placeholder="e.g. 90"
                                        placeholderTextColor="#94A3B8"
                                        keyboardType="numeric"
                                        value={fastingBloodSugar}
                                        onChangeText={setFastingBloodSugar}
                                        onFocus={() => setFocusedField('sugar')}
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
                    onPress={() => router.push('/habits')}
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