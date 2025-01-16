import { redirect } from "next/navigation";

const CountryPage = "/countries";

export default async function Home() {
  redirect(CountryPage);
}
