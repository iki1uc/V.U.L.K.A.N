function zLoop(t) {
  if (!ZM.on) return;

  const dt = Math.min(.05, (t - ZM.last) / 1000 || 0);
  ZM.last = t;

  if (ZM.run) {
    const speed = ZM.level === 3 ? .8 : ZM.level === 9 ? 2.2 : 12;
    syncZoom(ZM.level, ZM.pos + dt * speed);
  }

  zDraw();
  requestAnimationFrame(zLoop);
}
