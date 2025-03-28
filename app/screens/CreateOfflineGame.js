import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function CreateOfflineGame({navigation}) {
    return (
        <SafeAreaView> <Text> CreateOfflineGame</Text>
        <Text onPress={()=> navigation.navigate("Search")}> Go back</Text>
        </SafeAreaView>
    );
}

export default CreateOfflineGame;