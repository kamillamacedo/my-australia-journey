const footerTemplate = `<div class="page-footer">
        <div>
          <a href="index.html" title="Go back to the main page">
            <img
              class="footer-logo"
              src="./img/bottom-logo.png"
              alt="Australia Journey logo colored in blue and red"
            />
          </a>
          <p>Developed by Kamilla Macêdo</p>
        </div>
        <div class="footer-socialmedia">
          <p>Access my networks:</p>
          <div class="footer-icons">
            <a href="https://www.linkedin.com/in/kamillamacedo" target="_blank" rel="noopener noreferrer" title="Access Kamilla Macêdo's Linkedin Profile"
              ><img
                src="./img/linkedin-icon.png"
                alt="Social media icon for Linkedin"
            /></a>
            <a href="https://github.com/kamillamacedo" target="_blank" rel="noopener noreferrer" title="Access Kamilla Macêdo's GitHub Profile"
              ><img
                src="./img/github-icon.png"
                alt="Social media icon for GitHub"
            /></a>
            <!--
            <a
              href="https://www.instagram.com/kamillamacedo"
              target="_blank"
              rel="noopener noreferrer"
              title="Access Kamilla Macêdo's Instagram Profile"
              ><img
                src="./img/Instragam-icon.png"
                alt="Social media icon for Instagram"
            /></a>
            -->
          </div>
        </div>
      </div>`


export function initFooter() {
  const footerElement = document.querySelector("#main-footer");
  footerElement.innerHTML = footerTemplate;
}