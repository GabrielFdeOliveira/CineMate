import React from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Login() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="bg-slate-800">
      <div className="flex flex-col container mx-auto my-0 p-3">
        <Head>
          <title>CineMate</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header disableButton={true} />
      </div>
      <div className="flex flex-col min-h-screen container mx-auto my-0 p-3">
        <main className="flex-1 text-amber-50">
          {!session ? (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
              magicLink
              redirectTo="/"
            />
          ) : (
            <p>User logged in {session.user.email}</p>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
