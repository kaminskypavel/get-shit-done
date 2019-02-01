export interface ITodoTask {
  description: string;
  urgency: number;
  impact: number;
  importance?: number;
  priority: number;
  done: boolean;
}
