const mongoose = require("mongoose");

const pwaSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    domain: String,
    subDomain: String,
    languages: [String],
    defaultLanguage: String,
    arabic: {
      isExist: { type: Boolean, default: false },
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
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: { type: String, default: "شخصًا وجدوا هذه المراجعة مفيدة" },
      allReviews: { type: String, default: "عرض جميع المراجعات" },
      whatsNew: { type: String, default: "ما الجديد" },
      findHelpful: { type: String, default: "هل وجدت هذا مفيداً؟" },
      yes: { type: String, default: "نعم" },
      no: { type: String, default: "لا" },
      contact: { type: String, default: "اتصال بالمطور" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    chinese: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "打开" },
      stayOn: { type: String, default: "保持在浏览器上" },
      add: { type: String, default: " 添加" },
      clickIcon: { type: String, default: "点击此图标以在主屏幕上启动应用" },
      pressIcon: { type: String, default: "按此图标以在主屏幕上启动应用" },
      step1ChromeDesktop: {
        name: { type: String, default: "步骤 1" },
        instruction: { type: String, default: "点击菜单中的“安装”" },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "步骤 2" },
        instruction: { type: String, default: "点击“安装”" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "步骤 1" },
        instruction: { type: String, default: "点击菜单中的“分享”" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "步骤 2" },
        instruction: { type: String, default: "点击“添加到 Dock”" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "步骤 3" },
        instruction: { type: String, default: "点击“添加”" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "步骤 1" },
        instruction: { type: String, default: "按菜单中的“分享”" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "步骤 2" },
        instruction: { type: String, default: "按“添加到主屏幕”" },
      },
      step3ChromeMobile: {
        name: { type: String, default: "步骤 3" },
        instruction: { type: String, default: "按“添加”" },
      },
      step1SafariMobile: {
        name: { type: String, default: "步骤 1" },
        instruction: { type: String, default: "按菜单中的“分享”" },
      },
      step2SafariMobile: {
        name: { type: String, default: "步骤 2" },
        instruction: { type: String, default: "按“添加到主屏幕”" },
      },
      step3SafariMobile: {
        name: { type: String, default: "步骤 3" },
        instruction: { type: String, default: "按“添加”" },
      },
      greeting: { type: String, default: "您好，欢迎！" },
      wait: { type: String, default: "请稍候" },
      proceed: { type: String, default: "继续" },
      description: { type: String, default: "测试 1" },
      containsAds: { type: String, default: "包含广告" },
      inAppPurchases: { type: String, default: "应用内购买" },
      headerReviews: { type: String, default: "3.2K 条评论" },
      hundredPlus: { type: String, default: "100K+" },
      downloads: { type: String, default: "下载量" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "适合 18+ 岁" },
      install: { type: String, default: "安装" },
      wishlist: { type: String, default: "添加到愿望清单" },
      available: { type: String, default: "此应用适用于您的设备" },
      aboutThisGame: { type: String, default: "关于此游戏" },
      about1: {
        type: String,
        default:
          "1xBet™ 是一个令人兴奋的移动赌场应用，它将带你沉浸在各种独特的游戏中。今天加入我们并获取独家注册奖金，开启你的盈利之旅。",
      },
      about2: {
        type: String,
        default:
          "在 1xBet™ 上你可以享受赌场游戏的刺激，获得免费旋转，通过丰厚的存款奖金增加你的赢奖机会。我们的应用提供了各种主题的机器，高品质的图形和令人兴奋的动画。",
      },
      about3: {
        type: String,
        default:
          "进行安全便捷的交易，随时随地玩游戏，得益于我们用户友好的移动界面。1xBet™ 是热爱运气和刺激的人的完美去处。今天加入我们并赢取大奖吧！",
      },
      updatedOn: { type: String, default: "更新于" },
      updatedDate: { type: String, default: "2023年9月30日" },
      casino: { type: String, default: "赌场" },
      dataSafety: { type: String, default: "数据安全" },
      safety: {
        type: String,
        default:
          "安全从了解开发者如何收集和共享您的数据开始。数据隐私和安全实践可能会因您的使用情况、地区和年龄而有所不同。开发者提供了此信息，并可能随时间更新。",
      },
      noInformation: { type: String, default: "无信息" },
      seeDetails: { type: String, default: "查看详情" },
      ratingsAndReviews: { type: String, default: "评分和评论" },
      verified: { type: String, default: "评分和评论已验证" },
      phone: { type: String, default: "电话" },
      tV: { type: String, default: "电视" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "平板电脑" },
      reviews: { type: String, default: "评论" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15.5M" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: { type: String, default: "人觉得此评论有帮助" },
      allReviews: { type: String, default: "查看所有评论" },
      whatsNew: { type: String, default: "新内容" },
      findHelpful: { type: String, default: "您觉得这个评论有帮助吗？" },
      yes: { type: String, default: "是" },
      no: { type: String, default: "否" },
      contact: { type: String, default: "开发者联系方式" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    dutch: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "Open" },
      stayOn: { type: String, default: "Blijf in browser" },
      add: { type: String, default: " Toevoegen" },
      clickIcon: {
        type: String,
        default:
          "Klik op dit pictogram om de app op het beginscherm te starten",
      },
      pressIcon: {
        type: String,
        default:
          "Druk op dit pictogram om de app op het beginscherm te starten",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "Stap 1" },
        instruction: {
          type: String,
          default: "Klik op ‘Installeren’ in het menu",
        },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "Stap 2" },
        instruction: { type: String, default: "Klik op ‘Installeren’" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "Stap 1" },
        instruction: { type: String, default: "Klik op ‘Delen’ in het menu" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "Stap 2" },
        instruction: { type: String, default: "Klik op ‘Voeg toe aan Dock’" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "Stap 3" },
        instruction: { type: String, default: "Klik op ‘Voeg toe’" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "Stap 1" },
        instruction: { type: String, default: "Druk op ‘Delen’ in het menu" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "Stap 2" },
        instruction: {
          type: String,
          default: "Druk op ‘Toevoegen aan startscherm’",
        },
      },
      step3ChromeMobile: {
        name: { type: String, default: "Stap 3" },
        instruction: { type: String, default: "Druk op ‘Toevoegen’" },
      },
      step1SafariMobile: {
        name: { type: String, default: "Stap 1" },
        instruction: { type: String, default: "Druk op ‘Delen’ in het menu" },
      },
      step2SafariMobile: {
        name: { type: String, default: "Stap 2" },
        instruction: {
          type: String,
          default: "Druk op ‘Toevoegen aan startscherm’",
        },
      },
      step3SafariMobile: {
        name: { type: String, default: "Stap 3" },
        instruction: { type: String, default: "Druk op ‘Toevoegen’" },
      },
      greeting: { type: String, default: "Hallo, Welkom!" },
      wait: { type: String, default: "Even geduld alstublieft" },
      proceed: { type: String, default: "Doorgaan" },
      description: { type: String, default: "Test 1" },
      containsAds: { type: String, default: "Bevat advertenties" },
      inAppPurchases: { type: String, default: "In-app aankopen" },
      headerReviews: { type: String, default: "3,2K beoordelingen" },
      hundredPlus: { type: String, default: "100K+" },
      downloads: { type: String, default: "Downloads" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "Beoordeeld voor 18+" },
      install: { type: String, default: "Installeren" },
      wishlist: { type: String, default: "Toevoegen aan verlanglijst" },
      available: {
        type: String,
        default: "Deze app is beschikbaar voor uw apparaat",
      },
      aboutThisGame: { type: String, default: "Over deze app" },
      about1: {
        type: String,
        default:
          "1xBet™ is een spannende mobiele casino-app die je onderdompelt in een verscheidenheid aan unieke spellen. Word lid van ons vandaag en krijg een exclusieve aanmeldbonus om uw zoektocht naar winst te starten.",
      },
      about2: {
        type: String,
        default:
          "Met 1xBet™ kunt u genieten van de spanning van casinospellen, gratis spins krijgen en uw kansen op winnen vergroten met royale stortingsbonussen. Onze app biedt een breed scala aan machines met verschillende thema's, graphics van hoge kwaliteit en opwindende animaties.",
      },
      about3: {
        type: String,
        default:
          "Doe veilige en gemakkelijke transacties, speel overal en altijd dankzij onze gebruiksvriendelijke mobiele interface. 1xBet™ is de perfecte plek voor liefhebbers van geluk en spanning. Word lid van ons vandaag en win!",
      },
      updatedOn: { type: String, default: "Bijgewerkt op" },
      updatedDate: { type: String, default: "30 september 2023" },
      casino: { type: String, default: "Casino" },
      dataSafety: { type: String, default: "Gegevensveiligheid" },
      safety: {
        type: String,
        default:
          "Veiligheid begint met het begrijpen van hoe ontwikkelaars uw gegevens verzamelen en delen. Gegevensprivacy en beveiligingspraktijken kunnen variëren op basis van uw gebruik, regio en leeftijd. De ontwikkelaar heeft deze informatie verstrekt en kan deze in de loop van de tijd bijwerken.",
      },
      noInformation: { type: String, default: "Geen informatie" },
      seeDetails: { type: String, default: "Bekijk details" },
      ratingsAndReviews: {
        type: String,
        default: "Beoordelingen en recensies",
      },
      verified: {
        type: String,
        default: "Beoordelingen en recensies zijn geverifieerd",
      },
      phone: { type: String, default: "Telefoon" },
      tV: { type: String, default: "TV" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "Tablet" },
      reviews: { type: String, default: "beoordelingen" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15,5M" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: {
        type: String,
        default: "mensen vonden deze recensie nuttig",
      },
      allReviews: { type: String, default: "Bekijk alle beoordelingen" },
      whatsNew: { type: String, default: "Wat is nieuw" },
      findHelpful: { type: String, default: "Vond je dit nuttig?" },
      yes: { type: String, default: "Ja" },
      no: { type: String, default: "Nee" },
      contact: { type: String, default: "Ontwikkelaar contact" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    english: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "Open" },
      stayOn: { type: String, default: "Stay on browser" },
      add: { type: String, default: " Add" },
      clickIcon: {
        type: String,
        default: "Click this icon to launch app on home screen",
      },
      pressIcon: {
        type: String,
        default: "Press this icon to launch app on home screen",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "Step 1" },
        instruction: { type: String, default: "Click ‘Install’ on the menu" },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "Step 2" },
        instruction: { type: String, default: "Click ‘Install’" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "Step 1" },
        instruction: { type: String, default: "Click ‘Share’ on the menu" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "Step 2" },
        instruction: { type: String, default: "Click ‘Add to Dock’" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "Step 3" },
        instruction: { type: String, default: "Click ‘Add’" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "Step 1" },
        instruction: { type: String, default: "Press ‘Share’ on the menu" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "Step 2" },
        instruction: { type: String, default: "Press ‘Add to Home Screen’" },
      },
      step3ChromeMobile: {
        name: { type: String, default: "Step 3" },
        instruction: { type: String, default: "Press ‘Add’" },
      },
      step1SafariMobile: {
        name: { type: String, default: "Step 1" },
        instruction: { type: String, default: "Press ‘Share’ on the menu" },
      },
      step2SafariMobile: {
        name: { type: String, default: "Step 2" },
        instruction: { type: String, default: "Press ‘Add to Home Screen’" },
      },
      step3SafariMobile: {
        name: { type: String, default: "Step 3" },
        instruction: { type: String, default: "Press ‘Add’" },
      },
      greeting: { type: String, default: "Hello, Welcome!" },
      wait: { type: String, default: "Please wait" },
      proceed: { type: String, default: "Continue" },
      description: { type: String, default: "Test 1" },
      containsAds: { type: String, default: "Contains ads" },
      inAppPurchases: { type: String, default: "In-app purchases" },
      headerReviews: { type: String, default: "3.2K reviews" },
      hundredPlus: { type: String, default: "100K+" },
      downloads: { type: String, default: "Downloads" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "Rated for 18+" },
      install: { type: String, default: "Install" },
      wishlist: { type: String, default: "Add to wishlist" },
      available: {
        type: String,
        default: "This app is available for your device",
      },
      aboutThisGame: { type: String, default: "About this game" },
      about1: {
        type: String,
        default:
          "1xBet™ is an exciting mobile casino app that will immerse you in a variety of unique games. Join us today and get an exclusive sign-up bonus to start your journey in search of profits.",
      },
      about2: {
        type: String,
        default:
          "With 1xBet™ you can enjoy the excitement of casino games, get free spins and increase your chances of winning with generous deposit bonuses. Our app offers a wide range of machines with different themes, high quality graphics and exciting animations.",
      },
      about3: {
        type: String,
        default:
          "Make secure and convenient transactions, play anytime and anywhere thanks to our user-friendly mobile interface. 1xBet™ is the perfect place for lovers of luck and excitement. Join us today and win!",
      },
      updatedOn: { type: String, default: "Updated on" },
      updatedDate: { type: String, default: "September 30, 2023" },
      casino: { type: String, default: "Casino" },
      dataSafety: { type: String, default: "Data safety" },
      safety: {
        type: String,
        default:
          "Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region and age. The developer provided this information and may update it over time.",
      },
      noInformation: { type: String, default: "No information" },
      seeDetails: { type: String, default: "See details" },
      ratingsAndReviews: { type: String, default: "Ratings and reviews" },
      verified: { type: String, default: "Ratings and reviews are verified" },
      phone: { type: String, default: "Phone" },
      tV: { type: String, default: "TV" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "Tablet" },
      reviews: { type: String, default: "reviews" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15.5M" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: {
        type: String,
        default: "people found this review helpful",
      },
      allReviews: { type: String, default: "See all reviews" },
      whatsNew: { type: String, default: "What’s new" },
      findHelpful: { type: String, default: "Did you find this helpful?" },
      yes: { type: String, default: "Yes" },
      no: { type: String, default: "No" },
      contact: { type: String, default: "Developer contact" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    french: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "Ouvrir" },
      stayOn: { type: String, default: "Rester sur le navigateur" },
      add: { type: String, default: "Ajouter" },
      clickIcon: {
        type: String,
        default:
          "Cliquez sur cette icône pour lancer l'application sur l'écran d'accueil",
      },
      pressIcon: {
        type: String,
        default:
          "Appuyez sur cette icône pour lancer l'application sur l'écran d'accueil",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "Étape 1" },
        instruction: {
          type: String,
          default: "Cliquez sur « Installer » dans le menu",
        },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "Étape 2" },
        instruction: { type: String, default: "Cliquez sur « Installer »" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "Étape 1" },
        instruction: {
          type: String,
          default: "Cliquez sur « Partager » dans le menu",
        },
      },
      step2SafariDesktop: {
        name: { type: String, default: "Étape 2" },
        instruction: {
          type: String,
          default: "Cliquez sur « Ajouter au Dock »",
        },
      },
      step3SafariDesktop: {
        name: { type: String, default: "Étape 3" },
        instruction: { type: String, default: "Cliquez sur « Ajouter »" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "Étape 1" },
        instruction: {
          type: String,
          default: "Appuyez sur « Partager » dans le menu",
        },
      },
      step2ChromeMobile: {
        name: { type: String, default: "Étape 2" },
        instruction: {
          type: String,
          default: "Appuyez sur « Ajouter à l'écran d'accueil »",
        },
      },
      step3ChromeMobile: {
        name: { type: String, default: "Étape 3" },
        instruction: { type: String, default: "Appuyez sur « Ajouter »" },
      },
      step1SafariMobile: {
        name: { type: String, default: "Étape 1" },
        instruction: {
          type: String,
          default: "Appuyez sur « Partager » dans le menu",
        },
      },
      step2SafariMobile: {
        name: { type: String, default: "Étape 2" },
        instruction: {
          type: String,
          default: "Appuyez sur « Ajouter à l'écran d'accueil »",
        },
      },
      step3SafariMobile: {
        name: { type: String, default: "Étape 3" },
        instruction: { type: String, default: "Appuyez sur « Ajouter »" },
      },
      greeting: { type: String, default: "Bonjour, Bienvenue !" },
      wait: { type: String, default: "Veuillez patienter" },
      proceed: { type: String, default: "Continuer" },
      description: { type: String, default: "Test 1" },
      containsAds: { type: String, default: "Contient des publicités" },
      inAppPurchases: { type: String, default: "Achats intégrés" },
      headerReviews: { type: String, default: "3,2K avis" },
      hundredPlus: { type: String, default: "100K+" },
      downloads: { type: String, default: "Téléchargements" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "Classé pour 18+" },
      install: { type: String, default: "Installer" },
      wishlist: { type: String, default: "Ajouter à la liste de souhaits" },
      available: {
        type: String,
        default: "Cette application est disponible pour votre appareil",
      },
      aboutThisGame: { type: String, default: "À propos de ce jeu" },
      about1: {
        type: String,
        default:
          "1xBet™ est une application de casino mobile passionnante qui vous plongera dans une variété de jeux uniques. Rejoignez-nous dès aujourd'hui et obtenez un bonus d'inscription exclusif pour commencer votre aventure à la recherche de profits.",
      },
      about2: {
        type: String,
        default:
          "Avec 1xBet™, vous pouvez profiter de l'excitation des jeux de casino, obtenir des tours gratuits et augmenter vos chances de gagner grâce à des bonus de dépôt généreux. Notre application propose une large gamme de machines avec différents thèmes, des graphismes de haute qualité et des animations captivantes.",
      },
      about3: {
        type: String,
        default:
          "Effectuez des transactions sécurisées et pratiques, jouez à tout moment et en tout lieu grâce à notre interface mobile conviviale. 1xBet™ est l'endroit idéal pour les amateurs de chance et de sensations fortes. Rejoignez-nous aujourd'hui et gagnez !",
      },
      updatedOn: { type: String, default: "Mis à jour le" },
      updatedDate: { type: String, default: "30 septembre 2023" },
      casino: { type: String, default: "Casino" },
      dataSafety: { type: String, default: "Sécurité des données" },
      safety: {
        type: String,
        default:
          "La sécurité commence par comprendre comment les développeurs collectent et partagent vos données. Les pratiques de confidentialité et de sécurité des données peuvent varier en fonction de votre utilisation, de votre région et de votre âge. Le développeur a fourni ces informations et peut les mettre à jour au fil du temps.",
      },
      noInformation: { type: String, default: "Aucune information" },
      seeDetails: { type: String, default: "Voir les détails" },
      ratingsAndReviews: { type: String, default: "Notes et avis" },
      verified: {
        type: String,
        default: "Les notes et les avis sont vérifiés",
      },
      phone: { type: String, default: "Téléphone" },
      tV: { type: String, default: "Télévision" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "Tablette" },
      reviews: { type: String, default: "avis" },
      fourPointThree: { type: String, default: "4,3" },
      fifteenM: { type: String, default: "15,5M" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: {
        type: String,
        default: "personnes ont trouvé cet avis utile",
      },
      allReviews: { type: String, default: "Voir tous les avis" },
      whatsNew: { type: String, default: "Quoi de neuf" },
      findHelpful: { type: String, default: "Avez-vous trouvé cela utile ?" },
      yes: { type: String, default: "Oui" },
      no: { type: String, default: "Non" },
      contact: { type: String, default: "Contact du développeur" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    indonesian: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "Buka" },
      stayOn: { type: String, default: "Tetap di peramban" },
      add: { type: String, default: " Tambah" },
      clickIcon: {
        type: String,
        default: "Klik ikon ini untuk meluncurkan aplikasi di layar utama",
      },
      pressIcon: {
        type: String,
        default: "Tekan ikon ini untuk meluncurkan aplikasi di layar utama",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Klik ‘Pasang’ pada menu" },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "Langkah 2" },
        instruction: { type: String, default: "Klik ‘Pasang’" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Klik ‘Bagikan’ pada menu" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "Langkah 2" },
        instruction: { type: String, default: "Klik ‘Tambahkan ke Dock’" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Klik ‘Tambahkan’" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Tekan ‘Bagikan’ pada menu" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "Langkah 2" },
        instruction: {
          type: String,
          default: "Tekan ‘Tambahkan ke Layar Utama’",
        },
      },
      step3ChromeMobile: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Tekan ‘Tambahkan’" },
      },
      step1SafariMobile: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Tekan ‘Bagikan’ pada menu" },
      },
      step2SafariMobile: {
        name: { type: String, default: "Langkah 2" },
        instruction: {
          type: String,
          default: "Tekan ‘Tambahkan ke Layar Utama’",
        },
      },
      step3SafariMobile: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Tekan ‘Tambahkan’" },
      },
      greeting: { type: String, default: "Halo, Selamat Datang!" },
      wait: { type: String, default: "Harap tunggu" },
      proceed: { type: String, default: "Lanjutkan" },
      description: { type: String, default: "Uji 1" },
      containsAds: { type: String, default: "Mengandung iklan" },
      inAppPurchases: { type: String, default: "Pembelian dalam aplikasi" },
      headerReviews: { type: String, default: "3,2 ribu ulasan" },
      hundredPlus: { type: String, default: "100 ribu+" },
      downloads: { type: String, default: "Unduhan" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "Dinilai untuk 18+" },
      install: { type: String, default: "Pasang" },
      wishlist: { type: String, default: "Tambahkan ke daftar keinginan" },
      available: {
        type: String,
        default: "Aplikasi ini tersedia untuk perangkat Anda",
      },
      aboutThisGame: { type: String, default: "Tentang aplikasi ini" },
      about1: {
        type: String,
        default:
          "1xBet™ adalah aplikasi kasino seluler yang mendebarkan yang akan membawa Anda ke berbagai permainan unik. Bergabunglah dengan kami hari ini dan dapatkan bonus pendaftaran eksklusif untuk memulai pencarian keuntungan Anda.",
      },
      about2: {
        type: String,
        default:
          "Dengan 1xBet™ Anda dapat menikmati keseruan permainan kasino, dapatkan putaran gratis, dan tingkatkan peluang Anda untuk menang dengan bonus deposit yang murah hati. Aplikasi kami menawarkan berbagai macam mesin dengan tema berbeda, grafis berkualitas tinggi, dan animasi yang menarik.",
      },
      about3: {
        type: String,
        default:
          "Lakukan transaksi yang aman dan nyaman, mainkan kapan saja dan di mana saja berkat antarmuka seluler kami yang ramah pengguna. 1xBet™ adalah tempat yang sempurna bagi pecinta keberuntungan dan keseruan. Bergabunglah dengan kami hari ini dan menangkan!",
      },
      updatedOn: { type: String, default: "Diperbarui pada" },
      updatedDate: { type: String, default: "30 September 2023" },
      casino: { type: String, default: "Kasino" },
      dataSafety: { type: String, default: "Keamanan data" },
      safety: {
        type: String,
        default:
          "Keamanan dimulai dengan memahami bagaimana pengembang mengumpulkan dan berbagi data Anda. Praktik privasi dan keamanan data mungkin berbeda berdasarkan penggunaan, wilayah, dan usia Anda. Informasi ini disediakan oleh pengembang dan dapat diperbarui seiring waktu.",
      },
      noInformation: { type: String, default: "Tidak ada informasi" },
      seeDetails: { type: String, default: "Lihat detail" },
      ratingsAndReviews: { type: String, default: "Peringkat dan ulasan" },
      verified: { type: String, default: "Peringkat dan ulasan diverifikasi" },
      phone: { type: String, default: "Telepon" },
      tV: { type: String, default: "TV" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "Tablet" },
      reviews: { type: String, default: "ulasan" },
      fourPointThree: { type: String, default: "4,3" },
      fifteenM: { type: String, default: "15,5 juta" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: {
        type: String,
        default: "personnes ont trouvé cet avis utile",
      },

      allReviews: { type: String, default: "Lihat semua ulasan" },
      whatsNew: { type: String, default: "Apa yang baru" },
      findHelpful: {
        type: String,
        default: "Apakah Anda merasa ini bermanfaat?",
      },
      yes: { type: String, default: "Ya" },
      no: { type: String, default: "Tidak" },
      contact: { type: String, default: "Kontak pengembang" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    urdu: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "کھولیں" },
      stayOn: { type: String, default: "براؤزر پر رہیں" },
      add: { type: String, default: " شامل کریں" },
      clickIcon: {
        type: String,
        default: "ایپ کو ہوم اسکرین پر لانچ کرنے کے لیے اس آئیکن پر کلک کریں",
      },
      pressIcon: {
        type: String,
        default: "ایپ کو ہوم اسکرین پر لانچ کرنے کے لیے اس آئیکن پر دبائیں",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "مرحلہ 1" },
        instruction: {
          type: String,
          default: "فہرست میں 'انسٹال' پر کلک کریں",
        },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "مرحلہ 2" },
        instruction: { type: String, default: "'انسٹال' پر کلک کریں" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "مرحلہ 1" },
        instruction: { type: String, default: "فہرست میں 'شیئر' پر کلک کریں" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "مرحلہ 2" },
        instruction: {
          type: String,
          default: "'ڈوک میں شامل کریں' پر کلک کریں",
        },
      },
      step3SafariDesktop: {
        name: { type: String, default: "مرحلہ 3" },
        instruction: { type: String, default: "'شامل کریں' پر کلک کریں" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "مرحلہ 1" },
        instruction: { type: String, default: "فہرست میں 'شیئر' دبائیں" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "مرحلہ 2" },
        instruction: {
          type: String,
          default: "'ہوم اسکرین پر شامل کریں' دبائیں",
        },
      },
      step3ChromeMobile: {
        name: { type: String, default: "مرحلہ 3" },
        instruction: { type: String, default: "'شامل کریں' دبائیں" },
      },
      step1SafariMobile: {
        name: { type: String, default: "مرحلہ 1" },
        instruction: { type: String, default: "فہرست میں 'شیئر' دبائیں" },
      },
      step2SafariMobile: {
        name: { type: String, default: "مرحلہ 2" },
        instruction: {
          type: String,
          default: "'ہوم اسکرین پر شامل کریں' دبائیں",
        },
      },
      step3SafariMobile: {
        name: { type: String, default: "مرحلہ 3" },
        instruction: { type: String, default: "'شامل کریں' دبائیں" },
      },
      greeting: { type: String, default: "ہیلو، خوش آمدید!" },
      wait: { type: String, default: "براہ کرم انتظار کریں" },
      proceed: { type: String, default: "جاری رکھیں" },
      description: { type: String, default: "ٹیسٹ 1" },
      containsAds: { type: String, default: "اشتہارات شامل ہیں" },
      inAppPurchases: { type: String, default: "ایپ میں خریداری" },
      headerReviews: { type: String, default: "3.2K جائزے" },
      hundredPlus: { type: String, default: "100K+" },
      downloads: { type: String, default: "ڈاؤن لوڈز" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "18+ کے لئے درجہ بند" },
      install: { type: String, default: "انسٹال کریں" },
      wishlist: { type: String, default: "خواہشات کی فہرست میں شامل کریں" },
      available: { type: String, default: "یہ ایپ آپ کے آلہ کے لئے دستیاب ہے" },
      aboutThisGame: { type: String, default: "اس گیم کے بارے میں" },
      about1: {
        type: String,
        default:
          "1xBet™ ایک دلچسپ موبائل کیسینو ایپ ہے جو آپ کو مختلف منفرد گیمز میں مشغول کرے گی۔ آج ہی شامل ہوں اور نفع کی تلاش کے سفر کا آغاز کرنے کے لئے خصوصی سائن اپ بونس حاصل کریں۔",
      },
      about2: {
        type: String,
        default:
          "1xBet™ کے ساتھ آپ کیسینو گیمز کا جوش و خروش محسوس کر سکتے ہیں، مفت گھماؤ حاصل کریں اور دل کھول کر جمع کردہ بونس کے ساتھ جیتنے کے امکانات بڑھا سکتے ہیں۔ ہماری ایپ مختلف موضوعات، اعلی معیار کے گرافکس اور دلچسپ انیمیشنز کے ساتھ مشینوں کی ایک وسیع رینج پیش کرتی ہے۔",
      },
      about3: {
        type: String,
        default:
          "محفوظ اور آسان لین دین کریں، کسی بھی وقت اور کہیں بھی ہمارے صارف دوست موبائل انٹرفیس کی بدولت کھیلیں۔ 1xBet™ قسمت اور جوش و خروش کے عاشقوں کے لئے بہترین جگہ ہے۔ آج ہی شامل ہوں اور جیتیں!",
      },
      updatedOn: { type: String, default: "پر اپ ڈیٹ کیا گیا" },
      updatedDate: { type: String, default: "30 ستمبر 2023" },
      casino: { type: String, default: "کیسینو" },
      dataSafety: { type: String, default: "ڈیٹا کی حفاظت" },
      safety: {
        type: String,
        default:
          "حفاظت کا آغاز اس بات کی سمجھ سے ہوتا ہے کہ ڈویلپر آپ کا ڈیٹا کیسے جمع اور شیئر کرتے ہیں۔ ڈیٹا کی رازداری اور سیکیورٹی کی حکمت عملی آپ کے استعمال، علاقے اور عمر کی بنیاد پر مختلف ہو سکتی ہے۔ ڈویلپر نے یہ معلومات فراہم کی ہیں اور وقت کے ساتھ اسے اپ ڈیٹ بھی کر سکتا ہے۔",
      },
      noInformation: { type: String, default: "کوئی معلومات نہیں" },
      seeDetails: { type: String, default: "تفصیلات دیکھیں" },
      ratingsAndReviews: { type: String, default: "درجات اور جائزے" },
      verified: { type: String, default: "درجات اور جائزے کی تصدیق کی گئی ہے" },
      phone: { type: String, default: "فون" },
      tV: { type: String, default: "ٹی وی" },
      chromebook: { type: String, default: "کروم بک" },
      tablet: { type: String, default: "ٹیبلٹ" },
      reviews: { type: String, default: "جائزے" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15.5M" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: { type: String, default: "لوگوں نے اس جائزے کو مفید پایا" },
      allReviews: { type: String, default: "تمام جائزے دیکھیں" },
      whatsNew: { type: String, default: "کیا نیا ہے" },
      findHelpful: { type: String, default: "کیا آپ نے اسے مفید پایا؟" },
      yes: { type: String, default: "ہاں" },
      no: { type: String, default: "نہیں" },
      contact: { type: String, default: "ڈویلپر سے رابطہ" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    korean: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "열기" },
      stayOn: { type: String, default: "브라우저에 머무르기" },
      add: { type: String, default: " 추가" },
      clickIcon: {
        type: String,
        default: "홈 화면에서 앱을 시작하려면 이 아이콘을 클릭하세요",
      },
      pressIcon: {
        type: String,
        default: "홈 화면에서 앱을 시작하려면 이 아이콘을 누르세요",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "1단계" },
        instruction: {
          type: String,
          default: "메뉴에서 '설치'를 클릭하십시오",
        },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "2단계" },
        instruction: { type: String, default: "'설치'를 클릭하십시오" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "1단계" },
        instruction: {
          type: String,
          default: "메뉴에서 '공유'를 클릭하십시오",
        },
      },
      step2SafariDesktop: {
        name: { type: String, default: "2단계" },
        instruction: { type: String, default: "'도크에 추가'를 클릭하십시오" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "3단계" },
        instruction: { type: String, default: "'추가'를 클릭하십시오" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "1단계" },
        instruction: { type: String, default: "메뉴에서 '공유'를 누르십시오" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "2단계" },
        instruction: { type: String, default: "'홈 화면에 추가'를 누르십시오" },
      },
      step3ChromeMobile: {
        name: { type: String, default: "3단계" },
        instruction: { type: String, default: "'추가'를 누르십시오" },
      },
      step1SafariMobile: {
        name: { type: String, default: "1단계" },
        instruction: { type: String, default: "메뉴에서 '공유'를 누르십시오" },
      },
      step2SafariMobile: {
        name: { type: String, default: "2단계" },
        instruction: { type: String, default: "'홈 화면에 추가'를 누르십시오" },
      },
      step3SafariMobile: {
        name: { type: String, default: "3단계" },
        instruction: { type: String, default: "'추가'를 누르십시오" },
      },
      greeting: { type: String, default: "안녕하세요, 환영합니다!" },
      wait: { type: String, default: "잠시 기다려 주세요" },
      proceed: { type: String, default: "계속" },
      description: { type: String, default: "테스트 1" },
      containsAds: { type: String, default: "광고 포함" },
      inAppPurchases: { type: String, default: "앱 내 구매" },
      headerReviews: { type: String, default: "3.2K 리뷰" },
      hundredPlus: { type: String, default: "100K+" },
      downloads: { type: String, default: "다운로드" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "18세 이상 이용 가능" },
      install: { type: String, default: "설치" },
      wishlist: { type: String, default: "위시리스트에 추가" },
      available: {
        type: String,
        default: "이 앱은 귀하의 기기에 사용할 수 있습니다",
      },
      aboutThisGame: { type: String, default: "이 앱에 대하여" },
      about1: {
        type: String,
        default:
          "1xBet™는 다양한 독특한 게임을 경험할 수 있는 모바일 카지노 앱입니다. 오늘 가입하고 특별한 가입 보너스를 받아 이익을 추구하는 여정을 시작하세요.",
      },
      about2: {
        type: String,
        default:
          "1xBet™로 카지노 게임의 흥분을 즐기고, 무료 스핀을 받으며, 넉넉한 예치 보너스로 당첨 확률을 높일 수 있습니다. 저희 앱은 다양한 테마, 고품질 그래픽 및 흥미로운 애니메이션을 제공하는 다양한 기계를 제공합니다.",
      },
      about3: {
        type: String,
        default:
          "안전하고 편리한 거래를 하고, 사용하기 쉬운 모바일 인터페이스 덕분에 언제 어디서든 게임을 즐기세요. 1xBet™는 운과 흥미를 사랑하는 사람들을 위한 완벽한 장소입니다. 오늘 가입하고 승리하세요!",
      },
      updatedOn: { type: String, default: "업데이트 날짜" },
      updatedDate: { type: String, default: "2023년 9월 30일" },
      casino: { type: String, default: "카지노" },
      dataSafety: { type: String, default: "데이터 안전" },
      safety: {
        type: String,
        default:
          "안전은 개발자가 데이터를 수집하고 공유하는 방식을 이해하는 것으로 시작됩니다. 데이터 개인정보 보호 및 보안 관행은 사용, 지역 및 연령에 따라 다를 수 있습니다. 이 정보는 개발자가 제공한 것이며 시간이 지나면서 업데이트될 수 있습니다.",
      },
      noInformation: { type: String, default: "정보 없음" },
      seeDetails: { type: String, default: "자세히 보기" },
      ratingsAndReviews: { type: String, default: "평점 및 리뷰" },
      verified: { type: String, default: "평점 및 리뷰가 검증되었습니다" },
      phone: { type: String, default: "전화" },
      tV: { type: String, default: "TV" },
      chromebook: { type: String, default: "크롬북" },
      tablet: { type: String, default: "태블릿" },
      reviews: { type: String, default: "리뷰" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15.5M" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: {
        type: String,
        default: "명이 이 리뷰를 유용하다고 평가했습니다",
      },

      allReviews: { type: String, default: "모든 리뷰 보기" },
      whatsNew: { type: String, default: "새로운 기능" },
      findHelpful: { type: String, default: "이 리뷰가 도움이 되었나요?" },
      yes: { type: String, default: "예" },
      no: { type: String, default: "아니요" },
      contact: { type: String, default: "개발자 연락처" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    russian: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "Открыть" },
      stayOn: { type: String, default: "Оставаться в браузере" },
      add: { type: String, default: " Добавить" },
      clickIcon: {
        type: String,
        default:
          "Нажмите на этот значок, чтобы запустить приложение на главном экране",
      },
      pressIcon: {
        type: String,
        default:
          "Нажмите на этот значок, чтобы запустить приложение на главном экране",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "Шаг 1" },
        instruction: { type: String, default: "Нажмите «Установить» в меню" },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "Шаг 2" },
        instruction: { type: String, default: "Нажмите «Установить»" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "Шаг 1" },
        instruction: { type: String, default: "Нажмите «Поделиться» в меню" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "Шаг 2" },
        instruction: {
          type: String,
          default: "Нажмите «Добавить на док-станцию»",
        },
      },
      step3SafariDesktop: {
        name: { type: String, default: "Шаг 3" },
        instruction: { type: String, default: "Нажмите «Добавить»" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "Шаг 1" },
        instruction: { type: String, default: "Нажмите «Поделиться» в меню" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "Шаг 2" },
        instruction: {
          type: String,
          default: "Нажмите «Добавить на главный экран»",
        },
      },
      step3ChromeMobile: {
        name: { type: String, default: "Шаг 3" },
        instruction: { type: String, default: "Нажмите «Добавить»" },
      },
      step1SafariMobile: {
        name: { type: String, default: "Шаг 1" },
        instruction: { type: String, default: "Нажмите «Поделиться» в меню" },
      },
      step2SafariMobile: {
        name: { type: String, default: "Шаг 2" },
        instruction: {
          type: String,
          default: "Нажмите «Добавить на главный экран»",
        },
      },
      step3SafariMobile: {
        name: { type: String, default: "Шаг 3" },
        instruction: { type: String, default: "Нажмите «Добавить»" },
      },
      greeting: { type: String, default: "Здравствуйте, Добро пожаловать!" },
      wait: { type: String, default: "Пожалуйста, подождите" },
      proceed: { type: String, default: "Продолжить" },
      description: { type: String, default: "Тест 1" },
      containsAds: { type: String, default: "Содержит рекламу" },
      inAppPurchases: { type: String, default: "Покупки внутри приложения" },
      headerReviews: { type: String, default: "3,2 тыс. отзывов" },
      hundredPlus: { type: String, default: "100 тыс.+" },
      downloads: { type: String, default: "Скачивания" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "Возрастной рейтинг 18+" },
      install: { type: String, default: "Установить" },
      wishlist: { type: String, default: "Добавить в список желаемого" },
      available: {
        type: String,
        default: "Это приложение доступно для вашего устройства",
      },
      aboutThisGame: { type: String, default: "О приложении" },
      about1: {
        type: String,
        default:
          "1xBet™ - это захватывающее мобильное казино, которое погрузит вас в разнообразие уникальных игр. Присоединяйтесь к нам сегодня и получите эксклюзивный бонус за регистрацию, чтобы начать свое путешествие за прибылью.",
      },
      about2: {
        type: String,
        default:
          "С 1xBet™ вы можете наслаждаться азартными играми, получать бесплатные вращения и увеличивать свои шансы на победу с помощью щедрых бонусов на депозит. Наше приложение предлагает широкий выбор игровых автоматов с различными темами, качественной графикой и захватывающей анимацией.",
      },
      about3: {
        type: String,
        default:
          "Совершайте безопасные и удобные транзакции, играйте в любое время и в любом месте благодаря нашему удобному интерфейсу для мобильных устройств. 1xBet™ - это идеальное место для любителей удачи и азарта. Присоединяйтесь к нам сегодня и побеждайте!",
      },
      updatedOn: { type: String, default: "Обновлено" },
      updatedDate: { type: String, default: "30 сентября 2023" },
      casino: { type: String, default: "Казино" },
      dataSafety: { type: String, default: "Безопасность данных" },
      safety: {
        type: String,
        default:
          "Безопасность начинается с понимания того, как разработчики собирают и обрабатывают ваши данные. Практики конфиденциальности и безопасности данных могут различаться в зависимости от вашего использования, региона и возраста. Эта информация предоставлена разработчиком и может быть обновлена со временем.",
      },
      noInformation: { type: String, default: "Нет информации" },
      seeDetails: { type: String, default: "Подробнее" },
      ratingsAndReviews: { type: String, default: "Оценки и отзывы" },
      verified: { type: String, default: "Оценки и отзывы проверены" },
      phone: { type: String, default: "Телефон" },
      tV: { type: String, default: "Телевизор" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "Планшет" },
      reviews: { type: String, default: "отзывы" },
      fourPointThree: { type: String, default: "4,3" },
      fifteenM: { type: String, default: "15,5 млн" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: {
        type: String,
        default: "человек нашли этот отзыв полезным",
      },

      allReviews: { type: String, default: "Смотреть все отзывы" },
      whatsNew: { type: String, default: "Что нового" },
      findHelpful: { type: String, default: "Вам это показалось полезным?" },
      yes: { type: String, default: "Да" },
      no: { type: String, default: "Нет" },
      contact: { type: String, default: "Контакт с разработчиком" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    turkish: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "Aç" },
      stayOn: { type: String, default: "Tarayıcıda kal" },
      add: { type: String, default: " Ekle" },
      clickIcon: {
        type: String,
        default: "Ana ekranda uygulamayı başlatmak için bu simgeye tıklayın",
      },
      pressIcon: {
        type: String,
        default: "Ana ekranda uygulamayı başlatmak için bu simgeye basın",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "Adım 1" },
        instruction: { type: String, default: "Menüde 'Yükle'ye tıklayın" },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "Adım 2" },
        instruction: { type: String, default: "'Yükle'ye tıklayın" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "Adım 1" },
        instruction: { type: String, default: "Menüde 'Paylaş'a tıklayın" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "Adım 2" },
        instruction: { type: String, default: "'Dock'a Ekle'ye tıklayın" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "Adım 3" },
        instruction: { type: String, default: "'Ekle'ye tıklayın" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "Adım 1" },
        instruction: { type: String, default: "Menüde 'Paylaş'a basın" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "Adım 2" },
        instruction: { type: String, default: "'Ana Ekrana Ekle'ye basın" },
      },
      step3ChromeMobile: {
        name: { type: String, default: "Adım 3" },
        instruction: { type: String, default: "'Ekle'ye basın" },
      },
      step1SafariMobile: {
        name: { type: String, default: "Adım 1" },
        instruction: { type: String, default: "Menüde 'Paylaş'a basın" },
      },
      step2SafariMobile: {
        name: { type: String, default: "Adım 2" },
        instruction: { type: String, default: "'Ana Ekrana Ekle'ye basın" },
      },
      step3SafariMobile: {
        name: { type: String, default: "Adım 3" },
        instruction: { type: String, default: "'Ekle'ye basın" },
      },
      greeting: { type: String, default: "Merhaba, Hoş geldiniz!" },
      wait: { type: String, default: "Lütfen bekleyin" },
      proceed: { type: String, default: "Devam et" },
      description: { type: String, default: "Test 1" },
      containsAds: { type: String, default: "Reklam içerir" },
      inAppPurchases: { type: String, default: "Uygulama içi satın alımlar" },
      headerReviews: { type: String, default: "3.2K değerlendirme" },
      hundredPlus: { type: String, default: "100B+" },
      downloads: { type: String, default: "İndirme" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "18+ için derecelendirildi" },
      install: { type: String, default: "Yükle" },
      wishlist: { type: String, default: "İstek listesine ekle" },
      available: {
        type: String,
        default: "Bu uygulama cihazınız için kullanılabilir",
      },
      aboutThisGame: { type: String, default: "Bu uygulama hakkında" },
      about1: {
        type: String,
        default:
          "1xBet™, sizi çeşitli benzersiz oyunlarla büyüleyecek heyecan verici bir mobil casino uygulamasıdır. Bugün bize katılın ve kar elde etme yolculuğunuzda başlamak için özel bir kayıt bonusu kazanın.",
      },
      about2: {
        type: String,
        default:
          "1xBet™ ile casino oyunlarının heyecanını yaşayabilir, bedava döndürme kazanabilir ve cömert depozito bonuslarıyla kazanma şansınızı artırabilirsiniz. Uygulamamız, farklı temalar, yüksek kaliteli grafikler ve heyecan verici animasyonlarla geniş bir makine yelpazesi sunar.",
      },
      about3: {
        type: String,
        default:
          "Güvenli ve rahat işlemler yapın, kullanıcı dostu mobil arayüzümüz sayesinde istediğiniz zaman ve yerde oynayın. 1xBet™, şans ve heyecan sevenler için mükemmel bir yerdir. Bugün bize katılın ve kazanın!",
      },
      updatedOn: { type: String, default: "Güncelleme tarihi" },
      updatedDate: { type: String, default: "30 Eylül 2023" },
      casino: { type: String, default: "Casino" },
      dataSafety: { type: String, default: "Veri güvenliği" },
      safety: {
        type: String,
        default:
          "Güvenlik, geliştiricilerin verilerinizi nasıl topladığını ve paylaştığını anlamakla başlar. Veri gizliliği ve güvenlik uygulamaları, kullanımınıza, bölgenize ve yaşınıza bağlı olarak değişebilir. Bu bilgi geliştirici tarafından sağlanmıştır ve zaman içinde güncellenebilir.",
      },
      noInformation: { type: String, default: "Bilgi yok" },
      seeDetails: { type: String, default: "Ayrıntıları gör" },
      ratingsAndReviews: {
        type: String,
        default: "Derecelendirmeler ve incelemeler",
      },
      verified: {
        type: String,
        default: "Derecelendirmeler ve incelemeler doğrulandı",
      },
      phone: { type: String, default: "Telefon" },
      tV: { type: String, default: "TV" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "Tablet" },
      reviews: { type: String, default: "yorumlar" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15,5M" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],
      helpful: { type: String, default: "kişi bu yorumu yararlı buldu" },
      allReviews: { type: String, default: "Tüm yorumları gör" },
      whatsNew: { type: String, default: "Yenilikler" },
      findHelpful: {
        type: String,
        default: "Bu yorumun yararlı olduğunu düşünüyor musunuz?",
      },
      yes: { type: String, default: "Evet" },
      no: { type: String, default: "Hayır" },
      contact: { type: String, default: "Geliştirici iletişimi" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
    malay: {
      isExist: { type: Boolean, default: false },
      open: { type: String, default: "Buka" },
      stayOn: { type: String, default: "Kekal di pelayar" },
      add: { type: String, default: " Tambah" },
      clickIcon: {
        type: String,
        default: "Klik ikon ini untuk melancarkan aplikasi di Laman Utama",
      },
      pressIcon: {
        type: String,
        default: "Tekan ikon ini untuk melancarkan aplikasi di Laman Utama",
      },
      step1ChromeDesktop: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Klik ‘Pasang’ pada menu" },
      },
      step2ChromeDesktop: {
        name: { type: String, default: "Langkah 2" },
        instruction: { type: String, default: "Klik ‘Pasang’" },
      },
      step1SafariDesktop: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Klik ‘Kongsi’ pada menu" },
      },
      step2SafariDesktop: {
        name: { type: String, default: "Langkah 2" },
        instruction: { type: String, default: "Klik ‘Tambahkan ke Dock’" },
      },
      step3SafariDesktop: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Klik ‘Tambahkan’" },
      },
      step1ChromeMobile: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Tekan ‘Kongsi’ pada menu" },
      },
      step2ChromeMobile: {
        name: { type: String, default: "Langkah 2" },
        instruction: {
          type: String,
          default: "Tekan ‘Tambahkan ke Skrin Utama’",
        },
      },
      step3ChromeMobile: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Tekan ‘Tambahkan’" },
      },
      step1SafariMobile: {
        name: { type: String, default: "Langkah 1" },
        instruction: { type: String, default: "Tekan ‘Kongsi’ pada menu" },
      },
      step2SafariMobile: {
        name: { type: String, default: "Langkah 2" },
        instruction: {
          type: String,
          default: "Tekan ‘Tambahkan ke Skrin Utama’",
        },
      },
      step3SafariMobile: {
        name: { type: String, default: "Langkah 3" },
        instruction: { type: String, default: "Tekan ‘Tambahkan’" },
      },
      greeting: { type: String, default: "Halo, Selamat Datang!" },
      wait: { type: String, default: "Sila tunggu" },
      proceed: { type: String, default: "Teruskan" },
      description: { type: String, default: "Ujian 1" },
      containsAds: { type: String, default: "Mengandungi iklan" },
      inAppPurchases: { type: String, default: "Pembelian dalam aplikasi" },
      headerReviews: { type: String, default: "3.2 ribu ulasan" },
      hundredPlus: { type: String, default: "100 ribu+" },
      downloads: { type: String, default: "Muat turun" },
      ageLimit: { type: String, default: "18+" },
      ageRating: { type: String, default: "Dinilai untuk 18+" },
      install: { type: String, default: "Pasang" },
      wishlist: { type: String, default: "Tambahkan ke senarai hajat" },
      available: {
        type: String,
        default: "Aplikasi ini tersedia untuk peranti anda",
      },
      aboutThisGame: { type: String, default: "Tentang aplikasi ini" },
      about1: {
        type: String,
        default:
          "1xBet™ adalah aplikasi kasino mudah alih yang menarik yang akan membawa anda ke dalam pelbagai permainan unik. Sertai kami hari ini dan dapatkan bonus pendaftaran eksklusif untuk memulakan perjalanan mencari keuntungan anda.",
      },
      about2: {
        type: String,
        default:
          "Dengan 1xBet™ anda boleh menikmati keseronokan permainan kasino, dapatkan putaran percuma dan tingkatkan peluang anda untuk menang dengan bonus deposit yang murah hati. Aplikasi kami menawarkan pelbagai jenis mesin dengan tema berbeza, grafik berkualiti tinggi, dan animasi menarik.",
      },
      about3: {
        type: String,
        default:
          "Lakukan transaksi yang selamat dan mudah, mainkan bila-bila masa dan di mana sahaja terima kasih kepada antara muka mudah alih mesra pengguna kami. 1xBet™ adalah tempat yang sempurna untuk pencinta nasib dan keseronokan. Sertai kami hari ini dan menang!",
      },
      updatedOn: { type: String, default: "Dikemaskini pada" },
      updatedDate: { type: String, default: "30 September 2023" },
      casino: { type: String, default: "Kasino" },
      dataSafety: { type: String, default: "Keselamatan data" },
      safety: {
        type: String,
        default:
          "Keselamatan bermula dengan memahami bagaimana pemaju mengumpul dan berkongsi data anda. Amalan privasi dan keselamatan data mungkin berbeza berdasarkan penggunaan anda, rantau, dan umur. Maklumat ini disediakan oleh pemaju dan mungkin dikemas kini dari masa ke masa.",
      },
      noInformation: { type: String, default: "Tiada maklumat" },
      seeDetails: { type: String, default: "Lihat butiran" },
      ratingsAndReviews: { type: String, default: "Penilaian dan ulasan" },
      verified: { type: String, default: "Penilaian dan ulasan disahkan" },
      phone: { type: String, default: "Telefon" },
      tV: { type: String, default: "TV" },
      chromebook: { type: String, default: "Chromebook" },
      tablet: { type: String, default: "Tablet" },
      reviews: { type: String, default: "ulasan" },
      fourPointThree: { type: String, default: "4.3" },
      fifteenM: { type: String, default: "15.5 juta" },
      reviewObject: [
        {
          name: { type: String, default: "" },
          date: { type: String, default: "" },
          review: {
            type: String,
            default: "",
          },

          photo: { type: String, default: "" },
          rating: { type: String, default: "" },
        },
      ],

      helpful: {
        type: String,
        default: "orang mendapati ulasan ini berguna",
      },
      allReviews: { type: String, default: "Lihat semua ulasan" },
      whatsNew: { type: String, default: "Apa yang baru" },
      findHelpful: {
        type: String,
        default: "Adakah anda mendapati ini berguna?",
      },
      yes: { type: String, default: "Ya" },
      no: { type: String, default: "Tidak" },
      contact: { type: String, default: "Hubungi pemaju" },
      icon: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180508/dmt/background/favicon.svg",
      },
      //Thesame language could be spoken in several countries with different baning or financial systems
      screenShotsObject: [
        {
          country: String,
          screenShots: { type: [String], default: [] },
          fallBackScreenShots: { type: [String], default: [] },
        },
      ],
      backgroundPhotoMobile: { type: String, default: "" },
      backgroundPhotoDesktop: { type: String, default: "" },
      fallBackBackgroundPhotoMobile: { type: String, default: "" },
      fallBackBackgroundPhotoDesktop: { type: String, default: "" },
      logo: {
        type: String,
        default:
          "https://res.cloudinary.com/datkh2oxv/image/upload/v1731180083/dmt/background/logo.jpg",
      },
      appTitle: { type: String, default: "1xBet™ - Casino" },
      appSubTitle: { type: String, default: "1xBet™" },
    },
  },
  { timestamps: true }
);

const Pwa = mongoose.model("Pwa", pwaSchema);
module.exports = Pwa;
