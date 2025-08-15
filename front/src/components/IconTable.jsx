import { ClockIcon, UserGroupIcon, BookOpenIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

export default function IconTable() {
  return (
    <div className="p-4 bg-white rounded shadow-md mt-11 w-full max-w-md mx-auto md:mx-0">
      <p className="text-lg font-bold mb-6">Course Info</p>

      <div className="grid grid-cols-2 gap-6 text-gray-700">

        <div className="flex items-center space-x-2">
          <ClockIcon className="h-6 w-6 text-purple-600" />
          <span><strong>Duration:</strong> 3 weeks</span>
        </div>

        <div className="flex items-center space-x-2">
          <UserGroupIcon className="h-6 w-6 text-purple-600" />
          <span><strong>Enrolled:</strong> 55 students</span>
        </div>

        <div className="flex items-center space-x-2">
          <BookOpenIcon className="h-6 w-6 text-purple-600" />
          <span><strong>Lessons:</strong> 4</span>
        </div>

        <div className="flex items-center space-x-2">
          <GlobeAltIcon className="h-6 w-6 text-purple-600" />
          <span><strong>Language:</strong> English</span>
        </div>

      </div>
    </div>
  )
}
