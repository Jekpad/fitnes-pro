import { GetServerSideProps } from "next";
import { cookies } from "next/headers";

export type WelcomeMessageProps = {
  message: string;
};
function WelcomeMessage({ message }: WelcomeMessageProps) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return <h2>{theme}</h2>;
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // If we've seen this person before, display a "Welcome back!" message
//   const viewedWelcomeMessage = context.req.cookies.viewedWelcomeMessage;
//   if (viewedWelcomeMessage === "true") {
//     return { props: { message: "Welcome back!" } };
//   }

//   // Otherwise, display a "Welcome!" message, but set a cookie so we don't show it again
//   context.res.setHeader("Set-Cookie", "viewedWelcomeMessage=true"); // TODO: better cookie string
//   return { props: { message: "Welcome!" } };
// };

export default WelcomeMessage;
