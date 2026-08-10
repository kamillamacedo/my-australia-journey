import { tipsObjectList } from "../data/tipsData";

const tipsPanel = document.querySelector(".tips-content-panel");
const tipsTitle = document.querySelector(".tips-panel-title");
const tipsText = document.querySelector(".tips-panel-text");

let activeTipsButton = null;

export function toggleTipsPanel(tipsCard, tipsId) {
  if (activeTipsButton === null || activeTipsButton !== tipsId) {
    const tipObj = tipsObjectList.find((tip) => tip.id === tipsId);
    tipsTitle.textContent = tipObj.title;
    tipsText.textContent = tipObj.tip;
    tipsPanel.removeAttribute("hidden");
    activeTipsButton = tipsId;
  } else {
    closeTipsPanel();
    return;
  }
}

export function closeTipsPanel() {
  tipsPanel.setAttribute("hidden", "true");
  activeTipsButton = null;
  clearText();
}

function clearText() {
  tipsTitle.textContent = "";
  tipsText.textContent = "";
}

