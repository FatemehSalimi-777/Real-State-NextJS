import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/template/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";

async function ProfileDetails({ params: { profileId } }) {
  await connectDB();

  const profile = await Profile.findOne({ _id: profileId });
  // console.log(profile);

  if (!profile)
    return (
      <h3
        style={{
          backgroundColor: " rgba(219, 5, 5, 0.159)",
          color: " rgb(219, 5, 5)",
          fontSize: " 1.3rem",
          padding: "10px 15px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        « مشکلی پیش آمده است»
      </h3>
    );

  return <ProfileDetailsPage data={profile} />;
}

export default ProfileDetails;

export const generateMetadata = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  return {
    title: profile.title,
    description: profile.description,
  };
};
