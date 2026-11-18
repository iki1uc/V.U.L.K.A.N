document.querySelectorAll("[data-zl]").forEach(b => b.onclick = () => {
  syncZoom(+b.dataset.zl, 0);
  zBuild();
  event("ZOOM", `Stand ${ZM.level} · Index ${Math.floor(ZM.pos)} · Position ${ZM.pos}`);
  log(`ZOOM Stand ${ZM.level}, Index ${Math.floor(ZM.pos)}, Position ${ZM.pos}`);
  renderAll();
});

$("zoom-run").onclick = () => {
  ZM.run = !ZM.run;
  event("ZOOM", ZM.run ? "Läufer an" : "Läufer aus");
  renderAll();
};
