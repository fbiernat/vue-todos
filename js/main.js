new Vue({
    el: '#app',
    data: {
        tasks: [
            {id: 0, name: 'Test task', isDone: false},
            {id: 1, name: 'Test done task', isDone: true},
            {id: 2, name: 'Another task to do', isDone: false},
            {id: 3, name: 'New task', isDone: false}
        ],
        taskCount: 4,
        itemsLeft: 3,
        nextId: 4
    },
    methods: {
        addTask(event) {
            console.log(event);
            var taskName = event.target.value;
            if (taskName !== '') {
                var task = {id: this.nextId, name: taskName, isDone: false};
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

            // this.tasks[taskIdx].isDone = this.tasks[taskIdx].isDone ? false : true;
            if (this.tasks[taskIdx].isDone === true) {
                this.tasks[taskIdx].isDone = false;
                this.itemsLeft++;
            } else {
                this.tasks[taskIdx].isDone = true;
                this.itemsLeft--;
            }
            // console.log(taskIdx);
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
        }
    }
});