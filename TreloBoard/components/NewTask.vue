<template>
  <div>
    <textarea 
    v-model="title"
    @keydown.tab="createTask"
    @keydown.enter="createTask"
    :class="{
        'h-7': !focused,
        'h-20': focused,
        'min-w-[220px]': true,
        'rounded': true,
    }"
    style="outline: none !important"
    @focus="focused=true"
    @blur="focused=false"
    :placeholder="!focused? '+ Add a Card': 'Enter a title for this card'"/>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../types/index.dto"
import {  nanoid } from "nanoid";


const emit = defineEmits<{
    e: "add", args: Task
}>();

const focused = ref(false);
const title = ref("");


function createTask(event: Event) {
    if (title.value.trim()) {
        event.preventDefault();
        emit("add", {
            title: title.value.trim(),
            id: nanoid(),
            createdAt: new Date()
        }as Task)
    }

    title.value="";
}

</script>

<style>

</style>