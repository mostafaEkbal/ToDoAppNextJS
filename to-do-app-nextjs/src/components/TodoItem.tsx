'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <li className='flex gap-2 items-center'>
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
        className='ml-4 border border-slate-300 text-slate-300 px-1 py-[1px] rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
      >
        Delete
      </button>

      {pathname === '/' && (
        <Link href={`/${id}`}>
          <button className='ml-4 border border-slate-300 text-slate-300 px-1 py-[1px] rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>
            more info
          </button>
        </Link>
      )}
    </li>
  );
}
