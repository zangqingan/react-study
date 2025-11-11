/**
 * reducer和context结合使用
 *
 */
import { TasksProvider } from "./TasksContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
export default function Task() {
  return (
    <>
      <TasksProvider>
        <h1>Day off in Waron</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}
