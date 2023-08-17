import api from "@/app/config/api";
import sha256 from "crypto-js/sha256";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

async function teacherLoginUpdate(data) {
  try {
    const response = await fetch("https://edtech.ilbc.edu.mm/api/google/login", {
      method: "POST", // or 'PUT'
      //mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.googleClientId,
      clientSecret: process.env.googleClientSecret
    })
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      //console.log("callbackhit", "user=>", user, "account=>", account, "profile", profile, "email=>", email, "credentials =>", credentials);
      if (account.provider === 'google') {
        if (user.email !== "demoteacher2@ilbcedu.com") {
          console.log("you are not allowed to proceed")
          return false;
        } else {
          const data = { "name": user.name, "email": user.email, "google_id": account.providerAccountId, "avatar": user.image, "access_token": account.access_token };
          teacherLoginUpdate(data);
          return true;
        }
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("jwt", account, profile, isNewUser)
      if (account?.access_token) {
        token.access_token = account.access_token;
        // token.refresh_token = account.refresh_token
      }
      //return token
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      //https://github.com/nextauthjs/next-auth/discussions/1290
      // the token object is what returned from the `jwt` callback, it has the `accessToken` that we assigned before
      // Assign the accessToken to the `session` object, so it will be available on our app through `useSession` hooks
      //console.log("session=>", session, token)
      if (token) {
        session.accessToken = token.access_token
        //session.refreshToken = token.refresh_token
      }
      return session
    }
  }
}

export default NextAuth(authOptions)