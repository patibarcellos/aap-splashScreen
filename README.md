# aap-splashScreen
Projetinho para praticar o uso de splash - com expo.
Atualmente não está funcionando a parte da API. Precisa ser feito uma para registro e login.



#### Instalação das dependencias:

1. ##### Para Navegação React

```
expo install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
```

2. ##### Para navegação drawer

```
expo install @react-navigation/drawer
expo install react-native-gesture-handler react-native-reanimated
```

3. ##### Para navegação de pilha

```
expo install @react-navigation/stack
```

4. ##### Instale async-storage para usar o AsyncStorage

```
expo install @react-native-async-storage/async-storage
```

5. ##### Outras bibliotecas de suporte para navegação de reação

```
expo install @react-native-masked-view/masked-view -- VER SE PRECISA MESMO NO PROJETO
```



Para o projeto rodar corretamente é preciso utilizar uma API de autenticação, sera utilizado a API sugerida do próprio aboutreact .





Encontrei alguns problemas para rodar o projeto

Tentei limpar cache e reinstalar as bibliotecas que esta reclamando. 

![image-20220611214515025](C:\Users\barce\AppData\Roaming\Typora\typora-user-images\image-20220611214515025.png)

Tentei instalar o react-native-community/async-storage , parou de reclamar, mas agora fica avisando que essa biblioteca é absoleta que devo atualizar pra biblioteca que eu tava usando mas que tava dando problema.



precisei limpar cache, desinstalar o node-modules, apaguei o package.json e o yarn.lock.

Depois mandei um yarn install e instalei os pacotes que eu precisei, os listados ali em cima.

precisei adicionar no babel.config.js o seguinte:

```
 plugins: ['react-native-reanimated/plugin'],
```

ficando dessa forma:

![image-20220611223440227](C:\Users\barce\AppData\Roaming\Typora\typora-user-images\image-20220611223440227.png)



precisa reiniciar. 

Limpar cache com :

```
expo r -c
```





projeto:
https://aboutreact.com/react-native-login-and-signup/#comment-33962
