"use client";

import { useRouter } from "next/navigation";
import { sp } from "@/utils/replaceNumber";
import toast, { Toaster } from "react-hot-toast";
import styles from "./AdminCard.module.css";

function AdminCard({ data }) {
  const router = useRouter();
  const publishHandler = async () => {
    const res = await fetch(`/api/profile/published/${data._id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className={styles.properties}>
        <span>{data.location}</span>
        <span>{sp(data.price)}</span>
      </div>
      <button onClick={publishHandler}>انتشار</button>
      <Toaster />
    </div>
  );
}

export default AdminCard;
