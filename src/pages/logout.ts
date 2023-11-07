import type { APIRoute } from "astro";
import { Auth } from 'aws-amplify';

export const POST: APIRoute = async (context) => {
	try {
        await Auth.signOut({ global: true });
      } catch (error) {
        console.log('error signing out: ', error);
      }
	return context.redirect("/login", 302);
};