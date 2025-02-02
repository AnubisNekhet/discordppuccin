const fs = require("fs").promises;
const path = require("path");

const sourceFiles = [
  "src/catppuccin-frappe.theme.scss",
  "src/catppuccin-latte.theme.scss",
  "src/catppuccin-macchiato.theme.scss",
  "src/catppuccin-mocha.theme.scss",
  "src/catppuccin-cappuccino.theme.scss",
  "src/catppuccin-chadpuccin.theme.scss",
  "src/catppuccin-rosepine-lt.theme.scss",
  "src/catppuccin-rosepine-dt.theme.scss",
  "src/catppuccin-rosebox.theme.scss",
  "src/catppuccin-coffee.theme.scss",
  "src/catppuccin-kanagawa.theme.scss",
  "src/catppuccin-nord-2-dt.theme.scss",
  "src/catppuccin-nord-dt.theme.scss",
  "src/catppuccin-solarized-dt.theme.scss",
  "src/catppuccin-atom-lt.theme.scss",
  "src/catppuccin-atom-dt.theme.scss",
  "src/catppuccin-dracula.theme.scss",
  "src/catppuccin-everforest-lt.theme.scss",
  "src/catppuccin-everforest-dt.theme.scss",
  "src/catppuccin-sandy-beaches.theme.scss",
  "src/catppuccin-gruvbox-lt.theme.scss",
  "src/catppuccin-gruvbox-dt.theme.scss",
  "src/catppuccin-material-mint.theme.scss",
  "src/catppuccin-material-red-velvet.theme.scss",
];

const accents = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender",
];

(async () => {
  await Promise.all(sourceFiles.map(generateAccents));
  console.log("Generated all accents for all flavours");
})();

// read sourceFile and generate all accents for it
async function generateAccents(sourceFilePath) {
  const _sourceFilePath = path.join(__dirname, sourceFilePath);
  const sourceFileData = await fs.readFile(_sourceFilePath, {
    encoding: "utf8",
  });
  return Promise.all(
    accents.map((accent) =>
      generateAccent(sourceFileData, sourceFilePath, accent)
    )
  );
}

// replace brand and write to separate file
async function generateAccent(sourceFileData, sourceFilePath, accent) {
  const modifiedFileContent = sourceFileData.replace(
    /\$brand: .*;/gm,
    `$brand: \$${accent};`
  );
  const outputFileName = sourceFilePath
    .split(".")
    .map((s, i) => (i === 0 ? s.concat(`-${accent}`) : s))
    .join(".");
  const outputFilePath = path.join(__dirname, outputFileName);
  await fs.writeFile(outputFilePath, modifiedFileContent);
  console.log(`Generated: ${outputFileName}`);
}
