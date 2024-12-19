export const updateTheme = (isDarkMode) => {
  isDarkMode
    ? document.documentElement.setAttribute("data-theme", "forest")
    : document.documentElement.setAttribute("data-theme", "autumn");
};
