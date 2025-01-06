export const useAuth = () => {
  const isAuthenticated = useState("isAuthenticated", () => false);
  const user = useState("user", () => null);

  const restoreSession = () => {
    if (process.client) {
      const auth = localStorage.getItem("isAuthenticated");
      const storedUser = localStorage.getItem("user");
      if (auth === "true") {
        isAuthenticated.value = true;
        user.value = JSON.parse(storedUser);
      }
    }
  };

  const login = async (email, password) => {
    if (email === "test@example.com" && password === "123456") {
      isAuthenticated.value = true;
      user.value = { email };
      if (process.client) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(user.value));
      }
      return true;
    } else {
      throw new Error("Credenciales incorrectas");
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.value = null;
    if (process.client) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    }
  };

  return { isAuthenticated, user, login, logout, restoreSession };
};
