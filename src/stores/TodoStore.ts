import {observable, computed, reaction, action, toJS} from "mobx";
import TodoModel from "../models/TodoModel";
import uuidv4 from "uuid/v4";
import {ITodoTask} from "../types/ITodoTask";

export default class TodoStore {
  @observable todos: TodoModel[] = [];
  @observable isDirty = false;
  @observable showNewTodoDialog = false;


  constructor() {
    reaction(() => this
        .todos
        .filter((todo) => todo.toJS()),
      () => {
        const todos = this.todos.map(todo => todo.toJS());
        localStorage.setItem("todos", JSON.stringify(todos));
        this.isDirty = true;
      });

    const generateTodo = (description: string, impact: number, urgency: number, easiness: number) => ({
      description,
      impact,
      urgency,
      easiness,
      priority: impact + urgency + easiness,
      done: false
    });

    this.todos = JSON
      .parse(localStorage.getItem("todos") || "[]")
      .map((item: ITodoTask) => TodoModel.fromJS(this, item));

    if (!this.todos.length) {
      this.todos = [
        generateTodo("Buy Flowers", 3, 6, 1),
        generateTodo("Call Customer", 9, 9, 7),
        generateTodo("Feed The Cat", 8, 2, 8)
      ].map((item: ITodoTask) => TodoModel.fromJS(this, item));
    }
  }

  fromJS(array: ITodoTask[]) {
    const todoStore = new TodoStore();
    todoStore.todos = array.map((item: ITodoTask) => TodoModel.fromJS(todoStore, item));
    return todoStore;
  }

  @action
  sortTodos() {
    const dirtyState = this.isDirty;

    this.todos = [
      ...this.todos
        .filter((todo) => !todo.done)
        .sort((task1, task2) => (task2.priority) - (task1.priority)),
      ...this.todos
        .filter((todo) => todo.done)
        .sort((task1, task2) => (task2.priority) - (task1.priority))

    ];

    //we don't want a sorting operation to revoke another recalculation
    this.isDirty = dirtyState;
  }

  @action
  addTodo(title: string, urgency: number, impact: number, easiness: number) {
    this.todos.push(new TodoModel(this, title, urgency, impact, easiness, false));
  }

  @action
  removeTodo(todo: TodoModel) {
    this.todos = this.todos.filter((e) => e !== todo);
  }

  @action
  emptyTodos() {
    this.todos = [];
  }

  toJS() {
    return this.todos.map(todo => todo.toJS());
  }

}
