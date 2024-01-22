<template>
  <Layout>
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1500, y: 300 }"
      :rowSelection="rowSelection"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <span @click="handleForm(column)">action</span>
          <a-button type="primary" primary @click="handleEdit">编辑</a-button>

          <a-button type="primary" danger>删除</a-button>
        </template>
      </template>
    </a-table>
  </Layout>
  <userModal :isModalVisible="isModalVisible" @close="hideModal"></userModal>
</template>
<script setup lang="ts">
import Layout from "@/views/layouts/nav.vue";
import { ref } from "vue";

//   import { Modal } from 'ant-design-vue';
import type { TableColumnsType } from "ant-design-vue";
import userModal from "./userModal/userModal.vue";
import { useModal } from '../../components/Modal/hooks/useModal';
// const [modal, contextHolder] = Modal.useModal();
const { isModalVisible, showModal, hideModal } = useModal();
const selectedRowKeys = ref([]);
const selectedRowsData = ref([]);
// const userModalRef = ref(null);
const columns: TableColumnsType = [
  {
    title: "姓名",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  { title: "年龄", width: 100, dataIndex: "age", key: "age", fixed: "left" },
  { title: "住址", dataIndex: "address", key: "1", width: 150 },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 100,
  },
];
interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const handleForm = (col: Object) => {
  console.log(col);
};
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    selectedRowKeys.value = selectedRowKeys;
    selectedRowsData.value = selectedRows;
    console.log(selectedRowKeys.value);
  },
};
const handleEdit = () => {
    showModal();
  //打开弹窗 交给子组件处理
//   if (userModalRef.value) {
//     userModalRef.value.showModal();
  }
const handleDelete = () => {
  console.log(2);
};
</script>
<style scoped></style>
