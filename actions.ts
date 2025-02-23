import { account as acc } from "@/config/appwrite";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formdata: FormData) {
  "use server";
  // const { email, password } = formdata;
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;
  const session = await acc.createEmailPasswordSession(email, password);
  try {
    (await cookies()).set("appwrite-session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      expires: new Date(session.expire),
      path: "/",
    });
  } catch (err) {
    console.log("Authentication failed: ", err);
  }
  redirect("/dashboard");
}

export async function checkSession() {
  "use server";
  const sessionCookie = (await cookies()).get("appwrite-session");
  if (!sessionCookie) {
    return {
      isAuthenticated: false,
    };
  }

  try {
    const { account } = await acc.createSession(sessionCookie.value);
    return session;
  } catch (err) {
    console.log("Session check failed: ", err);
    return null;
  }
}
