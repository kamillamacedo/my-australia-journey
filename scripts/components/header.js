const headerTemplate = `<div class="page-header">
        <a href="index.html" title="Go back to the main page">
          <img
            class="compass-logo"
            src="./img/aj-compass-color.png"
            alt="Australia Journey logo's compass colored in blue and red"
          />
          <img
            class="main-logo"
            src="./img/aj-logo-color.png"
            alt="Australia Journey logo colored in blue and red"
          />
        </a>
        <div class="navigation-menu">
          <button type="button" class="menu-toggle-button" aria-label="Open menu">
            <img class="hamburger-menu" src="./img/menu.png" alt="Menu" />
          </button>
          <nav>
            <ul class="list-links">
              <li>
                <a href="tips.html" title="Access the tips page"
                  >Tips</a>
              </li>
              <li>
                <a
                  href="gallery.html"
                  title="Access the gallery page"
                  >Gallery</a>
              </li>
              <li>
                <a
                  href="thanks.html"
                  title="Access the destinations page"
                  >Special Thanks</a>
              </li>
              <li>
                <a
                  href="about.html"
                  title="Access the about page"
                  >About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>`;

export function initHeader() {
  const headerElement = document.querySelector("#main-header");
  headerElement.innerHTML = headerTemplate;
  const currentPath = window.location.pathname;
  const activeLink = headerElement.querySelector(`a[href="${currentPath}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}
