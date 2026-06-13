'use client';

import useUpdate from "@/app/hooks/profile/useUpdate";
import { ProfileData, UpdatingUserData } from "@/app/types/profile";
import { FormEvent, useEffect, useState } from "react";

type SkillsProps = {
    profile: ProfileData | null;
    onProfileUpdate: (profile: ProfileData | null) => void;
    edit: "education" | "skill" | null;
    onEdit: (edit: "education" | "skill" | null) => void;
}

export default function SkillsModal({ profile, onProfileUpdate, edit, onEdit }: SkillsProps) {
    const { updateUserProfile, loading } = useUpdate();

    const [newEducation, setNewEducation] = useState<{
        "institution": string,
        "degree": string
    }>({
        "institution": "",
        "degree": ""
    });

    const [newSkill, setNewSkill] = useState<string>("");

    const [updatingData, setUpdatingData] = useState<UpdatingUserData>({
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

        setUpdatingData({
            gender: profile.gender ?? '',
            dateOfBirth: profile.dateOfBirth ?? '',
            education: profile.education ?? [],
            skill: profile.skill ?? [],
            phone: profile.phone ?? '',
            email: profile.email ?? '',
            address: profile.address ?? '',
            nickname: profile.nickname ?? '',
        })
    }, [profile]);



    const handleSkillChange = (index: number, value: string) => {
        setUpdatingData(prev => ({
            ...prev,
            skill: prev.skill.map((skill, i) =>
                i === index ? value : skill
            )
        }));
    };

    const handleEducationChange = (
        index: number,
        field: "institution" | "degree",
        value: string
    ) => {
        setUpdatingData(prev => ({
            ...prev,
            education: prev.education.map((edu, i) =>
                i === index
                    ? { ...edu, [field]: value }
                    : edu
            )
        }));
    };

    const handleSave = async (e: FormEvent) => {
        e.preventDefault();

        try {
            let payload = { ...updatingData };

            if (edit === "education") {
                const institution = newEducation.institution.trim();
                const degree = newEducation.degree.trim();

                if (institution && degree) {
                    payload.education = [
                        ...payload.education,
                        {
                            institution,
                            degree
                        }
                    ];
                }
            }

            if (edit === "skill") {
                const skill = newSkill.trim();

                if (skill) {
                    payload.skill = [
                        ...payload.skill,
                        skill
                    ];
                }
            }

            const result = await updateUserProfile(payload);

            if (!result) return;

            onProfileUpdate(result);
            onEdit(null);

            setNewEducation({
                institution: "",
                degree: ""
            });

            setNewSkill("");

        } catch (error) {
            console.error(error);
        }
    };


    const handleCancel = () => {
        if (!profile) return;

        setUpdatingData({
            gender: profile.gender ?? "",
            dateOfBirth: profile.dateOfBirth ?? "",
            education: profile.education ?? [],
            skill: profile.skill ?? [],
            phone: profile.phone ?? "",
            email: profile.email ?? "",
            address: profile.address ?? "",
            nickname: profile.nickname ?? "",
        });

        onEdit(null);
    };



    return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
        <div className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white shadow-2xl p-8">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                        {edit === "education"
                            ? "Edit Education"
                            : "Edit Skills"}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Update your profile information
                    </p>
                </div>

                <button
                    onClick={handleCancel}
                    className="text-gray-400 hover:text-gray-700 text-3xl cursor-pointer transition-all duration-100"
                >
                    ×
                </button>
            </div>

            {edit === "education" ? <div className="Education">
                <ul className="space-y-5">
                    {updatingData?.education.map((edu, i) => <li key={i}
                        className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-4 flex items-baseline gap-4"
                    >
                        <div className="flex-1 flex flex-col gap-3">
                            <div className="Institution flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Institution
                                </label>
                                <input
                                    type="text"
                                    value={edu.institution}
                                    onChange={(e) => handleEducationChange(i, "institution", e.target.value)}
                                    className="h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                                />
                            </div>
                            <div className="Degree flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Degree
                                </label>
                                <input
                                    type="text"
                                    value={edu.degree}
                                    onChange={(e) => handleEducationChange(i, "degree", e.target.value)}
                                    className="h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => setUpdatingData(prev => ({ ...prev, education: prev.education.filter((_, index) => i !== index) }))}
                            className="rounded-xl text-red-500 hover:text-red-700 cursor-pointer transition-all duration-200  text-3xl font-medium"
                        >
                            ×
                        </button>
                    </li>)}

                    {/* New Education */}
                    <li className="rounded-2xl border-2 border-dashed border-gray-300 p-5 space-y-4">
                        <h4 className="font-medium text-gray-700">
                            Add New Education
                        </h4>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">
                                Institution
                            </label>

                            <input
                                type="text"
                                value={newEducation.institution}
                                onChange={(e) =>
                                    setNewEducation((prev) => ({
                                        ...prev,
                                        institution: e.target.value,
                                    }))
                                }
                                placeholder="University name"
                                className="h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">
                                Degree
                            </label>

                            <input
                                type="text"
                                value={newEducation.degree}
                                onChange={(e) =>
                                    setNewEducation((prev) => ({
                                        ...prev,
                                        degree: e.target.value,
                                    }))
                                }
                                placeholder="Degree name"
                                className="h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                            />
                        </div>
                    </li>
                </ul>
            </div> : <div className="Skill">
                <ul className="space-y-5">
                    {updatingData.skill.map((skill, i) => <li key={i}
                        className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-4 flex items-baseline gap-4"
                    >
                        <div className="flex-1 flex gap-3">
                            <input
                                type="text"
                                value={skill}
                                onChange={(e) => handleSkillChange(i, e.target.value)}
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                            />
                            <button
                                onClick={() => setUpdatingData(prev => ({ ...prev, skill: prev.skill.filter((_, index) => i !== index) }))}
                                className="rounded-xl text-red-500 hover:text-red-700 cursor-pointer transition-all duration-200  text-3xl font-medium"
                            >
                                ×
                            </button>
                        </div>
                        
                    </li>
                    )}

                    {/* New Skill */}
                    < li className="mt-6 rounded-2xl border-2 border-dashed border-gray-300 p-5 space-y-4" >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Add New Skill
                        </label>
                        <input
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            placeholder="New Skill"
                            className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                        />
                    </li>
                </ul>
            </div>}

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-12">
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
            </div>
        </div>
    </div >
}