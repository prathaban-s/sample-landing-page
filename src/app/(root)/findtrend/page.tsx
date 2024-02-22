import Companies from "@/components/findtrend/pages/Companies";
import Deals from "@/components/findtrend/pages/Deals";
import Intro from "@/components/findtrend/pages/Intro";
import Join from "@/components/findtrend/pages/Join";
import NewTab from "@/components/findtrend/pages/NewTab";

export default function Home() {
  return (
    <>
      <Intro />
      <NewTab />
      <Companies />
      <Deals />
      <Join />
    </>
  );
}
