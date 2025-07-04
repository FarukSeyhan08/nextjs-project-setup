import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AudioRecorder from '../components/AudioRecorder';

export default function MeowInterpretationScreen() {
  const [audioUri, setAudioUri] = useState<string | null>(null);

  const handleRecordComplete = (uri: string) => {
    setAudioUri(uri);
    // TODO: Integrate GPT-4 Vision API call for meow interpretation here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meow Interpretation</Text>
      <AudioRecorder onRecordComplete={handleRecordComplete} />
      {audioUri && (
        <Text style={styles.audioInfo}>Recorded audio: {audioUri}</Text>
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
  audioInfo: {
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
  },
});
