'use client';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className='flex gap- items-center'>
      <input
        type='checkbox'
        id={id}
        className='cursor-pointer peer'
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className='peer-checked:line-through cursor-pointer
            peer-checked:text-slate-500'
      >
        {title}
      </label>
      <button
        onClick={e => deleteTodo(id)}
        className='ml-4 border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
      >
        Delete
      </button>
    </li>
  );
}
