export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated, restoreSession } = useAuth();

  if (process.client) {
    restoreSession();
  }

  if (!isAuthenticated.value && to.path !== "/") {
    return navigateTo({
      path: "/",
      query: { message: "Debe iniciar sesión para acceder" },
    });
  }
});
