import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UserInterface/Button'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosActions
