import * as owl from "@odoo/owl";
import useStore from "../../store";

const { Component, xml, useState } = owl;

class AddTask extends Component {
    state = useState({
        taskname: ""
    });
    handleSubmit(e) {
        e.preventDefault();
        this.store.addTask(this.state.taskname);
        this.state.taskname = '';
    }

    static template = xml/* xml */ `
    <div class="input-group add-task-input">
        <input class="form-control" placeholder="Add a new task" t-model="state.taskname" />
        <button class="btn btn-outline-dark" t-on-click="handleSubmit"><i class="bi bi-plus"></i> Add</button>
    </div>
    `

    setup() {
        this.store = useStore();
    }

}

export default AddTask;
