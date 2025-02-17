import { useState } from "react";
import { useParams, Link } from "react-router";

const JobCategoryPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy job data in Persian
  const jobData = {
    technology: {
      description: "جدیدترین مشاغل فناوری از توسعه نرم‌افزار تا مدیریت فناوری اطلاعات را کاوش کنید.",
      jobs: [
        { id: 1, title: "توسعه‌دهنده فرانت‌اند", location: "مرکز شهر", type: "تمام وقت" },
        { id: 2, title: "مهندس بک‌اند", location: "هاب فناوری", type: "دورکاری" },
        { id: 9, title: "پژوهشگر هوش مصنوعی", location: "پارک نوآوری", type: "پاره وقت" },
      ],
    },
    construction: {
      description: "فرصت‌های شغلی در حوزه ساخت و ساز، از مدیریت پروژه تا مشاغل فنی را پیدا کنید.",
      jobs: [
        { id: 3, title: "مدیر سایت", location: "منطقه غربی", type: "تمام وقت" },
        { id: 4, title: "برق‌کار", location: "بلوک شرقی", type: "قراردادی" },
      ],
    },
    healthcare: {
      description: "فرصت‌های شغلی در صنعت بهداشت و درمان، از پرستاری تا پزشک عمومی.",
      jobs: [
        { id: 5, title: "پرستار", location: "بیمارستان مرکزی", type: "تمام وقت" },
        { id: 6, title: "پزشک عمومی", location: "مرکز درمانی", type: "پاره وقت" },
      ],
    },
    education: {
      description: "فرصت‌های تدریس و آموزش در مدارس و مراکز آموزشی.",
      jobs: [
        { id: 7, title: "معلم ریاضی", location: "دبیرستان", type: "تمام وقت" },
        { id: 8, title: "مدرس علوم", location: "آکادمی آموزشی", type: "پروژه‌ای" },
      ],
    },
  };

  const categoryData = jobData[category] || { description: "توضیحی برای این دسته‌بندی موجود نیست.", jobs: [] };
  const filteredJobs = categoryData.jobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      {/* عنوان و توضیحات دسته‌بندی */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{category} مشاغل</h1>
        <p className="text-gray-600">{categoryData.description}</p>
      </div>

      {/* نوار جستجو */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجوی شغل..."
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* لیست مشاغل */}
      {filteredJobs.length > 0 ? (
        <ul className="space-y-4">
          {filteredJobs.map((job) => (
            <li key={job.id} className="border p-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition">
              <Link to={`/job/${job.id}`} className="block">
                <h2 className="font-semibold text-lg">{job.title}</h2>
                <p className="text-sm text-gray-600">📍 {job.location}</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-full">
                  {job.type}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center mt-6">😔 در حال حاضر شغلی در این دسته‌بندی موجود نیست.</p>
      )}

      {/* دکمه بازگشت به خانه */}
      <div className="mt-6 text-center">
        <Link to="/" className="text-blue-600 hover:underline">
          ← بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default JobCategoryPage;
