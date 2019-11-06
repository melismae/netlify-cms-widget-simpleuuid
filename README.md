# netlify-cms-widget-simpleuuid

[Check out a demo!](https://netlify-cms-widget-simpleuuid.netlify.com/demo)

Disabled uuid input field

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-simpleuuid
```

```js
import netlify-cms-widget-simpleuuid from 'netlify-cms-widget-simpleuuid'

CMS.registerWidget('netlify-cms-widget-simpleuuid', <name>Control, <name>Preview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-simple-uuid-widget@^1.0.0"></script>

<script>
  CMS.registerWidget('netlify-cms-widget-simpleuuid', <name>Control, <name>Preview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: netlify-cms-widget-simpleuuid }
```
