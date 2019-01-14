import {computed, observable} from "mobx";
import TodoStore from "../stores/TodoStore";
import {ITodoTask} from "../types/ITodoTask";

export default class TodoModel {
  store: TodoStore;
  id: string;
  @observable description: string;
  @observable urgency: number;
  @observable importance: number;
  @observable done: boolean;


  constructor(store: TodoStore, id: string, description: string, urgency: number, importance: number, done: boolean) {
    this.store = store;
    this.id = id;
    this.urgency = urgency;
    this.importance = importance;
    this.description = description;
    this.done = done;
  }

  @computed get priority() {
    return this.importance + this.urgency;
  }

  static fromJS(store: TodoStore, object: ITodoTask) {
    return new TodoModel(store, object.id, object.description, object.urgency, object.importance, object.done);
  }

  toggle() {
    this.done = !this.done;
    this.store.sortTodos();
  }

  remove() {
    this.store.removeTodo(this);
  }

  setUrgency = (urgency: number) => {
    this.urgency = urgency;
  };

  setImportance = (importance: number) => {
    this.importance = importance;
  };

  toJS() {
    return {
      id: this.id,
      urgency: this.urgency,
      importance: this.importance,
      description: this.description,
      done: this.done
    };
  }
}
