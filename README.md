# Emerce MMOB Integration.

Use this code to map between Emerce language to MMOB locale.

Example usage:

```html
<html>
  <head>
    <script src="https://assets.mmob.com/js/mmob-snippet.min.js"></script>
    <!-- Load this code after loading snippet library: -->
    <script src="https://unpkg.com/emerce-mmob-integration@latest/emerce-mmob-integration.js"></script>
  </head>
  <body>
    <div id="iframe-container"></div>
    <script>
      initMarketplace(
        '#iframe-container'
        'cp_9AidXA6tIpz7RR4thMrrJ'
        'cpd_7NNG7KCUjOjagv5Jxt5Ov',
        'https://client-ef-network.ef-hub.com',
        {},
        'en'
      )
    </script>
  </body>
</html>

```

