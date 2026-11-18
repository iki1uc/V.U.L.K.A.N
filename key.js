function DiamondDiagram() {
  const rows = [
    ["◉"],
    ["3", "9"],
    ["◎"],
    ["3", "9"],
    ["◎"],
    ["81", "◆"],
    ["△"],
    ["27", "▣"],
    ["3 ↺"],
    ["81", "◆"],
    ["△"],
    ["27", "▣"],
    ["3 ↺"],
  ];

  return (
    <pre
      style={{
        color: "#22ff88",
        fontFamily: "monospace",
        lineHeight: 1.5,
        whiteSpace: "pre",
        overflowX: "auto",
      }}
    >
      {rows.map((row, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          {row.length === 1 ? row[0] : `${row[0]}     ↗  ↘     ${row[1]}`}
        </div>
      ))}
    </pre>
  );
}
