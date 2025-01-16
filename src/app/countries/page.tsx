import { getCountries } from "@/app/lib/api";
import CountriesTable from "@/app/components/CountriesTable";
import "@/app/styles/globals.css";
import styles from "@/app/styles/countyPage.module.css";

const countyPage: React.FC = async () => {
  const countries = await getCountries();
  return (
    <>
      <h1 className={styles.pageHeader}>Таблица стран</h1>
      <CountriesTable countriesData={countries} />;
    </>
  );
};

export default countyPage;
