import React from 'react';
import { View, Text, SafeAreaView} from 'react-native';

const SettingsScreen  = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <View 
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text 
                        style={
                            {
                                fontSize: 20,
                                textAlign: 'center',
                                marginBottom: 16,
                            }
                        }>
                            exemplo de splash , login e Sign Up no react native - Settings
                            {'\n\n'}
                            Este é a tela de home
                        </Text>
                </View>
                <Text style={{
                    fontSize: 18,
                    textAlign:'center',
                    color:'grey',
                }}>
                    Exemplo de splash, login, registro  {'\n'} React Native - Settings
                </Text>
                <Text style={{
                    fontSize: 16,
                    alignItems:'center',
                    color:'grey'
                }}>
                    com base no site www.aboutreact.com.
                </Text>
            </View>
        </SafeAreaView>
    );
};
export default SettingsScreen ;