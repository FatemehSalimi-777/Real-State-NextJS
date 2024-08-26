import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";
import DashboardSidebar from "@/layout/DashboardSidebar";

export const metadata = {
  title: "پنل کاربری | پروژه املاک",
};

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  if (!user)
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

  return (
    <DashboardSidebar role={user.role} email={user.email}>
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;
