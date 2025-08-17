import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Tela não encontrada</Text>
        <Text style={styles.subtitle}>
          A página que você está procurando não existe ou foi movida.
        </Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Voltar para a tela inicial</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#007bff",
    borderRadius: 8,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
