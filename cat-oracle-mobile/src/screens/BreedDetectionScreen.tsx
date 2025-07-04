import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CameraCapture from '../components/CameraCapture';

export default function BreedDetectionScreen() {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const handleCapture = (uri: string) => {
    setPhotoUri(uri);
    // TODO: Integrate GPT-4 Vision API call for breed detection here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat Breed Detection</Text>
      <CameraCapture onCapture={handleCapture} />
      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.photo} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  photo: {
    marginTop: 20,
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});
