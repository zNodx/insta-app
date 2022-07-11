import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Button, TextInput } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import TypeCamera from '../components/Camera';
export default  AppPhoto = () => {
  const [photo, setPhoto] = useState(false)
  const [openCamera, setOpenCamera] = useState(false)
  const [comment, setComment] = useState("")
  const [hasPermission, setHasPermission] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  return(
    <>
    { openCamera ? 
      <TypeCamera setOpenCamera={setOpenCamera} setPhoto={setPhoto} />
    :
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        {photo && <Image source={{ uri: photo }} style={{ width: 300, height: "100%" }} />}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button,{backgroundColor: "green"}]} onPress={() => pickImage()}>
          <Text style={{color:'#fff'}}>
            Select a Picture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenCamera(true)} style={[styles.button,{backgroundColor: "red"}]}>
          <Text style={{color:'#fff'}}>
            Take a Picture
          </Text>
        </TouchableOpacity>
      </View>
      { photo && 
        <View style={styles.commentContainer}>
          <TextInput
            placeholder='dê uma descrição a sua postagem.'
            value={comment}
            style={styles.commentField}
            onChangeText={comment => setComment(comment)}
          />
          <TouchableOpacity onPress={() => {}} style={[styles.buttonSave,{backgroundColor: "blue"}]}>
            <Text style={{color:'#fff'}}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      }
    </View>
    }
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  imgContainer: {
    flex: 1,
    backgroundColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1/2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  commentContainer:{
    flex: 1/2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
  },
  commentField:{
    width: "85%"
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    height: 40,
    width: '40%',
    borderRadius: 5,

  },
  buttonSave: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    height: 40,
    borderRadius: 5,
    width: '15%'
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
// {
//   // previewVisible && 
//   // <Modal
//   // animationType='slide'
//   // transparent={false}
//   // visible={previewVisible}
//   // >
//   //   <View style={styles.container}>
//   //     <Image source={{uri:photo.uri}} style={{width: '100%', height: 500}}/>
//   //     <TouchableOpacity
//   //     style={styles.button}
//   //     onPress={() => setPreviewVisible(false)}>
//   //     <Text style={[styles.text,{color: '#000'}]}> Back </Text>
//   //   </TouchableOpacity> 
//   //   </View>
//   // </Modal>
// }