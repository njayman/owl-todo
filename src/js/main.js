import 'bootstrap-icons/font/bootstrap-icons.css'
import '../scss/style.scss'
import * as owl from "@odoo/owl";
import Task from './components/tasks/Task';
import AddTask from './components/tasks/AddTask';
import createTaskStore from './store/tasks';
import useStore from './store'

const { Component, mount, xml } = owl;

class Root extends Component {
    static template = xml`
        <div class="container text-center">
            <div class="d-flex flex-column gap-2 align-items-center">
                <h1 class="p-1">Njay todo!</h1>
                <AddTask />
                <ul class="list-group">
                    <t t-foreach="store.tasks" t-as="task" t-key="task.id">
                        <Task task="task" />
                    </t>
                </ul>
            </div>
        </div>
    `;

    static components = { Task, AddTask };

    setup() {
        this.store = useStore()
    }
}

const env = {
    store: createTaskStore(),
}

mount(Root, document.body, { dev: true, env });
