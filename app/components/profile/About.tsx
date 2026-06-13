'use client';

import { ProfileData } from "@/app/types/profile";
import { FormEvent, useEffect, useState } from 'react';
import useUpdate from '@/app/hooks/profile/useUpdate';
import { UpdatingUserData } from '@/app/types/profile';

type AboutProps = {
  profile: ProfileData | null;
  onProfileUpdate: (profile: ProfileData) => void
};

export default function About({ profile, onProfileUpdate }: AboutProps) {
  const { updateUserProfile, loading } = useUpdate();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState<UpdatingUserData>({
    gender: '',
    dateOfBirth: '',
    education: [],
    skill: [],
    phone: '',
    email: '',
    address: '',
    nickname: '',
  });

  useEffect(() => {
    if (!profile) return;

    setFormData({
      gender: profile.gender ?? "",
      dateOfBirth: profile.dateOfBirth ?? "",
      education: profile.education ?? [],
      skill: profile.skill ?? [],
      phone: profile.phone ?? "",
      email: profile.email ?? "",
      address: profile.address ?? "",
      nickname: profile.nickname ?? "",
    });
  }, [profile]);


  const handleSave = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const result = await updateUserProfile(formData);

      if (!result) return;

      onProfileUpdate(result);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    } 
  };


  const handleCancel = () => {
    if (!profile) return;

    setFormData({
      gender: profile.gender ?? "",
      dateOfBirth: profile.dateOfBirth ?? "",
      education: profile.education ?? [],
      skill: profile.skill ?? [],
      phone: profile.phone ?? "",
      email: profile.email ?? "",
      address: profile.address ?? "",
      nickname: profile.nickname ?? "",
    });

    setIsEditing(false);
  };

  return <main className="About">
    <h2 className="font-semibold text-[22px] leading-[100%] font-[Poppins] mb-2">
      About
    </h2>

    <p className="font-normal text-[14px] leading-[100%] font-[Poppins] text-gray-500 mb-8">
      Contact details and basic personal information.
    </p>

    {/* Contact */}
    <div className="mt-10">
      <h3 className="font-semibold text-[22px] leading-[100%] font-[Poppins] mb-4">
        Contact
      </h3>

      <div className="grid grid-cols-2 gap-y-4 font-normal text-[16px] leading-[100%] font-[Poppins]">

        {/* Phone */}
        <span>Phone</span>

        {isEditing ? (
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="flex-1 h-12 px-4 rounded-full border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
          />
        ) : (
          <span className="text-[#0097FE]">
            {formData.phone}
          </span>
        )}

        {/* E-Mail */}
        <span>E-Mail</span>

        {isEditing ? (
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="flex-1 h-12 px-4 rounded-full border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
          />
        ) : (
          <span className="text-[#0097FE]">
            {formData.email}
          </span>
        )}

        {/* Address */}
        <span>Address</span>

        {isEditing ? (
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            className="flex-1 h-12 px-4 rounded-full border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
          />
        ) : (
          <span className="text-[#0097FE]">
            {formData.address}
          </span>
        )}
      </div>
    </div>

    {/* Personal Information */}
    <div className="mt-10">
      <h3 className="font-semibold text-[22px] leading-[100%] font-[Poppins] mb-4">
        Personal Information
      </h3>

      <div className="grid grid-cols-2 gap-y-4 font-normal text-[16px] leading-[100%] font-[Poppins]">

        {/* Gender */}
        <span>Gender</span>

        {isEditing ? (
          <select
            value={formData.gender}
            onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        ) : (
          <span className="text-[#0097FE]">
            {formData.gender === "MALE" ? "Male" : "Female"}
          </span>
        )}

        {/* Date of Birth */}
        <span>Date of Birth</span>

        {isEditing ? (
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
            className="flex-1 h-12 px-4 rounded-full border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
          />
        ) : (
          <span className="text-[#0097FE]">
            {formData.dateOfBirth}
          </span>
        )}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-12">
      {isEditing ? (
        <>
          <button
            onClick={handleCancel}
            className="border px-6 py-2 rounded-full cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={(e) => handleSave(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave(e);
              }
            }}
            disabled={loading}
            className="bg-[#0097FE] text-white px-6 py-2 rounded-full cursor-pointer"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-[#0097FE] text-white px-6 py-2 rounded-full cursor-pointer"
        >
          Update Information
        </button>
      )}
    </div>
  </main>
}