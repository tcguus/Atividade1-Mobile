import React from "react";
import { View, Text, StyleSheet, Modal, ActivityIndicator } from "react-native";

interface LoadingModalProps {
  visible: boolean;
  text: string;
}

const LoadingModal = ({ visible, text }: LoadingModalProps) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 120,
    width: 200,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoadingModal;
