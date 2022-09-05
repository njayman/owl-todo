import { reactive } from "@odoo/owl";

class TaskList {
    nextid = 1;
    tasks = [];

    addTask(text) {
        if (text.length === 0) {
            return alert("Task cannot be empty");
        }

        return this.tasks.push({
            id: this.nextid++,
            text: text,
            isCompleted: false
        })
    }

    toggleTask(task) {
        task.isCompleted = !task.isCompleted;
    }

    deleteTask(tid) {
        const idx = this.tasks.findIndex((t) => t.id === tid);
        this.tasks.splice(idx, 1);
    }
}

export default function createTaskStore() {
    return reactive(new TaskList());
}
