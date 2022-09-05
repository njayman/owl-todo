import * as owl from "@odoo/owl";
import useStore from "../../store";

const { Component, xml } = owl;

class Task extends Component {
    static template = xml`
        <div class="list-group-item d-flex justify-content-between align-items-center gap-2 tasks" t-att-class="props.task.isCompleted ? 'list-group-item-success' : ''">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" t-att-checked="props.task.isCompleted" t-on-click="() => store.toggleTask(props.task)" id="props.task.id" />
                <label class="form-check-label" for="props.task.id"><t t-esc="props.task.text" /></label>
            </div>
            <span t-on-click="() => store.deleteTask(props.task.id)"><i class="bi bi-trash"></i></span>
        </div>
    `
    static props = ["task"];

    setup() {
        this.store = useStore();
    }
}

export default Task;
