import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import LoadingModal from "../../components/LoadingModal";

interface User {
  id: number;
  name: string;
  email: string;
  address: { city: string };
}

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

export default function UserListScreen() {
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const {
    data: users,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const handleRefetch = () => {
    setShowLoadingModal(true);
    refetch();
    setTimeout(() => {
      setShowLoadingModal(false);
    }, 2000);
  };

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Erro ao carregar usuários</Text>
        <TouchableOpacity style={styles.button} onPress={handleRefetch}>
          <Text style={styles.buttonText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LoadingModal
        visible={isLoading || showLoadingModal}
        text="Carregando usuários..."
      />

      <TouchableOpacity style={styles.button} onPress={handleRefetch}>
        <Text style={styles.buttonText}>Atualizar Lista</Text>
      </TouchableOpacity>

      {!isLoading && (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.city}>{item.address.city}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  city: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
