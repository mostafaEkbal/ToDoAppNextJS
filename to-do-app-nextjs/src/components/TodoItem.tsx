type TodoItemProps = {
    id: string
    title: string
    complete: Boolean
}

export function TodoItem({ id, title, complete }: TodoItemProps) {
    return (
        <li className="flex gap- items-center">
            <input type="checkbox" id={id} className="cursor-pointer peer" />
            <label htmlFor={id} className="peer-checked:line-through cursor-pointer
            peer-checked:text-slate-500">
                {title}
            </label>
        </li>
    )
}