<template>
  <div class="container">
    <div class="sidebar">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo">这是后台管理系统</div>
        <a-menu
          :trigger="null"
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="inline"
          @click="handleClick(selectedKeys)"
        >
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>工作台</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>用户管理</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>三个小模块</span>
              </span>
            </template>
            <a-menu-item key="3">权限管理</a-menu-item>
            <a-menu-item key="4">树形结构</a-menu-item>
            <a-menu-item key="5">拖拽列表</a-menu-item>
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
<script setup lang="ts">
import { ref, nextTick } from "vue";
import { useRouter } from "vue-router";
const selectedKeys = ref(["1"]);
const router = useRouter();
const handleClick = (e: any) => {
  selectedKeys.value = e;

  nextTick(() => {
    console.log(selectedKeys.value); // 现在应该显示最新的值

    if (selectedKeys.value.includes("2")) {
      router.push("/user");
    }
  });
};
</script>
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
  background-color: rgba(0, 0, 0, 0.88);
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
.logo {
  color: white;
}
</style>
