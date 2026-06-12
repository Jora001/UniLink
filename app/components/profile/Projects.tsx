'use client';

export default function Projects() {
  return (
    <div className="w-full p-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        Projects
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Latest updates and important events related to your account
      </p>

      <div className="mt-10">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Organization */}
          <div className="w-28">
            <h3 className="text-3xl font-medium text-gray-800">
              YSU IT Club
            </h3>
          </div>

          {/* Project Info */}
          <div className="flex-1">
            <h3 className="text-4xl font-semibold text-gray-800">
              Smart City Solutions Hackathon
            </h3>

            <p className="text-gray-500 mt-2">
              We Are Building A Cross-University Team To Solve Urban
              Traffic Issues In Yerevan.
            </p>

            <div className="mt-4">
              <span className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md">
                Data Scientist
              </span>
            </div>
          </div>
        </div>
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