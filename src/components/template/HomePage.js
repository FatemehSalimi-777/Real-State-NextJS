import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import styles from "./HomePage.module.css";

function HomePage() {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفهان",
    "شیراز",
    "خرم آباد",
  ];
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <FiCircle />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((category) => (
          <CategoryCard title={categories[category]} name={category} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((city) => (
            <li key={city}>
              <span>
                <FaCity />
                {city}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
