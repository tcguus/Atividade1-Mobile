import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type DetailRowProps = {
  label: string;
  value: string;
};

type User = {
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

interface UserAccordionProps {
  user: User;
  isExpanded: boolean;
  onToggle: () => void;
}

const DetailRow = ({ label, value }: DetailRowProps) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const UserDetails = ({ user }: { user: User }) => (
  <View style={styles.detailsContainer}>
    <DetailRow label="Nome de Usuário:" value={user.username} />
    <DetailRow label="Email:" value={user.email} />
    <DetailRow label="Telefone:" value={user.phone} />
    <DetailRow label="Website:" value={user.website} />
    <Text style={styles.sectionTitle}>Endereço</Text>
    <DetailRow label="Rua:" value={user.address.street} />
    <DetailRow label="Complemento:" value={user.address.suite} />
    <DetailRow label="Cidade:" value={user.address.city} />
    <DetailRow label="CEP:" value={user.address.zipcode} />
    <Text style={styles.sectionTitle}>Empresa</Text>
    <DetailRow label="Nome:" value={user.company.name} />
    <DetailRow label="Slogan:" value={user.company.catchPhrase} />
    <DetailRow label="Ramo:" value={user.company.bs} />
  </View>
);

const UserAccordion = ({ user, isExpanded, onToggle }: UserAccordionProps) => {
  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onToggle();
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.header} onPress={handleToggle}>
        <Text style={styles.name}>{user.name}</Text>
        <MaterialIcons
          name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {isExpanded && <UserDetails user={user} />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 14,
    color: "#555",
    flex: 1,
    textAlign: "right",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginTop: 12,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 4,
  },
});

export default UserAccordion;
