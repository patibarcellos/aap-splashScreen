
import React from 'react';
import { StyleSheet, Alert, Text, View} from 'react-native';

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomSideBarMenu = (props) =>{
    return(
        <View style={stylesSidebar.sideMenuContainer}>
            <View style={stylesSidebar.profileHeader}>
                <View style={stylesSidebar.profileHeaderPicCircle}>
                    <Text style={{ fontSize: 25, color:'#307ecc'}}>
                        {'Teste do custom side bar que eu nao sei onde fica'.char(0)}
                    </Text>
                </View>
                <Text style={stylesSidebar.profileHeaderText}>
                    Texto que eu nao sei onde fica
                </Text>
            </View>

            <View style={stylesSidebar.profileHeaderLine}/>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
                <DrawerItem
                    label={({color}) =>
                        <Text style={{color:'#d8d8d8d8'}}>
                        Logout
                        </Text>
                    }
                    onPress={() => {
                        props.navigation.toggleDrawer();
                        Alert.alert(
                            'Logout',
                            'Are you sure? You want to logout?',
                            [
                                {
                                    text:'cancelar',
                                    onPress: () => {
                                        return null;
                                    },                           
                                },
                                {
                                    text: 'Confirmar',
                                    onPress: () => {
                                        AsyncStorage.clear();
                                        props.navigation.replace('Auth');
                                    },
                                },        
                            ],
                            {cancelable: false},
                        );
                    }}
                />
            </DrawerContentScrollView>
        </View>
    );
};

const stylesSidebar = StyleSheet.create({
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#307ecc',
      paddingTop: 40,
      color: 'white',
    },
    profileHeader: {
      flexDirection: 'row',
      backgroundColor: '#307ecc',
      padding: 15,
      textAlign: 'center',
    },
    profileHeaderPicCircle: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      color: 'white',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileHeaderText: {
      color: 'white',
      alignSelf: 'center',
      paddingHorizontal: 10,
      fontWeight: 'bold',
    },
    profileHeaderLine: {
      height: 1,
      marginHorizontal: 20,
      backgroundColor: '#e2e2e2',
      marginTop: 15,
    },
  });