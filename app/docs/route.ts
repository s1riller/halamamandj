export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>API Docs</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css"/>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
  <script>
    window.onload = () => {
      SwaggerUIBundle({
        url: '/api/openapi',
        dom_id: '#swagger-ui',
        presets: [SwaggerUIBundle.presets.apis],
      })
    }
  </script>
</body>
</html>`
  return new Response(html, { headers: { "Content-Type": "text/html" } })
}