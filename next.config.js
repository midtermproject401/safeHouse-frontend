module.exports = {
  images: {
    domains: [
      "cf.bstatic.com",
      "www.online-tech-tips.com",
      "i1.wp.com",
      "s7d2.scene7.com",
      "www.perlentravel.com",
      "lh3.googleusercontent.com",
      "cdn-cms2.hotelrunner.com",
      "www.lujohotel.com",
      "travelinspiredliving.com",
      "marti-myra-hotel.antalyacoast.com",
      "marti-myra-hotel.antalyacoast.com",
      "assets.avanihotels.com",
      "static.onecms.io",
      "lh3.googleusercontent.com",
      "https://www.furniturechoice.co.uk",
      "https://img1.cgtrader.com",
      "https://cf.bstatic.com",
      "www.furniturechoice.co.uk",
      "img1.cgtrader.com",
      "www.thespruce.com",
      "www.thespruce.com",
      "www.online-tech-tips.com",
      "i1.wp.com",
      "s7d2.scene7.com",
      "www.perlentravel.com",
      "lh3.googleusercontent.com",
      "storage.googleapis.com",
      "st.hzcdn.com",
      "wp-tid.zillowstatic.com",
      "s7g10.scene7.com",
      "www.bhg.com.au",
      "hips.hearstapps.com",
      "uploads.prod01.sydney.platformos.com",
      "ellalanguage.com",
      "encrypted-tbn0.gstatic.com",
      "www.shiversbathrooms.com",
      "www.renderhub.com",
      "cdn.mos.cms.futurecdn.net",
      "res.cloudinary.com",
      "www.villasud.com",
      "roohome.com",
      "www.safewise.com",
      "hadaeeq.com",
      "www.gimenezganga.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
