<template>
  <div class="login-container d-flex align-items-center justify-content-center">
    <div class="card p-4 shadow" style="width: 22rem;">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="handleLogin">
        <!-- Username Input -->
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" v-model="username" id="username" class="form-control" placeholder="Enter your username" required />
        </div>

        <!-- Password Input -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" id="password" class="form-control" placeholder="Enter your password" required />
        </div>

        <!-- Remember Me Checkbox -->
        <div class="form-check mb-3">
          <input type="checkbox" v-model="rememberMe" id="rememberMe" class="form-check-input" />
          <label for="rememberMe" class="form-check-label">Remember Me</label>
        </div>

        <!-- Login Button -->
        <div class="d-grid mb-3">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>

        <!-- Google Login Button -->
        <div class="d-grid">
          <button type="button" @click="handleGoogleLogin" class="btn btn-outline-danger">
            <i class="fab fa-google"></i> Login with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false // State for "Remember Me" option
    };
  },
  methods: {
    handleLogin() {
      // Login logic
      alert(`Logging in with username: ${this.username}, Remember Me: ${this.rememberMe}`);
    },
    handleGoogleLogin() {
      // Google login logic
      alert('Google login triggered');
    }
  }
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  background-color: #f8f9fa; /* Light gray background */
}

.card {
  border-radius: 8px;
}

.btn-outline-danger {
  color: #ea4335;
  border-color: #ea4335;
}

.btn-outline-danger:hover {
  background-color: #ea4335;
  color: white;
}
</style>
