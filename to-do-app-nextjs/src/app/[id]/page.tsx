import {prisma} from '@/db';
import Link from 'next/link';

async function getTodo(id: string) {
  'use server';

  return prisma.todo.findFirst({where: {id}});
}

export default async function Page({params}: any) {
  const todo = await getTodo(params.id);

  return (
    <div>
      <h1 className='mb-6'>Task</h1>
      <div className='flex gap-5 flex-col'>
        <h3>{todo?.title}</h3>
        <Link href='/'>
          <button className='ml-4 border border-slate-300 text-slate-300 px-1 py-[1px] rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>
            {' '}
            go back
          </button>
        </Link>
      </div>
    </div>
  );
}
