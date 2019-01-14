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
        this.isDirty = true;
      });
  }

  static fromJS(array: ITodoTask[]) {
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
  addTodo(title: string, urgency: number, importance: number) {
    this.todos.push(new TodoModel(this, uuidv4(), title, urgency, importance, false));
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
