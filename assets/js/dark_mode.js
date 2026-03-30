const anim_img = document.querySelector("#zen img");
const sovazen_img = document.querySelector('.soy');
const storageThemeEntry = 'system-mode';

var theme;

/**
 * @param {string} mode
 */
function switch_theme(mode = null) {
  document.documentElement.classList.toggle('dark-mode');
  let icon = document.getElementById("theme-icon");
  // just switch to opposite value
  if (mode === null)
    mode = localStorage.getItem(storageThemeEntry) == 'light' ? 'dark' : 'light';

  if (mode == 'light') {
    theme = mode;
    localStorage.setItem(storageThemeEntry, theme);
    icon.className = "bi bi-moon";

    anim_img.setAttribute('src', '/assets/images/Branding Zenith/Sigla_mov.png');
    sovazen_img.setAttribute('src', '/assets/images/Branding Zenith/Sigla_mov.png');
  } else if (mode == 'dark') {
    theme = mode;
    localStorage.setItem(storageThemeEntry, theme);
    icon.className = "bi bi-sun";

    anim_img.setAttribute('src', '/assets/images/Branding Zenith/Sigla_alb.png');
    sovazen_img.setAttribute('src', '/assets/images/Branding Zenith/Sigla_alb.png');
  }
}

window.addEventListener("load", () => {
  // create new storage
  if (localStorage.getItem(storageThemeEntry) === null) {
    localStorage.setItem(storageThemeEntry, 'light');
    
    theme = 'light';
    switch_theme('light');

    console.log("Created new localstorage for system theme.");
  }

  // load from existing data
  else {
    theme = localStorage.getItem(storageThemeEntry);
    switch_theme(theme);
  }
});

