<template>
  <div class="login-container">
    <div class="login-header">
      <h2>后台管理系统登录</h2>
    </div>
    <form class="login-form" action="your_login_script.php" method="POST">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit" class="login-button">登录</button>
    </form>
  </div>
</template>
<style scoped>
body {
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login-container {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.login-header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group input[type="text"],
.form-group input[type="password"] {
  width: 100%;
}

.login-button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
