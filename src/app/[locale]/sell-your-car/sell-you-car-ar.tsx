import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

export default function SellYouCarAr() {
  return (
    <div
      dir="rtl"
      className="flex flex-col p-4 pt-5 pb-10 space-y-4 max-w-xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center">بيع سيارتي</h2>
      <p>
        لا توجد رسوم لعرض وبيع سيارتك مع نوليمنز (NoLemons)، والأفضل من هذا،
        وجود الفوائد التالية:
      </p>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">1) عدم البيع = لا رسوم</h3>
        <p>
          نعرض سيارتك مجانًا، ولفترة محدودة فقط، برسوم بائع (5%) من السعر
          النهائي، وإن لم تُبَع السيارة؛ فلا رسوم عليك، ولا مخاطرة في الأمر.
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">2) نحن بجانبك</h3>
        <p>
          يُدرك فريق نوليمنز (NoLemons) أن سيارتك مميزة؛ ولهذا نجتهد في بيعها
          بأعلى سعر ممكن.
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">3) راحة البال</h3>
        <p>
          بما أننا حلقة الوصل الوحيدة؛ فإننا سنجيب عن كل الأسئلة إلى نهاية
          المزاد، ولن تُزعجك الاتصالات الليلية ورسائل "السعر النهائي" مجدداً.
        </p>
      </div>{" "}
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">4) تصوير احترافي </h3>
        <p>
          لدينا أفضل المصورين لتصوير أكثر من 100 صورة و 4 فيديوهات حتى يرى
          المشترون كل شيء قبل اتخاذ القرار.
        </p>
      </div>{" "}
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">5) فحص شامل</h3>
        <p>
          يُعطي الفحص المسبق من قِبَل المتخصصين صورةً شاملة عن سيارتك، مما يُشجع
          المشترين في الداخل والخارج على المزايدة على سيارتك. معنا، سترتاح من
          طلبات الفحص والمعاينة من غير الجادين.
        </p>
      </div>{" "}
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">6) نُسَوِّق سيارتك للراغبين فقط</h3>
        <p>
          سيكتب فريقنا وصف سيارتك الذي يشمل تاريخها، والصيانة السابقة وسجلاتها؛
          لنميزها عن الإعلانات الأخرى، وبعدها ستُعرض السيارة أونلاين لمحبي
          السيارات والمشترين الجادين.
        </p>
      </div>{" "}
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">7) المشترون الدوليون</h3>
        <p>
          تُباع 50% من سياراتنا دوليًا، فقد صدَّرنا سيارات إلى الخليج وخارجه
          لمزايدين من الإمارات، والسعودية، والكويت، وقطر، والبحرين، وعمان. كما
          امتدت خدماتنا لمشترين في أماكن بعيدة مثل جنوب إفريقيا وأمريكا. والأجمل
          من هذا أن نوليمنز (NoLemons) تُنجز جميع الأعمال بما فيها عمليات الشحن
          وإجراءات التصدير.
        </p>
      </div>
      <div className="w-full border-b pt-4" />
      <p className="pt-4">
        هل لديك سيارة تريد بيعها مع نوليمنز (NoLemons)؟ قم بضغط الزر أدناه و
        املأ الاستمارة للتواصل معنا.
      </p>
      <Link
        target="_blank"
        href="https://nw60ssq5era.typeform.com/to/CN1PoETZ/"
      >
        <Button className="w-full text-xl md:text-2xl md:py-6 mt-1">
          بيع سيارتي
        </Button>
      </Link>
    </div>
  );
}
