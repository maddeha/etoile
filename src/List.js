import { data } from './data'
import user from './user.png'

export default function List() {

  const sortedData = data.slice().sort((a, b) => b.amount - a.amount);

  return (
    <ul role="list" className="max-w-md mx-auto divide-y divide-gray-100">
      {sortedData.map((person) => (
        <li className="flex justify-between gap-x-6 py-5 items-center">
          <div className="flex min-w-0 gap-x-4 items-center">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={user} alt="" />
            <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
          </div>
          <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.amount} Dinars</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
  