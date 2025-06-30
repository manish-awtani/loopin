import { View, Text, TextInput, Button, KeyboardAvoidingView, SafeAreaView, Platform, Pressable } from 'react-native'
import React, { useState } from 'react'

const NewPostScreen = () => {
    const [text, setText] = useState('')
    return (
        <SafeAreaView>
            <KeyboardAvoidingView 
            className='flex-1'
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
            >
                <Text className='text-white text-lg font-bold'>username</Text>
                <View>
                    <Text>NewPostScreen</Text>
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder='What is on your mind?'
                        placeholderTextColor='gray'
                        className='text-white text-lg'
                        multiline
                        numberOfLines={4}
                    />
                    <View className='mt-auto'>
                        <Pressable
                            onPress={() => {}}
                            className={` 'bg-white/50' p-3 px-6 self-end rounded-full`}
                          
                        >
                            <Text className='text-black font-bold'>Post</Text>
                        </Pressable>
                    </View>                
                    </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default NewPostScreen