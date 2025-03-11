import { Outlet } from "react-router";
// import {Header} from "./components/header";

export default function RootLayout() {
  return (
    <div className="font-open-sans">
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
