"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import styles from "./SignupPage.module.css";

function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      toast.error("رمز عبور و تکرار رمز عبور مطابقت ندارد!");
      return;
    }
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت‌نام:</h4>
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
        <label>تکرار رمز عبور:</label>
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
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
          <button type="submit" onClick={signupHandler}>
            ثبت‌نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default SignupPage;
