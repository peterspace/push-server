const mongoose = require("mongoose");

const pwaSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    arabic: {
      domain: String,
      subDomain: String,
      open: { type: String, default: "فتح" },
      stayOn: { type: String, default: "ابق على المتصفح" },
      add: { type: String, default: " أضف" },
      clickIcon: {
        type: String,
        default: "اضغط على هذا الرمز لبدء التطبيق على الشاشة الرئيسية",
      },
      pressIcon: {
        type: String,
        default: "اضغط على هذا الرمز لبدء التطبيق على الشاشة الرئيسية",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "الخطوة 1" },
        instruction: { type: String, default: "انقر على 'تثبيت' في القائمة" },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "الخطوة 2" },
        instruction: { type: String, default: "انقر على 'تثبيت'" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "الخطوة 1" },
        instruction: { type: String, default: "انقر على 'مشاركة' في القائمة" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "الخطوة 2" },
        instruction: { type: String, default: "انقر على 'إضافة إلى الدوك'" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "الخطوة 3" },
        instruction: { type: String, default: "انقر على 'إضافة'" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "الخطوة 1" },
        instruction: { type: String, default: "اضغط على 'مشاركة' في القائمة" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "الخطوة 2" },
        instruction: {
          type: String,
          default: "اضغط على 'إضافة إلى الشاشة الرئيسية'",
        },
      },
      step3ChromeMobile: {
        name: { type: String, default: "الخطوة 3" },
        instruction: { type: String, default: "اضغط على 'إضافة'" },
      },
      step1SafariMobile: {
        name: { type: String, default: "الخطوة 1" },
        instruction: { type: String, default: "اضغط على 'مشاركة' في القائمة" },
      },
      step2SafariMobile: {
        name: { type: String, default: "الخطوة 2" },
        instruction: {
          type: String,
          default: "اضغط على 'إضافة إلى الشاشة الرئيسية'",
        },
      },
      step3SafariMobile: {
        name: { type: String, default: "الخطوة 3" },
        instruction: { type: String, default: "اضغط على 'إضافة'" },
      },
      greeting: { type: String, default: "مرحباً، أهلاً وسهلاً!" },
      wait: { type: String, default: "يرجى الانتظار" },
      proceed: { type: String, default: "استمر" },
      description: { type: String, default: "وصف" },
      containsAds: { type: String, default: "يحتوي على إعلانات" },
      inAppPurchases: { type: String, default: "مشتريات داخل التطبيق" },
      headerReviews: { type: String, default: "3.2 ألف مراجعة" },
      hundredPlus: { type: String, default: "100 ألف+" },
      downloads: { type: String, default: "التنزيلات" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "مصنف للأعمار 18+" },
      install: { type: String, default: "تثبيت" },
      wishlist: { type: String, default: "أضف إلى قائمة الرغبات" },
      available: { type: String, default: "هذا التطبيق متاح لجهازك" },
      aboutThisGame: { type: String, default: "حول هذا التطبيق" },
      about1: {
        type: String,
        default:
          "1xBet™ هو تطبيق كازينو مميز على الجوال سيغمرك في مجموعة متنوعة من الألعاب الفريدة. انضم إلينا اليوم واحصل على مكافأة تسجيل حصرية لتبدأ رحلتك في البحث عن الأرباح.",
      },
      about2: {
        type: String,
        default:
          "مع 1xBet™ يمكنك الاستمتاع بإثارة ألعاب الكازينو، والحصول على دورات مجانية وزيادة فرصك في الفوز مع مكافآت إيداع سخية. يوفر تطبيقنا مجموعة واسعة من الآلات ذات المواضيع المختلفة، رسومات عالية الجودة، ورسوم متحركة مشوقة.",
      },
      about3: {
        type: String,
        default:
          "قم بإجراء معاملات آمنة ومريحة، العب في أي وقت وأي مكان بفضل واجهة الجوال السهلة. 1xBet™ هو المكان المثالي لعشاق الحظ والإثارة. انضم إلينا اليوم واربح!",
      },
      updatedOn: { type: String, default: "تم التحديث في" },
      updatedDate: { type: String, default: "30 سبتمبر 2023" },
      casino: { type: String, default: "كازينو" },
      dataSafety: { type: String, default: "أمان البيانات" },
      safety: {
        type: String,
        default:
          "يبدأ الأمان بفهم كيفية جمع المطورين لبياناتك ومشاركتها. قد تختلف ممارسات الخصوصية وأمان البيانات بناءً على استخدامك والمنطقة والعمر. قام المطور بتقديم هذه المعلومات وقد يتم تحديثها مع مرور الوقت.",
      },
      noInformation: { type: String, default: "لا توجد معلومات" },
      seeDetails: { type: String, default: "عرض التفاصيل" },
      ratingsAndReviews: { type: String, default: "التقييمات والمراجعات" },
      verified: { type: String, default: "التقييمات والمراجعات مؤكدة" },
      phone: { type: String, default: "الهاتف" },
      tV: { type: String, default: "التلفاز" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "الجهاز اللوحي" },
      reviews: { type: String, default: "المراجعات" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15.5 مليون" },
      review1: {
        name: { type: String, default: "samurai" },
        date: { type: String, default: "22 يناير 2024" },
        review: {
          type: String,
          default:
            "يعمل التطبيق بشكل جيد ويسحب الأموال بسرعة. أنصح الجميع بتنزيل هذا التطبيق",
        },
        helpful: { type: String, default: "13 شخصًا وجدوا هذه المراجعة مفيدة" },
      },
      review2: {
        name: { type: String, default: "Bracken322" },
        date: { type: String, default: "21 يناير 2024" },
        review: {
          type: String,
          default:
            "انتظرت 10 دقائق لسحب الأموال إلى حسابي، بدأت أقلق، كتبت للدعم ووصلت الأموال فوراً. تطبيق جيد",
        },
        helpful: { type: String, default: "4 أشخاص وجدوا هذه المراجعة مفيدة" },
      },
      review3: {
        name: { type: String, default: "Jack Sparrow" },
        date: { type: String, default: "18 يناير 2024" },
        review: {
          type: String,
          default: "1xBet هو تطبيق رائع. أنصح الجميع باستخدامه",
        },
        helpful: { type: String, default: "شخصان وجدا هذه المراجعة مفيدة" },
      },
      review4: {
        name: { type: String, default: "Sheff816" },
        date: { type: String, default: "12 يناير 2024" },
        review: {
          type: String,
          default: "سحبت للتو 1400 دولار، أوصي به بشدة!",
        },
        helpful: {
          type: String,
          default: "185 شخصًا وجدوا هذه المراجعة مفيدة",
        },
      },
      allReviews: { type: String, default: "عرض جميع المراجعات" },
      whatsNew: { type: String, default: "ما الجديد" },
      findHelpful: { type: String, default: "هل وجدت هذا مفيداً؟" },
      yes: { type: String, default: "نعم" },
      no: { type: String, default: "لا" },
      contact: { type: String, default: "اتصال بالمطور" },
      icon: { type: String, default: "" },
      screenShots: { type: [String], default: [] },
      fallBackScreenShots: { type: [String], default: [] },
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: { type: String, default: "" },
      appTitle: { type: String, default: "" },
      appSubTitle: { type: String, default: "" },
    },
    language: String,
    otherLanguages: [String],
  },
  { timestamps: true }
);

const Pwa = mongoose.model("Pwa", pwaSchema);
module.exports = Pwa;
