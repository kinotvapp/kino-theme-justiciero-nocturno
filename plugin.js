// A theme's presentation, drawn with the screen kit in whichever theme is active.
const THEME = {"id": "justiciero-nocturno", "es": "Justiciero Nocturno", "en": "Night Vigilante", "hook": "Cuando cae la noche, la ciudad te llama.", "hookEn": "When night falls, the city calls you.", "desc": "Azul de capa y amarillo de señal en el cielo de una ciudad que nunca duerme."};
const t = (es, en) => ({ text: es, textEn: en });

export async function screen({ activeTheme }) {
  const on = activeTheme === THEME.id;
  return {
    type: "Column", padding: { compact: 16, expanded: 32 }, gap: 16,
    children: [
      { type: "Text", ...t(THEME.es, THEME.en), style: "h1" },
      { type: "Text", ...t(THEME.hook, THEME.hookEn), style: "h3", color: "primary" },
      { type: "Text", text: THEME.desc },
      { type: "Card", children: [{ type: "Column", gap: 12, children: [
        { type: "Text", ...t("Qué cambia", "What changes"), style: "h3" },
        { type: "Text", ...t("Tarjetas, botones y barras toman su color y sus formas.", "Cards, buttons and bars take its colour and shapes."), color: "muted" },
      ] }] },
      {
        type: "ElevatedButton",
        labelText: on ? "Desactivar" : "Activar",
        labelTextEn: on ? "Turn off" : "Turn on",
        onPressed: { go: { useTheme: { theme: on ? null : THEME.id } } },
      },
    ],
  };
}

export async function screenEvent() {
  return null;
}
