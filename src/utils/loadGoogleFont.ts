async function loadGoogleFont(
  font: string,
  text: string,
  weight: number
): Promise<ArrayBuffer> {
  const API = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;

  const css = await (
    await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );

  if (!resource) throw new Error("Failed to download dynamic font");

  const res = await fetch(resource[1]);

  if (!res.ok) {
    throw new Error("Failed to download dynamic font. Status: " + res.status);
  }

  return res.arrayBuffer();
}

async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  const fontsConfig = [
    {
      name: "Libre Baskerville",
      font: "Libre+Baskerville",
      weight: 400,
      style: "normal",
    },
    {
      name: "Libre Baskerville",
      font: "Libre+Baskerville",
      weight: 700,
      style: "normal",
    },
    {
      name: "Libre Baskerville",
      font: "Libre+Baskerville",
      weight: 400,
      style: "italic",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 200,
      style: "normal",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 300,
      style: "normal",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 400,
      style: "normal",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 500,
      style: "normal",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 600,
      style: "normal",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 700,
      style: "normal",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 800,
      style: "normal",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 900,
      style: "normal",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 200,
      style: "italic",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 300,
      style: "italic",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 400,
      style: "italic",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 500,
      style: "italic",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 600,
      style: "italic",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 700,
      style: "italic",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 800,
      style: "italic",
    },
    {
      name: "Source Sans 3",
      font: "Source+Sans+3",
      weight: 900,
      style: "italic",
    },
    {
      name: "Ubuntu Mono",
      font: "Ubuntu+Mono",
      weight: 400,
      style: "normal",
    },
    {
      name: "Ubuntu Mono",
      font: "Ubuntu+Mono",
      weight: 700,
      style: "normal",
    },
    {
      name: "Ubuntu Mono",
      font: "Ubuntu+Mono",
      weight: 400,
      style: "italic",
    },
    {
      name: "Ubuntu Mono",
      font: "Ubuntu+Mono",
      weight: 700,
      style: "italic",
    },
  ];

  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style }) => {
      const data = await loadGoogleFont(font, text, weight);
      return { name, data, weight, style };
    })
  );

  return fonts;
}

export default loadGoogleFonts;
