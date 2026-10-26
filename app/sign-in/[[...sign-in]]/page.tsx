import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

import styles from "@/app/auth.module.css";

export default function SignInPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Sign in to Ever After Planner</h1>
      <Suspense fallback={<p role="status">Loading sign-in…</p>}>
        <SignIn />
      </Suspense>
      <Link className={styles.backLink} href="/">
        Back to planner
      </Link>
    </main>
  );
}
