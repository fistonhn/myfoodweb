import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: "bookingclerk" |
      "seniorclerk" |
      "wageclerk" |
      "operationclerk" |
      "admin"
    } & DefaultSession["user"];
  }
}
