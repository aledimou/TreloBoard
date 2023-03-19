<template>

  <div :title="task.createdAt.toLocaleDateString()"
  class=" flex task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px]">
     <DragHandle />
    <span>
        {{task.title}}
    </span>
  </div>
</template>

<script setup lang="ts">
    import { Task  } from "../types/index.dto";
defineProps<{
    task: Task
}>()
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