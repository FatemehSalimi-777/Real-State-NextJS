import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import ShareButton from "@/module/ShareButton";
import ItemList from "@/module/ItemList";
import { e2p, sp } from "@/utils/replaceNumber";

import styles from "./ProfileDetailsPage.module.css";

function ProfileDetailsPage({ data }) {
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };

  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        <h3>توضیحات</h3>
        <p>{data.description}</p>
        <h3>امکانات</h3>
        <ItemList data={data.amenities} />
        <h3>قوانین</h3>
        <ItemList data={data.rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {data.realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(data.phone)}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[data.category]}
            {categories[data.category]}
          </p>
          <p>{sp(data.price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
