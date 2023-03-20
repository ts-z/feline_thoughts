const root = $("#root");
const light_container = $("#light");
const dark_container = $("#dark");
const toggle = $("#theme_toggle");
const light_toggle = $(".bi-sun-fill");
const dark_toggle = $(".bi-moon-stars-fill");
const cat_outline_dark = $("#cat_outline_dark");
const cat_outline_light = $("#cat_outline_light");
const setThemeDark = () => {
  root.attr("class", "dark_theme");
  cat_outline_light.fadeOut();
  cat_outline_light.attr("class", "img_out");
  cat_outline_dark.attr("class", "img_in");
  cat_outline_dark.fadeIn();
  dark_container.attr("class", "d-none");
  dark_toggle.attr("class", "bi bi-moon-stars-fill d-none");
  light_container.attr("class", "d-flex light");
  light_toggle.attr("class", "bi bi-sun-fill d-flex");
};
const setThemeLight = () => {
  root.attr("class", "light_theme");
  cat_outline_dark.attr("class", "img_out");
  cat_outline_dark.fadeOut();
  cat_outline_light.attr("class", "img_in");
  cat_outline_light.fadeIn();
  light_container.attr("class", "d-none");
  light_toggle.attr("class", "bi bi-sun-fill d-none");
  dark_container.attr("class", "d-flex dark");
  dark_toggle.attr("class", "bi bi-moon-stars-fill d-flex");
};
let theme = "light";
setThemeLight();
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  theme = "dark";
  setThemeDark();
}
const toggleSwitch = (e) => {
  e.preventDefault();
  switch (theme) {
    case "light":
      theme = "dark";
      setThemeLight();
      break;
    case "dark":
      theme = "light";
      setThemeDark();
      break;
  }
};
toggle.on("click", toggleSwitch);