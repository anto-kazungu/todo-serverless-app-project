/**
 * Fields in a request to update a single TODO item.
 */
export interface UpdateTodoRequest {
  userId: string
  todoId: string
  createdAt: string
  name: string
  dueDate: string
  done: boolean
  attachmentUrl?: string
}