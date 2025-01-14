interface User {
  email: string;
}

export const useAuth = () => {
  const isAuthenticated: Ref<boolean> = ref(false);
  const user: Ref<User | null> = ref(null);

  const restoreSession = () => {
    if (import.meta.client) {
      const auth = localStorage.getItem("isAuthenticated");
      const storedUser = localStorage.getItem("user");
      if (auth === "true") {
        isAuthenticated.value = true;
        user.value = storedUser ? (JSON.parse(storedUser) as User) : null;
      }
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    if (email === "test@example.com" && password === "123456") {
      isAuthenticated.value = true;
      user.value = { email };
      if (import.meta.client) {
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
    if (import.meta.client) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    }
  };

  return { isAuthenticated, user, login, logout, restoreSession };
};
