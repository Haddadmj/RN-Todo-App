import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.textField}
        placeholder="Task Title"
        value={task}
        onChangeText={(e) => setTask(e)}
      />
      <TouchableOpacity
        onPress={() => {
          addTask(task);
          setTask("");
        }}
      >
        <MaterialIcons name="add" size={24} color="black" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textField: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 24,
    minHeight: 40,
    padding: 8,
    width: "90%",
  },
});
