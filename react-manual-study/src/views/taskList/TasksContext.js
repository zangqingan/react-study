import { createContext, useReducer } from "react";

// 创建一个任务，派发函数上下文
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

// 任务的初始状态
const initialTasks = [
  { id: 1, text: "学习 React", done: true },
  { id: 2, text: "学习 Context 和 Reducer", done: false },
];

// 定义reducer函数
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

// 任务上下文提供者组件
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
