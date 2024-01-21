<template>
  <div class="container">
    <div class="sidebar">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo">123</div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>User</span>
              </span>
            </template>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Team</span>
              </span>
            </template>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
    </div>

    <div class="main">
      <div class="header">内容区域头部</div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup> </script>
<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
.container {
  display: flex;
}
.sidebar {
  width: 200px;
  background-color: #0f0e0e;
  height: 100vh; /* 视口高度 */
}
.header {
  padding: 20px;
  background-color: #4e53b3;
  font-size: 20px;
  font-weight: bold;
}
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.content {
  background-color: #c75f5f;
  padding: 20px;
  flex-grow: 1;
}
</style>
