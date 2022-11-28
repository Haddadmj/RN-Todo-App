import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TaskItem({ task, deleteTask }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.title}</Text>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <MaterialIcons name="delete" color="black" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    width: "90%",
  },
});
