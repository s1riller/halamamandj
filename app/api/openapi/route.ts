export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  const spec = {
    openapi: "3.0.0",
    info: { title: "OlkhonExpress API", version: "1.0.0" },
    paths: {
      "/api/auth/login": {
        post: {
          summary: "Login",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: { type: "string", format: "email" },
                    password: { type: "string" }
                  },
                  required: ["email", "password"]
                }
              }
            }
          },
          responses: {
            "200": { description: "OK" },
            "400": { description: "Bad Request" },
            "401": { description: "Unauthorized" }
          }
        }
      }
    }
  }

  return new Response(JSON.stringify(spec), {
    headers: { "Content-Type": "application/json" }
  })
}