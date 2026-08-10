import { comments } from "../data/timelineData.js";

const bubble = document.querySelector(".timeline-bubble");
const bubbleText = document.querySelector(".timeline-text");
const bubbleTitle = document.querySelector(".timeline-bubble-title");
const bubbleDate = document.querySelector(".timeline-bubble-date");
const bubbleImg = document.querySelector(".timeline-bubble-img");

let activeDotId = null;

export function toggleBubble(timelineId, timelineDot) {
  if (activeDotId === null || activeDotId !== timelineId) {
    const obj = comments.find((comm) => comm.id === timelineId);
    bubbleTitle.textContent = obj.title;
    bubbleDate.textContent = obj.date;
    bubbleImg.src = obj.img;
    bubbleText.textContent = obj.comment;
    timelineDot.parentElement.appendChild(bubble);
    bubble.removeAttribute("hidden");
    activeDotId = timelineId;
  } else {
    closeBubble();
    return;
  }
}

function clearText() {
  bubbleTitle.textContent = "";
  bubbleDate.textContent = "";
  bubbleImg.src = "";
  bubbleText.textContent = "";
}

export function closeBubble() {
  bubble.setAttribute("hidden", "true");
  activeDotId = null;
  clearText();
}
