import {observable, computed, reaction, action} from "mobx";
import TodoModel from "../models/TodoModel";
import uuidv4 from "uuid/v4";
import {ITodoTask} from "../types/ITodoTask";


export default class TodoStore {
  @observable todos: TodoModel[] = [];

  @computed get activeTodoCount() {
    return this.todos.reduce(
      (sum, todo) => sum + (todo.done ? 0 : 1),
      0
    );
  }

  @computed get completedCount() {
    return this.todos.length - this.activeTodoCount;
  }

  static fromJS(array: ITodoTask[]) {
    const todoStore = new TodoStore();
    todoStore.todos = array.map((item: ITodoTask) => TodoModel.fromJS(todoStore, item));
    return todoStore;
  }

  subscribeServerToStore() {
    reaction(
      () => this.toJS(),
      todos => window.fetch && fetch("/api/todos", {
        method: "post",
        body: JSON.stringify({todos}),
        headers: new Headers({"Content-Type": "application/json"})
      })
    );
  }

  @action
  addTodo(title: string, urgency: number, importance: number) {
    this.todos.push(new TodoModel(this, uuidv4(), title, urgency, importance, false));
  }

  @action
  toggleAll(checked: boolean) {
    this.todos.forEach(
      (todo) => todo.done = checked
    );
  }

  @action
  clearCompleted() {
    this.todos = this.todos.filter(
      todo => !todo.done
    );
  }

  toJS() {
    return this.todos.map(todo => todo.toJS());
  }
}
