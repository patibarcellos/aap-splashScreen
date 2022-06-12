import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  // state for activityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setAnimating(false);
      // Vefica se o id do usuario esta configurado ou nao
      //se nao tiver entao envia para Autenticação
      // senao envia para tela de Home

      AsyncStorage.getItem('user_id').then((value) => navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      );
    },5000);
  },[]);

  return(
    <View style={styles.container}>
      <Image
        source={require('../Image/AberturaII.png')}
        style={{width: '100%', resizeMode:'contain', margin: 30}} // alterei o valor de 90 para 100 ver como vai ficar qualquer coisa remover o margin para ver como fica
        />
        <ActivityIndicator
        animating={animating}
        color="#ffffff"
        size="large"
        style={styles.activityIndicator}
        />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator:{
      alignItems: 'center',
      height: 80,
  },
});