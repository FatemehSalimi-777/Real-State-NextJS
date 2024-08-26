import DashboardCard from "@/module/DashboardCard";
import styles from "./MyProfilesPage.module.css";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده ست.</p>
      )}
      {profiles.map((profile) => (
        <DashboardCard
          key={profile._id}
          data={JSON.parse(JSON.stringify(profile))}
        />
      ))}
    </div>
  );
}

export default MyProfilesPage;
