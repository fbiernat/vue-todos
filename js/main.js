new Vue({
    el: '#app',
    data: {
        tasks: [
            { id: 0, name: 'Test task', isDone: false },
            { id: 1, name: 'Test done task', isDone: true },
            { id: 2, name: 'Another task to do', isDone: false },
            { id: 3, name: 'New task', isDone: false }
        ],
        taskList: [],
        activeView: 0,
        taskCount: 4,
        itemsLeft: 3,
        nextId: 4
    },
    methods: {
        addTask(event) {
            var taskName = event.target.value;
            if (taskName !== '') {
                var task = { id: this.nextId, name: taskName, isDone: false };
                this.tasks.unshift(task);
                this.itemsLeft++;
                this.nextId++;
                event.target.value = '';
            }
        },
        markTaskAsDone(taskId) {
            var taskIdx = null;
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id === taskId) {
                    taskIdx = i;
                }
            }
            if (this.tasks[taskIdx].isDone === true) {
                this.tasks[taskIdx].isDone = false;
                this.itemsLeft++;
            } else {
                this.tasks[taskIdx].isDone = true;
                this.itemsLeft--;
            }
        },
        clearCompleted() {
            var clearedTasks = [];
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].isDone === false) {
                    clearedTasks.push(this.tasks[i]);
                } else {
                    continue;
                }
            }
            this.tasks = clearedTasks;
            if (this.activeView == 0) {
                this.showAllTasks();
            } else if (this.activeView == 1) {
                this.showActiveTasks();
            } else if (this.activeView == 2) {
                this.showCompletedTasks();
            }
        },
        showAllTasks() {
            this.activeView = 0;
            this.taskList = this.tasks;
        },
        showActiveTasks() {
            this.activeView = 1;
            this.taskList = this.tasks.filter(function(el) {
                return !el.isDone;
            });
        },
        showCompletedTasks() {
            this.activeView = 2;
            this.taskList = this.tasks.filter(function(el) {
                return el.isDone;
            });
        },
        isActiveView(btnId) {
            return (btnId == this.activeView);
        }
    },
    beforeMount() {
        this.taskCount = this.tasks.length;
        this.nextId = this.tasks.length;
        this.showAllTasks();
    }
});