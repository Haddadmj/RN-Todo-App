import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length, title: task, completed: false }]);
  };

  const deleteTask = (id) => {
    const newArr = tasks.filter((task) => task.id != id);
    setTasks(newArr);
  };

  return (
    <SafeAreaView>
      <Text style={styles.header}>Tasks List</Text>
      <TaskInput addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} deleteTask={deleteTask} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { margin: 16, fontSize: 30, fontWeight: "bold" },
});
