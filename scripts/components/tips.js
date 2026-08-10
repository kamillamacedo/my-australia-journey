import { tipsObjectList } from "../data/tipsData.js";

const tipsPanel = document.querySelector(".tips-content-panel");
const tipsTitle = document.querySelector(".tips-panel-title");
const tipsText = document.querySelector(".tips-panel-text");

let activeTipsButton = null;
let activeTipsElement = null;

export function toggleTipsPanel(tipsCard, tipsId) {
  if (activeTipsButton === null || activeTipsButton !== tipsId) {
    if (activeTipsButton !== null) {
      activeTipsElement.classList.remove("active");
    }
    const tipObj = tipsObjectList.find((tip) => tip.id === tipsId);
    tipsTitle.textContent = tipObj.title;
    tipsText.textContent = tipObj.tip;
    tipsPanel.removeAttribute("hidden");
    activeTipsElement = tipsCard;
    activeTipsElement.classList.add("active");
    activeTipsButton = tipsId;
  } else {
    closeTipsPanel();
    return;
  }
}

export function closeTipsPanel() {
  if (!activeTipsElement) return;
  tipsPanel.setAttribute("hidden", "true");
  activeTipsElement.classList.remove("active");
  activeTipsElement = null;
  activeTipsButton = null;
  clearText();
}

function clearText() {
  tipsTitle.textContent = "";
  tipsText.textContent = "";
}
