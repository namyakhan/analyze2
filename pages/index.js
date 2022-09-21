import Header from "../components/Header";
import Layout from "../components/Layout";
import SideNavbar from "../components/SideNavbar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex w-screen container mx-auto ">
      <SideNavbar />
      <div className="w-screen ">
      <Layout />
      </div>
      </div>


    </div>
  );
}
