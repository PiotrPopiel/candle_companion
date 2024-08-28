import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connectDB from "./db/config";
import User from "./db/models/User";

if (!process.env.AUTH_GOOGLE_ID || !process.env.AUTH_GOOGLE_SECRET) {
  throw new Error("Missing Google oAuth credencials");
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ profile }) {
      await connectDB();
      if (!profile) throw new Error("There is no profile to save to database");
      const userExists = await User.findOne({ email: profile.email });
      if (!userExists) {
        const username = profile.name?.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      return true;
    },
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });
      session.user.id = user._id.toString();
      return session;
    },
  },
});
