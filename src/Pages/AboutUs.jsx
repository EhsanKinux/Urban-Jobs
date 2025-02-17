const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800" dir="rtl">
      {/* بخش معرفی */}
      <div className="relative bg-blue-600 text-white p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold">درباره ما - مشاغل شهری</h1>
        <p className="mt-2 text-lg">اتصال استعدادها به فرصت‌های شغلی در محیط شهری.</p>
      </div>

      {/* بخش مأموریت و چشم‌انداز */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">🌍 مأموریت ما</h2>
        <p className="text-lg">
          در مشاغل شهری، ما به ایجاد یک اکوسیستم اعتقاد داریم که در آن جویندگان کار و کارفرمایان به راحتی به هم متصل
          شوند. پلتفرم ما طراحی شده تا فرآیند جستجوی کار را ساده، شفاف و کارآمد کند.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-blue-600">🚀 چشم‌انداز ما</h2>
        <p className="text-lg">
          ما آینده‌ای را تصور می‌کنیم که در آن فرصت‌های شغلی برای همه در دسترس باشد و فاصله بین متخصصان ماهر و شرکت‌های
          نیازمند را کاهش دهیم.
        </p>
      </section>

      {/* بخش ارزش‌ها */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">💡 ارزش‌های اصلی ما</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">شفافیت</h3>
            <p className="text-gray-600">ما فرآیندی شفاف و روشن را برای جویندگان کار و کارفرمایان تضمین می‌کنیم.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">نوآوری</h3>
            <p className="text-gray-600">رویکرد مبتنی بر فناوری ما، فرآیند جستجوی کار را آسان‌تر می‌کند.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">جامعه‌محوری</h3>
            <p className="text-gray-600">
              ما شبکه‌ای را ایجاد می‌کنیم که در آن افراد به یکدیگر کمک می‌کنند تا پیشرفت کنند.
            </p>
          </div>
        </div>
      </section>

      {/* بخش تیم ما */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">👥 تیم ما را بشناسید</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="https://via.placeholder.com/100" alt="CEO" className="mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">آرسام محمودی</h3>
            <p className="text-gray-600">بنیان‌گذار و مدیرعامل</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="https://via.placeholder.com/100" alt="CTO" className="mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">محمد سلطان آبادی</h3>
            <p className="text-gray-600">مدیر ارشد فناوری</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="https://via.placeholder.com/100" alt="HR Manager" className="mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">احسان خداویسی</h3>
            <p className="text-gray-600">مدیر بخش استخدام</p>
          </div>
        </div>
      </section>

      {/* بخش تماس با ما */}
      <section className="mt-10 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">📞 با ما در تماس باشید</h2>
        <p className="text-lg mb-2">سوالی دارید؟ ما اینجا هستیم تا کمک کنیم! هر زمان با ما تماس بگیرید.</p>
        <p className="font-semibold">📧 ایمیل: contact@urbanjobs.com</p>
        <p className="font-semibold">📞 تلفن: +۱ ۲۳۴ ۵۶۷ ۸۹۰</p>

        {/* لینک‌های شبکه‌های اجتماعی */}
        <div className="mt-4 flex justify-center space-x-6 space-x-reverse">
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
