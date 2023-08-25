import { ref } from "vue";

type UniqueId = string;

export function useUniqueId() {
  const uniqueId = ref<UniqueId>("");

  uniqueId.value = Math.random().toString(36).slice(2);

  return {
    uniqueId,
  };
}
