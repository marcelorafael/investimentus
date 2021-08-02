import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#7F5DF0",     // Light purple
    secondary: "#5D2DFD",   // Dark purple

    white: "#fff",
    black: "#030009",
    green: "#37E39F",
    greenNepherit: '#27ae60',
    greenFocused: '#218c74',
    red: "#af0505",
    gray: "#6A6A6A",
    lightGray: "#dbdbdb",
    lightGray1: "#f5f6fa",
    blueHole: "#3498db",
    asphalt: '#2c3e50',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: '36px' },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: '30px' },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: '22px' },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: '22px' },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: '36px' },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: '30px' },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: '22px' },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: '22px' },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
    bullpen: { fontFamily: "Bullpen3D", fontSize: SIZES.h2, lineHeight: '30px' },
    chigoda: { fontFamily: "Chigoda", fontSize: SIZES.h2, lineHeight: '30px' },
    magnolia: { fontFamily: "Magnolia", fontSize: SIZES.h2, lineHeight: '30px' },
    magnoliaLight: { fontFamily: "MagnoliaLight", fontSize: SIZES.h2, lineHeight: '30px' },
    oswald: { fontFamily: "Oswald", fontSize: SIZES.body5 },
    oswaldBold: { fontFamily: "Oswald-Bold", fontSize: SIZES.h2, lineHeight: '30px' },
    robotoThin: { fontFamily: "Roboto-Thin", fontSize: SIZES.radius },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
