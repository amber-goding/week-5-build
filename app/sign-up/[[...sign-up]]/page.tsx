import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

import styles from "@/app/auth.module.css";

export default function SignUpPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Create your Ever After account</h1>
      <Suspense fallback={<p role="status">Loading sign-up…</p>}>
        <SignUp />
      </Suspense>
      <Link className={styles.backLink} href="/">
        Back to planner
      </Link>
    </main>
  );
}
