<template>
  <div class="relative flex items-center justify-center min-h-screen">
    <div
      class="relative z-10 w-full max-w-md px-6 py-8 bg-black bg-opacity-70 border border-gray-700 rounded"
    >
      <p v-if="message" class="text-white font-semibold flex justify-center">
        {{ message }}
      </p>
      <h1 class="mb-6 text-3xl font-semibold text-white">Inicia sesión</h1>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label
            for="email"
            class="block mb-1 text-sm font-medium text-gray-300"
          >
            Email o número de celular
          </label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            class="w-full px-3 py-2 text-sm text-white placeholder-gray-400 bg-gray-800 bg-opacity-70 border border-gray-600 rounded focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            placeholder="Ingresa tu correo o teléfono"
            required
          >
        </div>

        <div class="mb-4">
          <label
            for="password"
            class="block mb-1 text-sm font-medium text-gray-300"
          >
            Contraseña
          </label>
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            class="w-full px-3 py-2 text-sm text-white placeholder-gray-400 bg-gray-800 bg-opacity-70 border border-gray-600 rounded focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            placeholder="Tu contraseña"
            required
          >
        </div>

        <button
          type="submit"
          class="w-full py-2 mb-4 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Iniciar sesión
        </button>

        <div
          class="flex items-center justify-between mb-4 text-sm text-gray-400"
        >
          <div>
            <input
              id="rememberMe"
              v-model="rememberMe"
              name="rememberMe"
              type="checkbox"
              class="mr-1 rounded border-gray-400 focus:ring-0"
            >
            <label for="rememberMe">Recuérdame</label>
          </div>
          <div>
            <a href="#" class="hover:underline"> ¿Olvidaste la contraseña? </a>
          </div>
        </div>

        <div class="mb-2 text-sm text-gray-400">
          ¿Primera vez en Netflix?
          <a href="#" class="text-white hover:underline"> Suscríbete ahora. </a>
        </div>

        <div class="text-xs text-gray-400">
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot.
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const message = ref(route.query.message);
const email = ref(null);
const password = ref(null);
const rememberMe = ref(false);
const router = useRouter();

const { login } = useAuth();

const handleSubmit = async () => {
  try {
    await login(email.value, password.value);
    router.push("/home");
  } catch (error) {
    alert(error.message);
  }
};
</script>
