import MobileDetect from "mobile-detect"

const deviceDetailsGb = new MobileDetect(navigator.userAgent)
const deviceDetails = {
  mobile: deviceDetailsGb.mobile(),
  tablet: deviceDetailsGb.tablet(),
  os: deviceDetailsGb.os(),
}

export const minSupportedWidth = 1024
export const maxSupportedWidth = 1366

let { innerWidth } = window
if (innerWidth < minSupportedWidth) {
  innerWidth = minSupportedWidth
} else if (innerWidth > maxSupportedWidth) {
  innerWidth = maxSupportedWidth
}

export const scaleFactor = deviceDetails.mobile ? 1 : innerWidth / 1366

export const getScaledValue = (value = 0) => `${value * scaleFactor}px`
export const getScaledValueInt = (value = 0) => value * scaleFactor

export const dim = {
  _0px: getScaledValue(0),
  _1px: getScaledValue(1),
  _2px: getScaledValue(2),
  _3px: getScaledValue(3),
  _4px: getScaledValue(4),
  _5px: getScaledValue(5),
  _6px: getScaledValue(6),
  _7px: getScaledValue(7),
  _8px: getScaledValue(8),
  _10px: getScaledValue(10),
  _12px: getScaledValue(12),
  _14px: getScaledValue(14),
  _16px: getScaledValue(16),
  _18px: getScaledValue(18),
  _20px: getScaledValue(20),
  _22px: getScaledValue(22),
  _24px: getScaledValue(24),
  _26px: getScaledValue(26),
  _28px: getScaledValue(28),
  _30px: getScaledValue(30),
  _32px: getScaledValue(32),
  _34px: getScaledValue(34),
  _36px: getScaledValue(36),
  _38px: getScaledValue(38),
  _40px: getScaledValue(40),
  _42px: getScaledValue(42),
  _44px: getScaledValue(44),
  _46px: getScaledValue(46),
  _48px: getScaledValue(48),
  _50px: getScaledValue(50),
  _52px: getScaledValue(52),
  _54px: getScaledValue(54),
  _56px: getScaledValue(56),
  _58px: getScaledValue(58),
  _60px: getScaledValue(60),
  _62px: getScaledValue(62),
  _64px: getScaledValue(64),
  _66px: getScaledValue(66),
  _68px: getScaledValue(68),
  _70px: getScaledValue(70),
  _72px: getScaledValue(72),
  _74px: getScaledValue(74),
  _76px: getScaledValue(76),
  _78px: getScaledValue(78),
  _80px: getScaledValue(80),
  _82px: getScaledValue(82),
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _scale: function _scale(value: any) {
    return getScaledValue(value)
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _scaleAbs: function _scaleAbs(value: any) {
    return getScaledValueInt(value)
  },
}

export const color = {
  base_0: "#000000",
  base_5: "#2B2B2B",
  base_10: "#202124",
  base_20: "#54555d",
  base_30: "#72737d",
  base_40: "#808080",
  base_70: "#c8c9d1",
  base_80: "#eaebf0",
  base_90: "#f8f8fa",
  base_100: "#ffffff",
  blue_10: "#1f2e64",
  blue_20: "#182272",
  blue_30: "#193ab2",
  blue_50: "#2f53d7",
  blue_60: "#2f80ed",
  blue_80: "#95a3fb",
  blue_90: "#e5f1ff",
  blue_100: "#f2f2ff",
  green_20: "#135d0d",
  green_50: "#1db510",
  green_60: "#39ca2c",
  green_80: "#84e57c",
  green_100: "#f2fff5",
  effects_scrim_black_50: "rgba(0, 0, 0, 0.5)",
  yellow_20: "#886412",
  yellow_50: "#f9b312",
  yellow_80: "#ffe58e",
  yellow_90: "#fdf7e6",
  yellow_100: "#fff8db",
  red_20: "#751818",
  red_50: "#eb5757",
  red_80: "#ff9696",
  red_100: "#fff2f2",
  effects_highlights_yellow: "#ffcc19",
  grey_1: "#333333",
  grey_25: "#edeef3",
  grey_30: "#72737D",
  grey_50: "#979797",
  grey_60: "#d0d0d0",
  grey_80: "#eaebf0",
  dark_grey: "#202124",
  stroke_0_5_px_light_grey: "rgba(0, 0, 0, 0.09)",
  highlights_blue: "#e5f1ff",
  text_low_emphasis: "#a2a5b1",
  button_hover_blue: "#5e89f7",
  button_active_blue: "#cce4ff",
  effects_card_highlights_yellow: "#ffcc19",
  white: "#ffffff",
  black: "#000000",
  tomato: "#df2e2e",
  button_disabled: "#c8c9d1",
  transparent: "#0000",
  text_normal: "#6d6c6f",
  content_primary: "#242424",
  content_secondary: "#545454",
  content_tertiary: "#6B6B6B",
  bg_light: "#faf9f9",
  blue_light: "#6176d3",
}
