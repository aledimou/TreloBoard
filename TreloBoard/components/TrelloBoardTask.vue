<template>

  <div :title="task.createdAt.toLocaleDateString()"
  class=" flex task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px]"
  @focus="focused=true"
  @blur="focused=false"
  tabindex="0">
     <DragHandle />
    <span>
        {{task.title}}
    </span>
  </div>
</template>

<script setup lang="ts">
    import { Task, ID  } from "../types/index.dto";
const props = defineProps<{
    task: Task
}>();

const focused = ref(false);


const emit = defineEmits<{
    e: "delete", args: ID
}>();

onKeyStroke("Backspace", (e)=>{
    if (focused.value) {
        emit("delete", props.task.id)
    }
})



</script>

<style>
    .sortable-drag .task{
        transform: rotate(5deg);
    }

    .shortable-ghost{
        position: relative;

    }

    .shortable-ghost .task::after{
        content: "";
        @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
    }
</style>