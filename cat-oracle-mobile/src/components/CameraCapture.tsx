import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function CameraCapture({ onCapture }: { onCapture: (photoUri: string) => void }) {
  const cameraRef = useRef<RNCamera | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const takePicture = async () => {
    if (cameraRef.current && isCameraReady) {
      try {
        const options = { quality: 0.5, base64: false };
        const data = await cameraRef.current.takePictureAsync(options);
        onCapture(data.uri);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onCameraReady={() => setIsCameraReady(true)}
        captureAudio={false}
      />
      <Button title="Capture" onPress={takePicture} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
