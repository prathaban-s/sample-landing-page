import Companies from "@/components/pages/Companies";
import Deals from "@/components/pages/Deals";
import Intro from "@/components/pages/Intro";
import NewTab from "@/components/pages/NewTab";

export default function Home() {
  return (
    <>
      <Intro />
      <NewTab />
      <Companies />
      <Deals />
    </>
  );
}
