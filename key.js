const identities = {
  3:  { wesensform: "Achse", rolle: "Basis", darf: ["lesen"] },
  9:  { wesensform: "Achse", rolle: "Partner", darf: ["lesen", "teilen"] },
  27: { wesensform: "Cube", rolle: "Erweitert", darf: ["lesen", "teilen", "bearbeiten"] },
  81: { wesensform: "Diamant", rolle: "Admin", darf: ["lesen", "teilen", "bearbeiten", "verwalten"] },
};

function DiamondDiagram() {
  const [selected, setSelected] = React.useState(null);

  const number = (n) => (
    <button key={n} onClick={() => setSelected(identities[n])}>
      {n}
    </button>
  );

  return (
    <div>
      <pre>{/* Diagramm-Anordnung hier rendern */}</pre>

      {selected && (
        <section>
          <h3>{selected.wesensform} — {selected.rolle}</h3>
          <p>Darf: {selected.darf.join(", ")}</p>
        </section>
      )}
    </div>
  );
}
