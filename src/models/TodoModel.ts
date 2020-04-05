import {action, computed, observable} from "mobx";
import TodoStore from "../stores/TodoStore";
import {ITodoTask} from "../types/ITodoTask";

export default class TodoModel {
  store: TodoStore;
  @observable description: string;
  @observable urgency: number;
  @observable impact: number;
  @observable easiness: number;
  @observable done: boolean;

  constructor(
    store: TodoStore,
    description: string,
    urgency: number,
    impact: number,
    easiness: number,
    done: boolean
  ) {
    this.store = store;
    this.urgency = urgency;
    this.impact = impact;
    this.description = description;
    this.easiness = easiness;
    this.done = done;
  }

  @computed get priority() {
    return this.impact + this.urgency + this.easiness;
  }

  static fromJS(store: TodoStore, object: ITodoTask) {
    //polyfilling for previously saved lists where "impact" was called "importance
    const impact = object.impact || object.importance || 5;
    const easiness = object.easiness || 5;
    return new TodoModel(store, object.description, object.urgency, impact, easiness, object.done);
  }

  toggle() {
    this.done = !this.done;
    this.store.sortTodos();
  }

  remove() {
    this.store.removeTodo(this);
  }

  @action
  setUrgency = (urgency: number) => {
    this.urgency = urgency;
  };

  @action
  setImpact = (impact: number) => {
    this.impact = impact;
  };

  @action
  setEasiness = (easiness: number) => {
    this.easiness = easiness;
  };

  toJS() {
    return {
      urgency: this.urgency,
      impact: this.impact,
      description: this.description,
      done: this.done
    };
  }
}
