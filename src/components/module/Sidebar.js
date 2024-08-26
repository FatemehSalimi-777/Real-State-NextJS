import Link from "next/link";
import styles from "./Sidebar.module.css";
import { HiFilter } from "react-icons/hi";

function Sidebar() {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {queries.map((query) => (
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(query) },
          }}
        >
          {Object.values(query)}{" "}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
