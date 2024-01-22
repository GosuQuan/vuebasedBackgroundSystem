import { ref } from 'vue';

export function useModal() {
  const isModalVisible = ref(false);

  function showModal() {
    isModalVisible.value = true;
  }

  function hideModal() {
    isModalVisible.value = false;
  }

  return { isModalVisible, showModal, hideModal };
}