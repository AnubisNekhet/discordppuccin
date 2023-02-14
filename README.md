<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://discord.com/">Discord</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

Catppuccin Discord but with like a lot of other themes

| Theme | Code (`lt` is Light Mode, `dt` is Dark Mode) |
| ----- | ----- |
| Atom | `atom-lt`, `atom-dt` |
| Catppuccin | `latte`, `frappe`, `macchiato`, `mocha`, `cappuccino` |
| Coffee (Dark) | `coffee` |
| Everforest | `everforest-lt`, `everforest-dt` |
| Gruvbox (dark) | `gruvbox-lt`, `gruvbox-dt` |
| Kangawa (Dark) | `kangawa` |
| Nord | `nord-dt`, `nord-2-dt` |
| Gruvbox | `gruvbox-lt`, `gruvbox-dt` |
| Rosebox (Dark) | `rosebox` |
| Rosé Pine | `rosepine-lt`, `rosepine-dt` |
| Sandy Beaches (Light) | `sandy-beaches` |
| Solarized | `solarized-dt` |

## Usage

### [BetterDiscord](https://betterdiscord.app)

1. Download your preferred flavour:

- 🌻 [Latte](./themes/latte.theme.css)
- 🪴 [Frappe](./themes/frappe.theme.css)
- 🌺 [Macchiato](./themes/macchiato.theme.css)
- 🌿 [Mocha](./themes/mocha.theme.css)

2. Copy the downloaded file to your BetterDiscord themes folder.
3. Enable the theme in BetterDiscord settings.

### Clients/Mods with custom CSS support

1. Simply add your preferred flavour into `Discord > Settings > Custom CSS`

```css
/* latte */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-latte.theme.css");
/* frappe */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-frappe.theme.css");
/* macchiato */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-macchiato.theme.css");
/* mocha */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha.theme.css");

/* You can also append Catppuccin colors to customize the accent, e.g. */
/* mocha (pink accent)*/
@import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha-pink.theme.css");
/* frappe (maroon accent) */
@import url("https://catppuccin.github.io/discord/dist/catppuccin-frappe-maroon.theme.css");
```

### [DiscoCSS](https://github.com/mlvzk/discocss)

1. Follow the instructions from [DiscoCSS](https://github.com/mlvzk/discocss#installation) to install DiscoCSS.
2. Use your preferred flavour as your DiscoCSS `custom.css`

```bash
# latte
curl -L https://catppuccin.github.io/discord/dist/catppuccin-latte.theme.css > ~/.config/discocss/custom.css
# frappe
curl -L https://catppuccin.github.io/discord/dist/catppuccin-frappe.theme.css > ~/.config/discocss/custom.css
# macchiato
curl -L https://catppuccin.github.io/discord/dist/catppuccin-macchiato.theme.css > ~/.config/discocss/custom.css
# mocha
curl -L https://catppuccin.github.io/discord/dist/catppuccin-mocha.theme.css > ~/.config/discocss/custom.css

# You can also append Catppuccin colors to customize the accent, e.g.
# mocha (pink accent)
curl -L https://catppuccin.github.io/discord/dist/catppuccin-mocha-pink.theme.css > ~/.config/discocss/custom.css
# frappe (maroon accent)
curl -L https://catppuccin.github.io/discord/dist/catppuccin-frappe-maroon.theme.css > ~/.config/discocss/custom.css
```

### [Stylus](https://github.com/openstyles/stylus)

1. Enable CSP Patching from Stylus Settings > Advanced.
2. [Click here to install](https://github.com/catppuccin/discord/raw/main/discord.user.css)
3. Choose your preferred flavour and accent color from the Stylus preference dropdown.

## 🙋 FAQ

- Q: **_"Can this get my account banned?"_**
- A: Using third party clients and injecting custom css is against the ToS. We are not responsible for anything that might happen to your account by using third party clients. Use at your own discretion!
- Q: **_"Latte/Light theme doesn't look right!?"_**
- A: Using the Latte theme requires Discord's light mode to be on. You can set it up to sync between e.g. Mocha in dark mode, and Latte in light mode with this snippet:

  ```css
  @import url("https://catppuccin.github.io/discord/dist/catppuccin-mocha.theme.css") (prefers-color-scheme: dark);
  @import url("https://catppuccin.github.io/discord/dist/catppuccin-latte.theme.css") (prefers-color-scheme: light);
  ```

## 💝 Thanks to

- [GlowingUmbreon](https://github.com/glowingumbreon)
- [Isabelinc](https://github.com/Isabelincorp)
- [Ren](https://github.com/watatomo)
- [winston](https://github.com/nekowinston)
- [rubyowo](https://github.com/rubyowo)

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&colorA=363a4f&colorB=b7bdf8"/></a></p>
