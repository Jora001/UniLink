'use client';

export default function Notification() {
  const notifications = [
    {
      logo: 'AUA',
      title: 'Inter-University Science Forum 2024',
      description:
        'Discussing The Perspectives Of Educational Digitalization And The Role Of AI In Modern Armenian Universities.',
      button: 'Book Now',
    },
    {
      logo: 'ASUE',
      title: 'Professional Masterclass Series',
      description:
        'Top Industry Experts Share Practical Skills To Help Students Bridge The Gap Between Graduation And Career Start.',
      button: 'Book Now',
    },
    {
      logo: 'NUACA',
      title: 'National Student Hiking Summit',
      description:
        'Join Students From All Over Armenia To Explore Our Hidden Landscapes, Build New Networks, And Enjoy The Great Outdoors.',
      button: 'Book Now',
    },
    {
      logo: 'YSU IT Club',
      title: 'Smart City Solutions Hackathon',
      description:
        'We Are Building A Cross-University Team To Solve Urban Traffic Issues In Yerevan.',
      button: 'Join Project',
      tags: ['Designer', 'Backend Dev', 'Data Scientist'],
    },
  ];

  return (
    <div className="w-full p-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        Notification
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Latest updates and important events related to your account
      </p>

      <div className="mt-10 space-y-10">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start gap-6"
          >
            {/* Logo */}
            <div className="w-24 font-bold text-3xl text-gray-700">
              {item.logo}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 max-w-3xl">
                {item.description}
              </p>

              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Button */}
            <button className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
              {item.button}
            </button>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-12">
        <button className="border px-6 py-2 rounded-full cursor-pointer">
          Cancel
        </button>

        <button className="bg-[#0097FE] text-white px-6 py-2 rounded-full cursor-pointer">
          Update Information
        </button>
      </div>
    </div>
  );
}