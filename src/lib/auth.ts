import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// `better-auth` heavily infers types from config; keeping this un-constrained avoids
// TS assigning it to the library's default `BetterAuthOptions` and failing builds.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _auth: any | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getAuth(): any {
  if (_auth) return _auth;

  // `better-auth` expects a defined baseURL (it calls `.startsWith(...)` internally).
  // During `next build`, envs can be missing or different from runtime.
  const baseURL =
    process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000";

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error(
      "Auth misconfigured: MONGODB_URI is not set (required for better-auth MongoDB adapter).",
    );
  }

  const client = new MongoClient(mongoUri);

  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

  _auth = betterAuth({
    database: mongodbAdapter(client.db("bookborrow")),
    baseURL,
    emailAndPassword: {
      enabled: true,
    },
    ...(googleClientId && googleClientSecret
      ? {
          socialProviders: {
            google: {
              clientId: googleClientId,
              clientSecret: googleClientSecret,
            },
          },
        }
      : {}),
    user: {
      additionalFields: {
        image: {
          type: "string",
          required: false,
        },
      },
    },
  });

  if (!_auth) {
    throw new Error("Auth misconfigured: failed to initialize auth.");
  }

  return _auth;
}

// Back-compat for existing imports.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const auth = new Proxy({} as any, {
  get(_target, prop) {
    const real = getAuth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (real as any)[prop as any];
  },
});