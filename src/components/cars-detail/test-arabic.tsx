import RichText from "../RichText";

const textHtmlArabic = `<p class=“”p1"” dir=“”rtl”“><strong>2012 Audi R8 V10</strong></p>
<p class=“”p2"” dir=“”rtl”“>المكان: دبي، الإمارات</p>
<p class=“”p2"” dir=“”rtl”“>رقم الشاصي: WUAANB427CN000620</p>
<p class=“”p2"” dir=“”rtl”“>المحرك/الماكينة: 5.2L, V10</p>
<p class=“”p2"” dir=“”rtl”“>نظام الدفع: كُلّي AWD</p>
<p class=“”p2"” dir=“”rtl”“>ناقل الحركة/القير:أوتوماتيك، (6 سرعات)</p>
<p class=“”p2"” dir=“”rtl”“>العداد: 99,199 كم</p>
<p class=“”p2"” dir=“”rtl”“>اللون الخارجي: أبيض</p>
<p class=“”p3"” dir=“”rtl”“>اللون الداخلي: أسود</p>
<p class=“”p3"” dir=“”rtl”“>رسوم يدفعها المشتري لنوليمنز: <span class=“”s1"“>5%</span> (النسبة الاعتيادية لمزادات السيارات العالمية)</p>
<p class=“”p2"” dir=“”rtl”“><span class=“”s2"“>لمحة عن سيارة </span>(2012 Audi R8 V10)<span class=“”s2"“>:</span></p>
<ul class=“”ul1"“>
<li class=“”li3"” dir=“”rtl”“><strong>قوة 525 حصانًا </strong>وعزم 391 رطلًا على قدم</li>
<li class=“”li3"” dir=“”rtl”“><strong>التسارع: (0-100 كم/س) </strong>في 3.7 ثانية</li>
<li class=“”li3"” dir=“”rtl”“><strong>السرعة القصوى: </strong>316 كم/س</li>
</ul>
<p class=“”p3"” dir=“”rtl”“><strong>نظرة عامة </strong></p>
<p class=“”p3"” dir=“”rtl”“>اشترى المالك الثاني والحالي هذه السيارة ذات المواصفات الخليجية في 2022م، وهي خالية من الحوادث.</p>
<p class=“”p3"” dir=“”rtl”“>انتهى ضمان السيارة.</p>
<p class=“”p3"” dir=“”rtl”“><strong>الصيانة السابقة</strong></p>
<p class=“”p3"” dir=“”rtl”“>ستُضاف المعلومات قريبًا.</p>
<p class=“”p4"” dir=“”rtl”“>&nbsp;</p>
<p class=“”p3"” dir=“”rtl”“><strong>المعدات والأوبشنز </strong></p>
<p class=“”p3"” dir=“”rtl”“><strong>الشكل الخارجي:</strong></p>
<ul class=“”ul1"“>
<li class=“”li3"” dir=“”rtl”“>عجلات سبيكة معدنية 19 بوصة</li>
<li class=“”li3"” dir=“”rtl”“>مصابيح أمامية وخلفية <span class=“”s1"“>(LED)</span></li>
<li class=“”li3"” dir=“”rtl”“>ألواح بودي من الألومنيوم</li>
<li class=“”li3"” dir=“”rtl”“>شفرات جانبية <span class=“”s1"“>(side blades)</span> من ألياف الكربون</li>
<li class=“”li3"” dir=“”rtl”“>مرايا جانبية بنظام طي/تحكم وتسخين كهربائي</li>
<li class=“”li3"” dir=“”rtl”“>فتحات عادم ثنائية</li>
</ul>
<p class=“”p3"” dir=“”rtl”“><strong>الشكل الداخلي:</strong></p>
<ul class=“”ul1"“>
<li class=“”li3"” dir=“”rtl”“>تنجيد جلدي <span class=“”s1"“>(Nappa)</span>&nbsp;</li>
<li class=“”li3"” dir=“”rtl”“>مقاعد رياضية قابلة للتعديل كهربائيًا وبنظام تدفئة</li>
<li class=“”li3"” dir=“”rtl”“>بطانة سقف الكانتارا</li>
<li class=“”li3"” dir=“”rtl”“>عجلة قيادة مسطحة القاعدة/القاع، ومكسوة بالجلد</li>
<li class=“”li3"” dir=“”rtl”“>نظام تحكم مناخي تلقائي</li>
<li class=“”li3"” dir=“”rtl”“>عتبات أبواب مضيئة</li>
</ul>
<p class=“”p3"” dir=“”rtl”“><strong>التقنية/التكنولوجيا:</strong></p>
<ul class=“”ul1"“>
<li class=“”li3"” dir=“”rtl”“>نظام تنقل بلس من أودي <span class=“”s1"“>(Audi Navigation Plus)</span> بشاشة 6.5 بوصة</li>
<li class=“”li2"” dir=“”rtl”“><span class=“”s2"“>نظام صوت </span>(Bang &amp; Olufsen premium sound system)</li>
<li class=“”li3"” dir=“”rtl”“>بلوتوث</li>
<li class=“”li2"” dir=“”rtl”“><span class=“”s2"“>مشغل </span>(CD/DVD)<span class=“”s2"“> و</span>(MP3)</li>
<li class=“”li3"” dir=“”rtl”“>راديو قمر صناعي <span class=“”s1"“>(SiriusXM)</span></li>
<li class=“”li3"” dir=“”rtl”“>وصلة تشغيل موسيقى من أودي مع مشغل <span class=“”s1"“>(iPod)</span></li>
</ul>
<p class=“”p4"” dir=“”rtl”“>&nbsp;</p>
<p class=“”p3"” dir=“”rtl”“><strong>الأداء:</strong></p>
<ul class=“”ul1"“>
<li class=“”li2"” dir=“”rtl”“><span class=“”s2"“>محرك/ماكينة سحب طبيعي </span>(5.2-liter naturally aspirated V10 engine)</li>
<li class=“”li3"” dir=“”rtl”“>ناقل حركة/قير يدوي آلي <span class=“”s1"“>(R-tronic)</span>، 6 سرعات</li>
<li class=“”li3"” dir=“”rtl”“>نظام دفع كُلِّي من أودي <span class=“”s1"“>(Audi Quattro AWD)</span></li>
<li class=“”li3"” dir=“”rtl”“>نظام سسبنشن تكيُّفي للتحكم المغناطيسي بالقيادة <span class=“”s1"“>(Magnetic Ride)</span></li>
<li class=“”li3"” dir=“”rtl”“>نظام تحكم إلكتروني بالثبات مع وضع رياضي <span class=“”s1"“>(Sport Mode)</span></li>
</ul>
<p class=“”p3"” dir=“”rtl”“><strong>مميزات أخرى:</strong></p>
<ul class=“”ul1"“>
<li class=“”li3"” dir=“”rtl”“>حساسات/سنسورز باركنج (أمامية وخلفية)</li>
<li class=“”li3"” dir=“”rtl”“>كاميرا رؤية خلفية</li>
<li class=“”li3"” dir=“”rtl”“>مسّاحات زجاج أمامي بنظام مستَشعِر/سنسور أمطار</li>
<li class=“”li3"” dir=“”rtl”“>فتح وتشغيل بدون مفتاح</li>
<li class=“”li5"” dir=“”rtl”“>نظام تحذير ضد السرقة</li>
</ul>
<p class=“”p3"” dir=“”rtl”“><strong>معلومات مهمة</strong></p>
<ul class=“”ul1"“>
<li class=“”li3"” dir=“”rtl”“>رُكِّب للسيارة عادم <span class=“”s1"“>(Quicksilver)</span></li>
<li class=“”li3"” dir=“”rtl”“>تم تتبع السيارة باستمرار خلال السنتين الماضيتين</li>
<li class=“”li3"” dir=“”rtl”“>بعض التآكل على المقاعد الجلدية (جانب السائق)</li>
<li class=“”li3"” dir=“”rtl”“>بعض التآكل على الترِم/الجزء البلاستيكي لشاشة الكونسول المركزي (الصورة 158)</li>
<li class=“”li3"” dir=“”rtl”“>ارتخاء جلد لوحات الأبواب العُلويَّة<span class=“”Apple-converted-space”“>&nbsp; </span>(الصورة 135 و165)</li>
<li class=“”li3"” dir=“”rtl”“>أُزيلت شعارات أودي من الأمام والخلف</li>
<li class=“”li3"” dir=“”rtl”“>خدش على الجانب الأيمن للصدام الأمامي في الصورة (22)</li>
<li class=“”li3"” dir=“”rtl”“>آثار حجارة على الشبك الأمامي (الصورة 16)</li>
</ul>
<p class=“”p2"” dir=“”rtl”“><strong>حق الفحص قبل الشراء</strong></p>
<p class=“”p2"” dir=“”rtl”“>يحق للمشترين المهتمين والمشاركين في المزاد فحص السيارة في أي كراج أو وكالة قبل شرائها.</p>
<p class=“”p5"” dir=“”rtl”“>يُرجى مراجعة الصور لمعرفة جميع التفاصيل.</p>`;
export default function TestArabic() {
  return <RichText className=" md:pr-10" dir="rtl" content={textHtmlArabic} />;
}
