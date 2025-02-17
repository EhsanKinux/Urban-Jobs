import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  // داده‌های نمونه
  const news = [
    {
      id: 1,
      title: "رشد فرصت‌های شغلی در فناوری",
      description: "صنعت فناوری شاهد رشد ۲۰٪ در فرصت‌های شغلی امسال بوده است.",
    },
    {
      id: 2,
      title: "رونق ساخت‌وساز در مناطق شهری",
      description: "پروژه‌های جدید زیرساختی هزاران فرصت شغلی ایجاد کرده‌اند.",
    },
  ];

  const collaborations = [
    "شرکت A با شورای شهر همکاری می‌کند",
    "استارتاپ B پورتال مشاغل شهری را راه‌اندازی کرد",
    "دولت برنامه‌های جدید اشتغال‌زایی را تأمین مالی می‌کند",
  ];

  const jobCategories = [
    { id: 1, name: "فناوری", path: "/jobs/technology" },
    { id: 2, name: "ساخت‌وساز", path: "/jobs/construction" },
    { id: 3, name: "بهداشت و درمان", path: "/jobs/healthcare" },
    { id: 4, name: "آموزش", path: "/jobs/education" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800 text-right" dir="rtl">
      {/* هدر */}
      <header className="text-4xl font-extrabold text-center mb-8 text-blue-600"> سامانه مشاغل شهری</header>

      {/* بخش اخبار */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">آخرین اخبار</h2>
        <Slider {...settings} className="rounded-lg overflow-hidden shadow-lg">
          {news.map((item) => (
            <div key={item.id} className="p-6 bg-blue-100 text-center rounded-lg">
              <h3 className="text-xl font-bold text-blue-800">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* همکاری‌های جدید */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center">🤝 همکاری‌های جدید</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborations.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-5 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-blue-500 text-3xl mr-4">
                <i className="fas fa-handshake"></i>
              </div>
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* دسته‌بندی مشاغل */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">دسته‌بندی مشاغل</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {jobCategories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="block p-4 bg-blue-500 text-white text-center font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
