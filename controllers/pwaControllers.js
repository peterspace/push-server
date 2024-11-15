const Pwa = require("../models/Pwa");

const defaultAppId = process.env.DEFAULT_APP_ID;

const createPwa1 = async (req, res) => {
  try {
    const {
      adminId,
      language,
      languages,
      defaultLanguage,
      headerReviews,
      hundredPlus,
      aboutThisGame,
      about1,
      about2,
      about3,
      updatedDate,
      casino,
      reviewObject,
      icon,
      logo,
      appTitle,
      appSubTitle,
      screenShotsObject,
      domain,
      subDomain,
    } = req.body;

    const userData = {
      isExist: true,
      headerReviews,
      hundredPlus,
      aboutThisGame,
      about1,
      about2,
      about3,
      updatedDate,
      casino,
      reviewObject,
      icon,
      logo,
      appTitle,
      appSubTitle,
      screenShotsObject,
    };

    let newPwa = {};
    if (language === "Arabic") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        arabic: userData,
      });
    }

    if (language === "Chinese") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        chinese: userData,
      });
    }
    if (language === "Dutch") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        dutch: userData,
      });
    }
    if (language === "English") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        english: userData,
      });
    }
    if (language === "French") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        french: userData,
      });
    }
    if (language === "Indonesian") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        indonesian: userData,
      });
    }
    if (language === "Urdu") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        urdu: userData,
      });
    }
    if (language === "Korean") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        korean: userData,
      });
    }
    if (language === "Russian") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        russian: userData,
      });
    }
    if (language === "Turkish") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        turkish: userData,
      });
    }
    if (language === "Malay") {
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        malay: userData,
      });
    }

    const updatedResponse = await newPwa.save();
    if (updatedResponse) {
      res.status(200).json(updatedResponse);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

async function testDefaultApp() {
  const defaultApp = await Pwa.findById(defaultAppId);

  if (defaultApp) {
    console.log({ appEnglish: defaultApp?.english });
  }
}
// testDefaultApp()
const createPwa = async (req, res) => {
  try {
    const {
      adminId,
      language,
      languages,
      defaultLanguage,
      headerReviews,
      hundredPlus,
      aboutThisGame,
      about1,
      about2,
      about3,
      updatedDate,
      casino,
      reviewObject,
      icon,
      logo,
      appTitle,
      appSubTitle,
      screenShotsObject,
      domain,
      subDomain,
    } = req.body;

    const defaultApp = await Pwa.findById(defaultAppId);

    if (!defaultAppId) {
      console.log("service temporarily not available");
      return;
    }

    if (!adminId || !language || !defaultLanguage) {
      console.log("one or more input required");
      return;
    }

    let newPwa = {};
    if (language === "Arabic") {
      const defaultValues = defaultApp.arabic;

      const userDataArabic = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        arabic: userDataArabic,
      });
    }

    if (language === "Chinese") {
      const defaultValues = defaultApp.chinese;

      const userDataChinese = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        chinese: userDataChinese,
      });
    }
    if (language === "Dutch") {
      const defaultValues = defaultApp.dutch;

      const userDataDutch = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        dutch: userDataDutch,
      });
    }
    if (language === "English") {
      const defaultValues = defaultApp.english;

      const userDataEnglish = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        english: userDataEnglish,
      });
    }
    if (language === "French") {
      const defaultValues = defaultApp.french;
      const userDataFrench = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };

      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        french: userDataFrench,
      });
    }
    if (language === "Indonesian") {
      const defaultValues = defaultApp.indonesian;
      const userDataIndonesian = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        indonesian: userDataIndonesian,
      });
    }
    if (language === "Urdu") {
      const defaultValues = defaultApp.urdu;
      const userDataUrdu = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        urdu: userDataUrdu,
      });
    }
    if (language === "Korean") {
      const defaultValues = defaultApp.korean;
      const userDataKorean = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };

      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        korean: userDataKorean,
      });
    }
    if (language === "Russian") {
      const defaultValues = defaultApp.russian;
      const userDataRussian = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };

      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        russian: userDataRussian,
      });
    }
    if (language === "Turkish") {
      const defaultValues = defaultApp.turkish;

      const userDataTurkish = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };

      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        turkish: userDataTurkish,
      });
    }
    if (language === "Malay") {
      const defaultValues = defaultApp.malay;

      const userDataMalay = {
        isExist: true,
        headerReviews: headerReviews || defaultValues.headerReviews,
        hundredPlus: hundredPlus || defaultValues.hundredPlus,
        aboutThisGame: aboutThisGame || defaultValues.aboutThisGame,
        about1: about1 || defaultValues.about1,
        about2: about2 || defaultValues.about2,
        about3: about3 || defaultValues.about3,
        updatedDate: updatedDate || defaultValues.updatedDate,
        casino: casino || defaultValues.casino,
        reviewObject: reviewObject || defaultValues.reviewObject,
        icon: icon || defaultValues.icon,
        logo: logo || defaultValues.logo,
        appTitle: appTitle || defaultValues.appTitle,
        appSubTitle: appSubTitle || defaultValues.appSubTitle,
        screenShotsObject: screenShotsObject || defaultValues.screenShotsObject,
      };
      newPwa = new Pwa({
        adminId,
        domain,
        subDomain,
        language,
        languages,
        defaultLanguage,
        malay: userDataMalay,
      });
    }

    const updatedResponse = await newPwa.save();
    if (updatedResponse) {
      res.status(200).json(updatedResponse);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllPwa = async (req, res) => {
  try {
    const pwaApps = await Pwa.find();
    res.status(200).json(pwaApps);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// For apps
const getPwaByIdAndLanguage = async (req, res) => {
  console.log("fetching Data by id and language");

  console.log({ params: req.params });
  try {
    const { appId, language } = req.params;
    const pwa = await Pwa.findById(appId);
    if (!pwa) {
      return res.status(404).json({ message: "Pwa event not found" });
    }

    let response = {};
    if (language === "Arabic") {
      response = pwa.arabic;
    }

    if (language === "Chinese") {
      response = pwa.chinese;
    }
    if (language === "Dutch") {
      response = pwa.dutch;
    }
    if (language === "English") {
      response = pwa.english;
    }
    if (language === "French") {
      response = pwa.french;
    }
    if (language === "Indonesian") {
      response = pwa.indonesian;
    }
    if (language === "Urdu") {
      response = pwa.urdu;
    }
    if (language === "Korean") {
      response = pwa.korean;
    }
    if (language === "Russian") {
      response = pwa.russian;
    }
    if (language === "Turkish") {
      response = pwa.turkish;
    }
    if (language === "Urdu") {
      response = pwa.urdu;
    }

    // console.log({response});
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPwaById = async (req, res) => {
  try {
    const { appId } = req.params;
    const pwa = await Pwa.findById(appId);
    if (!pwa) {
      return res.status(404).json({ message: "Pwa event not found" });
    }
    res.status(200).json(pwa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePwa = async (req, res) => {
  try {
    const {
      appId,
      adminId,
      language,
      languages,
      defaultLanguage,
      headerReviews,
      hundredPlus,
      aboutThisGame,
      about1,
      about2,
      about3,
      updatedDate,
      casino,
      reviewObject,
      icon,
      logo,
      appTitle,
      appSubTitle,
      screenShotsObject,
      domain,
      subDomain,
    } = req.body;

    if (!appId) {
      console.log("appId required");
      return;
    }
    if (!adminId) {
      console.log("adminId required");
      return;
    }
    if (!language) {
      console.log("language required");
      return;
    }
    const pwa = await Pwa.findOne({ _id: appId, adminId });
    if (pwa) {
      let updatedPWA = {};
      pwa.domain = domain || pwa.domain;
      pwa.subDomain = subDomain || pwa.subDomain;
      pwa.languages = languages || pwa.languages;
      pwa.defaultLanguage = defaultLanguage || pwa.defaultLanguage;

      if (language === "Arabic") {
        pwa.arabic.headerReviews = headerReviews || pwa.arabic.headerReviews;
        pwa.arabic.hundredPlus = hundredPlus || pwa.arabic.hundredPlus;
        pwa.arabic.aboutThisGame = aboutThisGame || pwa.arabic.aboutThisGame;
        pwa.arabic.about1 = about1 || pwa.arabic.about1;
        pwa.arabic.about2 = about2 || pwa.arabic.about2;
        pwa.arabic.about3 = about3 || pwa.arabic.about3;
        pwa.arabic.updatedDate = updatedDate || pwa.arabic.updatedDate;
        pwa.arabic.casino = casino || pwa.arabic.casino;
        pwa.arabic.reviewObject = reviewObject || pwa.arabic.reviewObject;
        pwa.arabic.icon = icon || pwa.arabic.icon;
        pwa.arabic.logo = logo || pwa.arabic.logo;
        pwa.arabic.appTitle = appTitle || pwa.arabic.appTitle;
        pwa.arabic.appSubTitle = appSubTitle || pwa.arabic.appSubTitle;
        pwa.arabic.screenShotsObject =
          screenShotsObject || pwa.arabic.screenShotsObject;

        //=========================================================================

        updatedPWA = await pwa.save();
      }

      if (language === "Chinese") {
        pwa.chinese.headerReviews = headerReviews || pwa.chinese.headerReviews;
        pwa.chinese.hundredPlus = hundredPlus || pwa.chinese.hundredPlus;
        pwa.chinese.aboutThisGame = aboutThisGame || pwa.chinese.aboutThisGame;
        pwa.chinese.about1 = about1 || pwa.chinese.about1;
        pwa.chinese.about2 = about2 || pwa.chinese.about2;
        pwa.chinese.about3 = about3 || pwa.chinese.about3;
        pwa.chinese.updatedDate = updatedDate || pwa.chinese.updatedDate;
        pwa.chinese.casino = casino || pwa.chinese.casino;
        pwa.chinese.reviewObject = reviewObject || pwa.chinese.reviewObject;
        pwa.chinese.icon = icon || pwa.chinese.icon;
        pwa.chinese.logo = logo || pwa.chinese.logo;
        pwa.chinese.appTitle = appTitle || pwa.chinese.appTitle;
        pwa.chinese.appSubTitle = appSubTitle || pwa.chinese.appSubTitle;
        pwa.chinese.screenShotsObject =
          screenShotsObject || pwa.chinese.screenShotsObject;
        updatedPWA = await pwa.save();
      }
      if (language === "Dutch") {
        pwa.dutch.headerReviews = headerReviews || pwa.dutch.headerReviews;
        pwa.dutch.hundredPlus = hundredPlus || pwa.dutch.hundredPlus;
        pwa.dutch.aboutThisGame = aboutThisGame || pwa.dutch.aboutThisGame;
        pwa.dutch.about1 = about1 || pwa.dutch.about1;
        pwa.dutch.about2 = about2 || pwa.dutch.about2;
        pwa.dutch.about3 = about3 || pwa.dutch.about3;
        pwa.dutch.updatedDate = updatedDate || pwa.dutch.updatedDate;
        pwa.dutch.casino = casino || pwa.dutch.casino;
        pwa.dutch.reviewObject = reviewObject || pwa.dutch.reviewObject;
        pwa.dutch.icon = icon || pwa.dutch.icon;
        pwa.dutch.logo = logo || pwa.dutch.logo;
        pwa.dutch.appTitle = appTitle || pwa.dutch.appTitle;
        pwa.dutch.appSubTitle = appSubTitle || pwa.dutch.appSubTitle;
        pwa.dutch.screenShotsObject =
          screenShotsObject || pwa.dutch.screenShotsObject;
        updatedPWA = await pwa.save();
      }
      if (language === "English") {
        pwa.english.headerReviews = headerReviews || pwa.english.headerReviews;
        pwa.english.hundredPlus = hundredPlus || pwa.english.hundredPlus;
        pwa.english.aboutThisGame = aboutThisGame || pwa.english.aboutThisGame;
        pwa.english.about1 = about1 || pwa.english.about1;
        pwa.english.about2 = about2 || pwa.english.about2;
        pwa.english.about3 = about3 || pwa.english.about3;
        pwa.english.updatedDate = updatedDate || pwa.english.updatedDate;
        pwa.english.casino = casino || pwa.english.casino;
        pwa.english.reviewObject = reviewObject || pwa.english.reviewObject;
        pwa.english.icon = icon || pwa.english.icon;
        pwa.english.logo = logo || pwa.english.logo;
        pwa.english.appTitle = appTitle || pwa.english.appTitle;
        pwa.english.appSubTitle = appSubTitle || pwa.english.appSubTitle;
        pwa.english.screenShotsObject =
          screenShotsObject || pwa.english.screenShotsObject;
        updatedPWA = await pwa.save();
      }
      if (language === "French") {
        pwa.french.headerReviews = headerReviews || pwa.french.headerReviews;
        pwa.french.hundredPlus = hundredPlus || pwa.french.hundredPlus;
        pwa.french.aboutThisGame = aboutThisGame || pwa.french.aboutThisGame;
        pwa.french.about1 = about1 || pwa.french.about1;
        pwa.french.about2 = about2 || pwa.french.about2;
        pwa.french.about3 = about3 || pwa.french.about3;
        pwa.french.updatedDate = updatedDate || pwa.french.updatedDate;
        pwa.french.casino = casino || pwa.french.casino;
        pwa.french.reviewObject = reviewObject || pwa.french.reviewObject;
        pwa.french.icon = icon || pwa.french.icon;
        pwa.french.logo = logo || pwa.french.logo;
        pwa.french.appTitle = appTitle || pwa.french.appTitle;
        pwa.french.appSubTitle = appSubTitle || pwa.french.appSubTitle;
        pwa.french.screenShotsObject =
          screenShotsObject || pwa.french.screenShotsObject;
        updatedPWA = await pwa.save();
      }
      if (language === "Indonesian") {
        pwa.indonesian.headerReviews =
          headerReviews || pwa.indonesian.headerReviews;
        pwa.indonesian.hundredPlus = hundredPlus || pwa.indonesian.hundredPlus;
        pwa.indonesian.aboutThisGame =
          aboutThisGame || pwa.indonesian.aboutThisGame;
        pwa.indonesian.about1 = about1 || pwa.indonesian.about1;
        pwa.indonesian.about2 = about2 || pwa.indonesian.about2;
        pwa.indonesian.about3 = about3 || pwa.indonesian.about3;
        pwa.indonesian.updatedDate = updatedDate || pwa.indonesian.updatedDate;
        pwa.indonesian.casino = casino || pwa.indonesian.casino;
        pwa.indonesian.reviewObject =
          reviewObject || pwa.indonesian.reviewObject;
        pwa.indonesian.icon = icon || pwa.indonesian.icon;
        pwa.indonesian.logo = logo || pwa.indonesian.logo;
        pwa.indonesian.appTitle = appTitle || pwa.indonesian.appTitle;
        pwa.indonesian.appSubTitle = appSubTitle || pwa.indonesian.appSubTitle;
        pwa.indonesian.screenShotsObject =
          screenShotsObject || pwa.indonesian.screenShotsObject;
        updatedPWA = await pwa.save();
      }
      if (language === "Urdu") {
        pwa.urdu.headerReviews = headerReviews || pwa.urdu.headerReviews;
        pwa.urdu.hundredPlus = hundredPlus || pwa.urdu.hundredPlus;
        pwa.urdu.aboutThisGame = aboutThisGame || pwa.urdu.aboutThisGame;
        pwa.urdu.about1 = about1 || pwa.urdu.about1;
        pwa.urdu.about2 = about2 || pwa.urdu.about2;
        pwa.urdu.about3 = about3 || pwa.urdu.about3;
        pwa.urdu.updatedDate = updatedDate || pwa.urdu.updatedDate;
        pwa.urdu.casino = casino || pwa.urdu.casino;
        pwa.urdu.reviewObject = reviewObject || pwa.urdu.reviewObject;
        pwa.urdu.icon = icon || pwa.urdu.icon;
        pwa.urdu.logo = logo || pwa.urdu.logo;
        pwa.urdu.appTitle = appTitle || pwa.urdu.appTitle;
        pwa.urdu.appSubTitle = appSubTitle || pwa.urdu.appSubTitle;
        pwa.urdu.screenShotsObject =
          screenShotsObject || pwa.urdu.screenShotsObject;

        updatedPWA = await pwa.save();
      }
      if (language === "Korean") {
        pwa.korean.headerReviews = headerReviews || pwa.korean.headerReviews;
        pwa.korean.hundredPlus = hundredPlus || pwa.korean.hundredPlus;
        pwa.korean.aboutThisGame = aboutThisGame || pwa.korean.aboutThisGame;
        pwa.korean.about1 = about1 || pwa.korean.about1;
        pwa.korean.about2 = about2 || pwa.korean.about2;
        pwa.korean.about3 = about3 || pwa.korean.about3;
        pwa.korean.updatedDate = updatedDate || pwa.korean.updatedDate;
        pwa.korean.casino = casino || pwa.korean.casino;
        pwa.korean.reviewObject = reviewObject || pwa.korean.reviewObject;
        pwa.korean.icon = icon || pwa.korean.icon;
        pwa.korean.logo = logo || pwa.korean.logo;
        pwa.korean.appTitle = appTitle || pwa.korean.appTitle;
        pwa.korean.appSubTitle = appSubTitle || pwa.korean.appSubTitle;
        pwa.korean.screenShotsObject =
          screenShotsObject || pwa.korean.screenShotsObject;
        updatedPWA = await pwa.save();
      }
      if (language === "Russian") {
        pwa.russian.headerReviews = headerReviews || pwa.russian.headerReviews;
        pwa.russian.hundredPlus = hundredPlus || pwa.russian.hundredPlus;
        pwa.russian.aboutThisGame = aboutThisGame || pwa.russian.aboutThisGame;
        pwa.russian.about1 = about1 || pwa.russian.about1;
        pwa.russian.about2 = about2 || pwa.russian.about2;
        pwa.russian.about3 = about3 || pwa.russian.about3;
        pwa.russian.updatedDate = updatedDate || pwa.russian.updatedDate;
        pwa.russian.casino = casino || pwa.russian.casino;
        pwa.russian.reviewObject = reviewObject || pwa.russian.reviewObject;
        pwa.russian.icon = icon || pwa.russian.icon;
        pwa.russian.logo = logo || pwa.russian.logo;
        pwa.russian.appTitle = appTitle || pwa.russian.appTitle;
        pwa.russian.appSubTitle = appSubTitle || pwa.russian.appSubTitle;
        pwa.russian.screenShotsObject =
          screenShotsObject || pwa.russian.screenShotsObject;
        updatedPWA = await pwa.save();
      }
      if (language === "Turkish") {
        pwa.turkish.headerReviews = headerReviews || pwa.turkish.headerReviews;
        pwa.turkish.hundredPlus = hundredPlus || pwa.turkish.hundredPlus;
        pwa.turkish.aboutThisGame = aboutThisGame || pwa.turkish.aboutThisGame;
        pwa.turkish.about1 = about1 || pwa.turkish.about1;
        pwa.turkish.about2 = about2 || pwa.turkish.about2;
        pwa.turkish.about3 = about3 || pwa.turkish.about3;
        pwa.turkish.updatedDate = updatedDate || pwa.turkish.updatedDate;
        pwa.turkish.casino = casino || pwa.turkish.casino;
        pwa.turkish.reviewObject = reviewObject || pwa.turkish.reviewObject;
        pwa.turkish.icon = icon || pwa.turkish.icon;
        pwa.turkish.logo = logo || pwa.turkish.logo;
        pwa.turkish.appTitle = appTitle || pwa.turkish.appTitle;
        pwa.turkish.appSubTitle = appSubTitle || pwa.turkish.appSubTitle;
        pwa.turkish.screenShotsObject =
          screenShotsObject || pwa.turkish.screenShotsObject;
        updatedPWA = await pwa.save();
      }
      if (language === "Malay") {
        pwa.malay.headerReviews = headerReviews || pwa.malay.headerReviews;
        pwa.malay.hundredPlus = hundredPlus || pwa.malay.hundredPlus;
        pwa.malay.aboutThisGame = aboutThisGame || pwa.malay.aboutThisGame;
        pwa.malay.about1 = about1 || pwa.malay.about1;
        pwa.malay.about2 = about2 || pwa.malay.about2;
        pwa.malay.about3 = about3 || pwa.malay.about3;
        pwa.malay.updatedDate = updatedDate || pwa.malay.updatedDate;
        pwa.malay.casino = casino || pwa.malay.casino;
        pwa.malay.reviewObject = reviewObject || pwa.malay.reviewObject;
        pwa.malay.icon = icon || pwa.malay.icon;
        pwa.malay.logo = logo || pwa.malay.logo;
        pwa.malay.appTitle = appTitle || pwa.malay.appTitle;
        pwa.malay.appSubTitle = appSubTitle || pwa.malay.appSubTitle;
        pwa.malay.screenShotsObject =
          screenShotsObject || pwa.malay.screenShotsObject;
        updatedPWA = await pwa.save();
      }

      if (updatedPWA) {
        res.status(200).json(updatedPWA);
      } else {
        res.status(404);
        throw new Error("App not found");
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePwa = async (req, res) => {
  try {
    const { appId } = req.params;
    const deletedApp = await Pwa.findByIdAndDelete(appId);
    if (!deletedApp) {
      return res.status(404).json({ message: "Pwa app not found" });
    }
    res.status(200).json({ message: "Pwa app deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//TODO

//update and delete reviews
module.exports = {
  createPwa,
  getAllPwa,
  getPwaByIdAndLanguage,
  getPwaById,
  updatePwa,
  deletePwa,
};
