const ZOOM_LEVELS = [3, 9, 81];

function syncZoom(level = ZM.level, pos = ZM.pos) {
  const levelIndex = ZOOM_LEVELS.indexOf(Number(level));
  if (levelIndex < 0) return;

  ZM.level = ZOOM_LEVELS[levelIndex];
  const count = ZM.level;
  ZM.pos = ((Number(pos) % count) + count) % count;

  document.querySelectorAll("[data-zl]").forEach(button => {
    button.classList.toggle("on", Number(button.dataset.zl) === ZM.level);
  });
}
