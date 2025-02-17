import { useParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const JobDetailsPage = () => {
  const { id } = useParams();

  // Dummy job data in Persian
  const jobs = {
    1: {
      title: "توسعه‌دهنده فرانت‌اند",
      description: "طراحی و توسعه رابط کاربری مدرن برای برنامه‌های وب.",
      location: [25.276987, 55.296249],
      salary: "۷۰,۰۰۰ - ۹۰,۰۰۰ دلار / سال",
      type: "تمام وقت",
      experience: "۲+ سال",
      company: "TechCorp Solutions",
      industry: "فناوری",
    },
    2: {
      title: "مهندس بک‌اند",
      description: "توسعه API‌های با کارایی بالا و منطق سمت سرور.",
      location: [25.204849, 55.270782],
      salary: "۸۰,۰۰۰ - ۱۰۰,۰۰۰ دلار / سال",
      type: "دورکاری",
      experience: "۳+ سال",
      company: "Cloud Innovations",
      industry: "توسعه نرم‌افزار",
    },
    3: {
      title: "مدیر سایت",
      description: "مدیریت پروژه‌های ساختمانی و نظارت بر ایمنی سایت.",
      location: [25.317645, 55.412015],
      salary: "۶۰,۰۰۰ - ۸۰,۰۰۰ دلار / سال",
      type: "قراردادی",
      experience: "۵+ سال",
      company: "BuildWell Constructions",
      industry: "ساخت و ساز",
    },
  };

  const job = jobs[id];

  if (!job) return <p className="text-center text-xl text-gray-600 mt-10">🚧 شغل یافت نشد.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      {/* عنوان شغل و اطلاعات شرکت */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="mt-2 text-lg">
          🏢 {job.company} | 🏗️ {job.industry}
        </p>
      </div>

      {/* بخش جزئیات شغل */}
      <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">جزئیات شغل</h2>
        <p className="text-gray-700">{job.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-500">💰 حقوق</p>
            <p className="font-semibold">{job.salary}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-500">📅 نوع شغل</p>
            <p className="font-semibold">{job.type}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-500">🎓 تجربه مورد نیاز</p>
            <p className="font-semibold">{job.experience}</p>
          </div>
        </div>

        {/* دکمه ارسال درخواست */}
        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md text-lg font-semibold hover:bg-blue-700 transition">
            📩 ارسال درخواست
          </button>
        </div>
      </div>

      {/* بخش نقشه */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">📍 موقعیت مکانی شغل</h2>
        <div className="h-64 w-full rounded-lg overflow-hidden shadow-md">
          <MapContainer center={job.location} zoom={13} className="h-full w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={job.location}>
              <Popup>
                {job.title} - {job.company}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
