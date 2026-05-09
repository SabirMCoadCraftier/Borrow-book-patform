import { getAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

function misconfiguredResponse(err: unknown) {
  const message =
    err instanceof Error
      ? err.message
      : "Auth misconfigured: failed to initialize auth.";
  return new Response(message, { status: 500 });
}

export async function GET(req: Request) {
  try {
    const handlers = toNextJsHandler(getAuth());
    return handlers.GET(req);
  } catch (err) {
    return misconfiguredResponse(err);
  }
}

export async function POST(req: Request) {
  try {
    const handlers = toNextJsHandler(getAuth());
    return handlers.POST(req);
  } catch (err) {
    return misconfiguredResponse(err);
  }
}
