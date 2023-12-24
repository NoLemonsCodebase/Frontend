"use client";

import * as React from "react";

interface ISellYourCarPageProps {}

const sections = [
  {
    title: "عدم البيع = لا رسوم",
    description:
      "نعرض سيارتك مجاناً، ولفترة محدودة فقط، برسوم بائع قليلة (2%) من السعر النهائي، وإن لم تُبَع السيارة؛ فلا رسوم عليك، ولا مخاطرة في الأمر.",
  },
  {
    title: "نحن بجانبك",
    description:
      "يُدرك فريق نوليمنز (NoLemons) أن سيارتك مميزة؛ ولهذا نجتهد في بيعها بأعلى سعر ممكن.",
  },
  {
    title: "راحة البال",
    description:
      'بما أننا حلقة الوصل الوحيدة؛ فإننا سنجيب عن كل الأسئلة إلى نهاية المزاد، ولن تُزعجك الاتصالات الليلية ورسائل "السعر النهائي" مجدداً.',
  },
  {
    title: "تصوير احترافي",
    description:
      "لدينا أفضل المصورين لتصوير أكثر من 100 صورة و 4 فيديوهات حتى يرى المشترون كل شيء قبل اتخاذ القرار.",
  },
  {
    title: "فحص شامل",
    description:
      "يُعطي الفحص المسبق من قِبَل المتخصصين صورةً شاملة عن سيارتك، مما يُشجع المشترين في الداخل والخارج على المزايدة على سيارتك. معنا، سترتاح من طلبات الفحص والمعاينة من غير الجادين",
  },
  {
    title: "نُسَوِّق سيارتك للراغبين فقط",
    description:
      "سيكتب فريقنا وصف سيارتك الذي يشمل تاريخها، والصيانة السابقة وسجلاتها؛ لنميزها عن الإعلانات الأخرى، وبعدها ستُعرض السيارة أونلاين لمحبي السيارات والمشترين الجادين",
  },
  {
    title: "المشترون الدوليون",
    description:
      "تُباع 50% من سياراتنا دولياً، فقد صدَّرنا سيارات إلى الخليج وخارجه لمزايدين من الإمارات، والسعودية، والكويت، وقطر، والبحرين، وعمان. كما امتدت خدماتنا لمشترين في أماكن بعيدة مثل جنوب إفريقيا وأمريكا. والأجمل من هذا أن نوليمنز (NoLemons) تُنجز جميع الأعمال بما فيها عمليات الشحن وإجراءات التصدير",
  },
];

const SellYourCarPage: React.FunctionComponent<ISellYourCarPageProps> = (
  props
) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hello! I'm ${name} and I want to sell my car.\nHere's a small description:\n${description}`
    );
    window.open(
      `https://api.whatsapp.com/send/?phone=19563001993&text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col p-4 space-y-4 max-w-xl mx-auto text-right">
      <h2 className="text-3xl font-bold text-center">بيع سيارتي</h2>
      <p>
        لا توجد رسوم لعرض وبيع سيارتك مع نوليمنز (NoLemons)، والأفضل من هذا،
        وجود الفوائد التالية:
      </p>

      {sections.map((section, index) => (
        <div className="flex flex-col space-y-2" key={index}>
          <h3 className="text-xl font-bold">{`${section.title}`}</h3>
          <p>{section.description}</p>
        </div>
      ))}
      <div className="w-full border-b pt-4" />
      <p className="pt-4">
        هل لديك سيارة تريد بيعها مع نوليمنز (NoLemons)؟ املأ الاستمارة أدناه
        للتواصل معنا.Z
      </p>

      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-bold">
          الاسم
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-gray-400 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description" className="font-bold">
          نبذة عن سيارتك:
        </label>
        <textarea
          name="description"
          id="description"
          className="border border-gray-400 p-2"
          value={description}
          rows={6}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          أرسل عبر الواتساب
        </button>
      </form>
    </div>
  );
};

export default SellYourCarPage;
