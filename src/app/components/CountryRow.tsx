import React, { useState } from "react";
import { Country } from "../lib/types";
import Image from "next/image";
import styles from "@/app/styles/countryRow.module.css";
import bin from "@/app/public/bin.png";

type CountryRowProps = {
  country: Country;
  onDelete: (isoCode3: string) => void;
};

const CountryRow: React.FC<CountryRowProps> = ({ country, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { nameRu, isoCode2, flagUrl, isoCode3 } = country;

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(isoCode3);
    }, 500);
  };

  return (
    <tr className={`${styles.tableRow} ${isDeleting ? styles.deleting : ""}`}>
      <td className={styles.nameColumn}>{nameRu}</td>
      <td>{isoCode2}</td>
      <td>
        <div>
          {flagUrl ? (
            <Image
              src={flagUrl}
              alt={nameRu || "Country"}
              width={22}
              height={16}
            />
          ) : (
            <span>Флаг не найден</span>
          )}
        </div>
      </td>
      <td className={styles.actionColumn}>
        <Image
          src={bin}
          onClick={handleDelete}
          alt={"удалить"}
          width={35}
          height={35}
          className={styles.deleteButton}
        />
      </td>
    </tr>
  );
};

export default CountryRow;
