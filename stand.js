// stand.js
export const state = {
  stand: 3,
  pos: 0,
  index: 0
};

export function setStand(stand) {
  state.stand = stand;
  state.pos = 0;
  state.index = 0;
}

export function setPos(pos) {
  const count = state.stand;
  state.pos = ((pos % count) + count) % count;
  state.index = Math.floor(state.pos);
}
