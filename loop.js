// loop.js
import { state, setPos } from "./stand.js";

export function tick(dt, speed = 1) {
  setPos(state.pos + dt * speed);
}
