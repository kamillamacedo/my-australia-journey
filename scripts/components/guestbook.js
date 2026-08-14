import { comments } from "../data/guestbookData.js";

let guestbookEntries =
  JSON.parse(localStorage.getItem("guestbook_entries")) || comments;

function handleFormSubmit(params) {
  event.preventDefault();
  const userName = document.querySelector("#user-name").value.trim();
  const userMessage = document.querySelector("#user-message").value.trim();
  const userRating = document.querySelector('input[name="rating"]:checked');
  const ratingValue = userRating ? userRating.value : "5";

  const newEntry = {
    name: userName,
    rating: Number(ratingValue),
    message: userMessage,
  };

  guestbookEntries.push(newEntry);
  localStorage.setItem("guestbook_entries", JSON.stringify(guestbookEntries));

  initGuestbook();
  event.target.reset();
}

export function initGuestbook() {
  const listContainer = document.querySelector(".guest-entries");
  if (!listContainer) return;
  const form = document.querySelector(".guestbook-form");
  const entriesHTML = [...guestbookEntries]
    .reverse()
    .map((entry) => {
      return `<article class="entry">
            <header>
              <h3 class="entry-profile">${entry.name}</h3>
              <div class="entry-rating">${"★".repeat(entry.rating)}</div>
            </header>
            <footer>
              <div class="entry-comment">
                <p>
                  ${entry.message}
                </p>
              </div>
            </footer>
          </article>`;
    })
    .join("");
  listContainer.innerHTML = entriesHTML;
  form.addEventListener("submit", handleFormSubmit);
}
