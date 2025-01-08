export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated, restoreSession } = useAuth();

  if (import.meta.client) {
    restoreSession();
  }

  if (!isAuthenticated.value && to.path !== "/") {
    return navigateTo({
      path: "/",
      query: { message: "Debe iniciar sesión para acceder" },
    });
  }
});
