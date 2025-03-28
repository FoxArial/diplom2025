import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ProfileScreen({navigation}) {
    return (
        <SafeAreaView> <Text> Settinggg</Text>
        <Text onPress={()=> navigation.navigate("Search")}> Go back</Text>
        </SafeAreaView>
    );
}

export default ProfileScreen;