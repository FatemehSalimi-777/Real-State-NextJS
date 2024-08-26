"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import styles from "./SignupPage.module.css";

function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود:</h4>
      <form>
        <label>ایمیل:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <TailSpin
            visible={true}
            height="45"
            color="#304ffe"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit" onClick={loginHandler}>
            ورود
          </button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href="/signup">ثبت‌نام</Link>
      </p>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default SigninPage;
