import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CourseName from "./course/[name]/page";
// import Home from "./page";
export default function Home() {
  return (
    <>
      <Header />
      <Main />
      {/* <Home /> */}
      <CourseName />
    </>
  );
}
