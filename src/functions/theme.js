export const getThemePaletteBackgroundColor = (theme, color) => {
    return theme?.colors?.palette?.[color]?.background || null;
};

export const getThemePaletteTextColor = (theme, color) => {
    return theme?.colors?.palette?.[color]?.text || null;
};

export const getThemePaletteBorderColor = (theme, color) => {
    return theme?.colors?.palette?.[color]?.border || null;
};

export const getThemeNavigationBarBackgroundColor = (theme) => {
    return theme?.colors?.navigationBar?.background || null;
};

export const getThemeNavigationBarTextColor = (theme) => {
    return theme?.colors?.navigationBar?.text || null;
};

export const getThemeLogo = (theme) => {
    return theme?.logo || null;
};

export const getThemeLogoPadding = (theme) => {
    return theme?.logoPadding || null;
};

export const getThemeAppName = (theme) => {
    return theme?.appName || null;
};

export const getThemeTextColor = (theme) => {
    return theme?.colors?.text || null;
};

export const getThemeLinkColor = (theme) => {
    return theme?.colors?.link || null;
};
