import {TodoItem} from '@/components/TodoItem';
import {prisma} from '@/db';
import Link from 'next/link';

export default async function Home() {
  let todos = await getTodos();
  function getTodos() {
    return prisma.todo.findMany();
  }

  async function toggleTodo(id: string, complete: boolean) {
    'use server';

    await prisma.todo.update({where: {id}, data: {complete}});
  }

  async function deleteTodo(id: string) {
    'use server';

    console.log(todos);
    await prisma.todo.delete({where: {id}});
    console.log(todos);
  }

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          href='/new'
        >
          New
        </Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
