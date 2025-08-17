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
import UserAccordion from "../../components/UserAccordion";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

export default function ExploreScreen() {
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const {
    data: users,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const handleToggleAccordion = (id: number) => {
    setExpandedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((currentId) => currentId !== id)
        : [...currentIds, id]
    );
  };

  const handleRefetch = () => {
    setExpandedIds([]);
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
            <UserAccordion
              user={item}
              isExpanded={expandedIds.includes(item.id)}
              onToggle={() => handleToggleAccordion(item.id)}
            />
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
