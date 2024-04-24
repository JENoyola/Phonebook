# Aplicación de Agenda Telefónica en React Native

Esta es una aplicación simple de React Native que sirve como agenda telefónica. La aplicación cuenta con autenticación, lo que permite a los usuarios iniciar sesión y acceder a sus contactos. Los usuarios pueden ver, agregar, editar y eliminar contactos, y todos los contactos se persisten en el almacenamiento del dispositivo.

# DEMO

  ![](https://s3.ezgif.com/tmp/ezgif-3-f3c4b859b9.gif)
  ![](https://s3.ezgif.com/tmp/ezgif-3-f3c4b859b9.gif)

## Características

- **Stack de Autenticación:**
  - Página de Inicio: Página inicial mostrada al usuario.
  - Página de Inicio de Sesión: Permite a los usuarios iniciar sesión en la aplicación.
  
- **Stack de Aplicación:**
  - Pantalla de Inicio: Muestra el directorio de contactos.
    - Ver contactos: Los usuarios pueden ver sus contactos.
    - Agregar contacto: Los usuarios pueden agregar nuevos contactos.
    - Editar contacto: Los usuarios pueden editar contactos existentes.
    - Eliminar contacto: Los usuarios pueden eliminar contactos.
  
- **Pantalla de Bienvenida:**
  - Se muestra al cambiar del Stack de Autenticación al Stack de Aplicación.

## Tecnologías Utilizadas

- React Native
- React Navigation
- Expo Cli (desarrollo rapido)
- AsyncStorage (para almacenar contactos localmente)
- Otras bibliotecas/frameworks relevantes

## Instalación

1. npm i expo-cli
2. Descargar app Expo Go desde el dispositivo a testear 
3. clonar repositorio
4. npx expo start *algunos casos npx expo start --tunnel --reset-cache*
5. Escanear el codigo QR
