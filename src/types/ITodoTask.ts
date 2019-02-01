export interface ITodoTask {
  description: string;
  urgency: number;
  impact: number;
  easiness: number;
  importance?: number;
  priority: number;
  done: boolean;
}
