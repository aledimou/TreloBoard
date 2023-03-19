<template>
 <div >
    <draggable 
    v-model="columns" 
    group="columns" 
    :animation="150"
    handle=".drag-handle"
    item-key="id"
    class="flex gap-4 items-start"
    >   
    <template #item="{element: column}">
    <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
        <header class="flex font-bold mb-4">
            <DragHandle />
            {{column.title}}
        </header>
            <draggable 
            v-model="column.tasks" 
            :group="{name: 'tasks', pull: altKey? 'clone': true}" 
            handle=".drag-handle"
            :animation="150"
            item-key="id"
            > 
                <template #item="{element: task}">
                    <div>
                        <TrelloBoardTask             
                        :task="task"
                        />
                    </div>

                </template>
        </draggable>
        <footer>
            <button class="text-gray-500">+ Add a Card</button>
        </footer>
    </div>
    </template>
    </draggable>

 </div>
</template>

<script setup lang="ts">
import {Column, Task} from "../types/index.dto"
import {nanoid} from "nanoid"
import draggable from "vuedraggable"

    const columns = ref<Column[]>([
        {
            id: nanoid(),
            title: "Test for BA",
            tasks:  [
                {
                    id: nanoid(),
                    title: "test node update",
                    createdAt: new Date()
                }
            ]
        },
                {
            id: nanoid(),
            title: "Test Backlog",
            tasks:  [
                {
                    id: nanoid(),
                    title: "test functionality",
                    createdAt: new Date()
                },
                {
                    id: nanoid(),
                    title: "create test cases",
                    createdAt: new Date()
                },
                {
                    id: nanoid(),
                    title: "PLREF-459",
                    createdAt: new Date()
                },
                {
                    id: nanoid(),
                    title: "IMP-217",
                    createdAt: new Date()
                }
            ]
        },
                {
            id: nanoid(),
            title: "Test for BA",
            tasks:  [
                {
                    id: nanoid(),
                    title: "manual test",
                    createdAt: new Date()
                }
            ]
        },
                {
            id: nanoid(),
            title: "Test QA",
            tasks:  [
                {
                    id: nanoid(),
                    title: "run automated tests",
                    createdAt: new Date()
                }
            ]
        }
    ])

const altKey = useKeyModifier('Alt')
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>