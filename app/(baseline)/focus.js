import "../../global.css";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function FocusScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets(); // For precise bottom bar spacing
    const [selectedGoals, setSelectedGoals] = useState([]);

    const toggleGoal = (id) => {
        if (selectedGoals.includes(id)) {
            setSelectedGoals(selectedGoals.filter(goalId => goalId !== id));
        } else {
            setSelectedGoals([...selectedGoals, id]);
        }
    };

    const goals = [
        {
            id: 'bp',
            title: 'Blood Pressure',
            desc: 'Track systolic trends & salt intake.',
            icon: 'monitor-heart',
            iconColor: '#1D4ED8',
            bgColor: 'bg-blue-100/50',
            layout: 'col'
        },
        {
            id: 'cholesterol',
            title: 'Cholesterol',
            desc: 'Optimize your HDL/LDL balance.',
            icon: 'microscope',
            iconColor: '#1D4ED8',
            bgColor: 'bg-blue-100/50',
            layout: 'col'
        },
        {
            id: 'recovery',
            title: 'Post-Surgery / Cardiac Recovery',
            desc: 'Guided rehabilitation protocols and symptom monitoring for peace of mind.',
            icon: 'heart-pulse',
            iconColor: '#E11D48', 
            bgColor: 'bg-rose-100/50', 
            layout: 'row' 
        },
        {
            id: 'fitness',
            title: 'Heart Fitness',
            desc: 'Aerobic training for longevity.',
            icon: 'dumbbell',
            iconColor: '#1D4ED8',
            bgColor: 'bg-blue-100/50',
            layout: 'col'
        },
        {
            id: 'weight',
            title: 'Weight Mgmt',
            desc: 'Metabolic support for relief.',
            icon: 'scale-bathroom',
            iconColor: '#1D4ED8',
            bgColor: 'bg-blue-100/50',
            layout: 'col'
        }
    ];

    return (
        <SafeAreaView className="flex-1 bg-[#F8FAFC]" edges={['top']}>
            <StatusBar style="dark" />

            <ScrollView
                contentContainerClassName="flex-grow px-6 pt-4 pb-32"
                showsVerticalScrollIndicator={false}
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
                            Step 2 of 6
                        </Text>
                        <Text className="text-[#1D4ED8] font-bold text-sm">
                            33%
                        </Text>
                    </View>
                    <View className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                        <View className="h-full bg-[#1D4ED8] rounded-full w-1/3" />
                    </View>
                </View>

                {/* Title Section */}
                <View className="mb-8">
                    <Text className="text-3xl leading-[40px] font-black text-slate-900 tracking-tight mb-3">
                        What is your main focus?
                    </Text>
                    <Text className="text-base text-slate-500 leading-relaxed">
                        Select all that apply to your heart health journey. We'll tailor your dashboard to match.
                    </Text>
                </View>

                {/* Goal Cards Grid */}
                <View className="flex-row flex-wrap justify-between">
                    {goals.map((item) => {
                        const isSelected = selectedGoals.includes(item.id);

                        // Full-width Row Layout (Post-Surgery Highlight)
                        if (item.layout === 'row') {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => toggleGoal(item.id)}
                                    activeOpacity={0.7}
                                    className={`w-full bg-white rounded-[24px] p-5 mb-4 flex-row items-center border-2 shadow-sm ${
                                        isSelected ? 'border-[#E11D48] shadow-rose-200' : 'border-transparent shadow-slate-100'
                                    }`}
                                >
                                    <View className={`w-14 h-14 rounded-2xl items-center justify-center mr-4 ${item.bgColor}`}>
                                        <MaterialCommunityIcons name={item.icon} size={28} color={item.iconColor} />
                                    </View>
                                    <View className="flex-1 pr-6">
                                        <Text className={`font-bold text-[16px] mb-1 ${isSelected ? 'text-slate-900' : 'text-slate-800'}`}>
                                            {item.title}
                                        </Text>
                                        <Text className="text-slate-500 text-[13px] leading-[18px]">
                                            {item.desc}
                                        </Text>
                                    </View>
                                    {/* Selection Indicator */}
                                    <View className="absolute top-5 right-5">
                                        <MaterialCommunityIcons 
                                            name={isSelected ? "check-circle" : "circle-outline"} 
                                            size={24} 
                                            color={isSelected ? "#E11D48" : "#CBD5E1"} 
                                        />
                                    </View>
                                </TouchableOpacity>
                            );
                        }

                        // Grid Column Layout (Standard Items)
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => toggleGoal(item.id)}
                                activeOpacity={0.7}
                                className={`w-[48%] bg-white rounded-[24px] p-5 mb-4 border-2 shadow-sm ${
                                    isSelected ? 'border-[#1D4ED8] bg-blue-50/30 shadow-blue-200' : 'border-transparent shadow-slate-100'
                                }`}
                            >
                                {/* Selection Indicator */}
                                <View className="absolute top-4 right-4 z-10">
                                    <MaterialCommunityIcons 
                                        name={isSelected ? "check-circle" : "circle-outline"} 
                                        size={22} 
                                        color={isSelected ? "#1D4ED8" : "#E2E8F0"} 
                                    />
                                </View>
                                
                                <View className={`w-12 h-12 rounded-2xl items-center justify-center mb-4 ${item.bgColor}`}>
                                    <MaterialCommunityIcons name={item.icon} size={24} color={item.iconColor} />
                                </View>
                                <Text className="font-bold text-slate-800 text-[15px] leading-tight mb-2">
                                    {item.title}
                                </Text>
                                <Text className="text-slate-500 text-[12px] leading-[16px]">
                                    {item.desc}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

            </ScrollView>

            {/* Floating Continue Button */}
            <View 
                className="absolute bottom-0 left-0 right-0 bg-[#F8FAFC]/95 border-t border-slate-200/50 px-6 pt-4"
                style={{ paddingBottom: Math.max(insets.bottom, 24) }} // Adjusts perfectly for modern iPhones
            >
                <TouchableOpacity
                    onPress={() => router.push('/personal_Info')}
                    disabled={selectedGoals.length === 0}
                    activeOpacity={0.8}
                    className={`h-14 rounded-full flex-row justify-center items-center shadow-md ${
                        selectedGoals.length > 0 ? 'bg-[#1D4ED8] shadow-blue-500/30' : 'bg-slate-200 shadow-transparent'
                    }`}
                >
                    <Text className={`font-bold text-lg ${selectedGoals.length > 0 ? 'text-white' : 'text-slate-400'}`}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}