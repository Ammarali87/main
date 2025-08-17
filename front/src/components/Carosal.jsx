import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const courses = [
  {
    title: 'SEO Mastery',
    description: 'Boost your website visibility with proven SEO strategies.',
    image: '/pic1.png', // Replace with real image paths
    rating: 4.5,
    reviews: 120,
  },
  {
    title: 'Social Media Ads',
    description: 'Run successful ad campaigns on Instagram and Facebook.',
    image: '/pic4.png', // Replace with real image paths
    rating: 4.8,
    reviews: 89,
  },
  {
    title: 'Email Marketing',
    description: 'Master the art of crafting high-converting email campaigns.',
    image: '/pic3.png', // Replace with real image paths
    rating: 4.2,
    reviews: 76,
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  const course = courses[currentIndex];

  return (
    <div className="p-4 bg-white rounded shadow-md mt-11 w-full max-w-xl max-md:mb-14 max-md:h-[339px] mx-auto relative h-[260px]">
      <p className="text-lg font-bold mb-4">Student Favorite Courses</p>

      {/* Course content */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <img
          src={course.image}
          alt={course.title}
          className="w-full md:w-1/3 h-40 object-cover rounded shadow"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-purple-700 mb-1">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{course.description}</p>

          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              {course.rating} ({course.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-1 rounded-full shadow"
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-1 rounded-full shadow"
      >
        <ChevronRightIcon className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
}
