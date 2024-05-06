# Handoff Drupal Demo

This is a simple demo integrating Figma Tokens automatically extracted via the
[Handoff](https://www.handoff.com) automation toolchain. This demo extracts
tokens from a Figma file and loads them into a Bootstrap 5 Drupal theme.

This demo is limited to some foundational elements and a button component, but
should service as an example of how you could do more.

## Requirements

- A drupal local dev tool.  We use Lando, but DDEV
- Node 18+

## Get Started

All of the tokens for this project are pulled from this Figma file.

https://www.figma.com/file/HC3BkyW71SsxV7Md433WbO/Unicorn-Starter?node-id=0-1&mode=dev

### Boot Drupal

This project has been tested with Lando, but it should work with any local dev
tooling.  Here's instructions for how to spin it up with Lando.

```bash
# Start it up
lando start

# Install a site local drush
lando composer require drush/drush

# Install drupal
lando drush site:install --db-url=mysql://drupal10:drupal10@database/drupal10 -y

# Enable the bootstrap5 theme
lando drush theme:enable bootstrap5

# Set it as the default theme
lando drush config-set system.theme default bootstrap5

# List information about this app
lando info
```

Lando should boot the handoff demo at https://handoff-demo.lndo.site:444/

### Fetch tokens

Generate a Figma Dev Token -

https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens

1. Copy the `.env.example` to `.env` and paste your dev token into
`DEV_ACCESS_TOKEN`

2. Then run `npm install` to install the dependencies

3. Then run `npm run fetch`. This will fetch the tokens and install them into
the Drupal theme.

4. Clear your drupal cache and the tokens should take effect.

To see them working, create a page with two buttons -

```html
<a href="btn btn-primary">Primary Button</a>

<a href="btn btn-secondary">Secondary Button</a>
```
