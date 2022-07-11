import { StyleSheet, Text, View, TouchableOpacity, Image, Modal,Button } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';


const TypeCamera = ({setOpenCamera,setPhoto}) => {
  const carRef = useRef(null)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    }
   let newPhoto = await carRef.current.takePictureAsync(options)
   setOpenCamera(false)
   setPhoto(newPhoto.uri)
  }
 
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={carRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => takePicture()}>
            <Text style={styles.text}> Pic </Text>
          </TouchableOpacity> 
        </View>
      </Camera>
    </View>
  )
}

export default TypeCamera

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});