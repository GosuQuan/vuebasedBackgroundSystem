<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="SystemTitle">
        <h2>后台管理系统</h2>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        @click="handleClick(selectedKeys)"
        theme="dark"
        mode="inline"
      >
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
    <a-layout>
      <a-layout-header
        style="background: #fff; display: flex; justify-content: space-between"
      >
        <div>
          <svg
            t="1704700062620"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2318"
            width="20px"
            height="20px"
          >
            <path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="2319"></path>
            <path
              d="M288 96a192 192 0 1 0 0 384H448a32 32 0 0 0 32-32v-160a192 192 0 0 0-192-192zM448 544h-160a192 192 0 1 0 192 192V576a32 32 0 0 0-32-32zM736 96a192 192 0 0 0-192 192V448a32 32 0 0 0 32 32h160a192 192 0 0 0 0-384z"
              fill="#111111"
              p-id="2320"
            ></path>
            <path
              d="M736 544H576a32 32 0 0 0-32 32v160a192 192 0 1 0 192-192z"
              fill="#000000"
              p-id="2321"
            ></path>
          </svg>
        </div>
        <div>123right</div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
const router = useRouter();
const currentRoute = useRoute();
const handleClick = (e) => {
  console.log(currentRoute.name)
};
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.SystemTitle {
  color: rgb(255, 255, 255);
  height: 32px;
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
