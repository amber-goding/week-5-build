import { Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

import styles from "./auth.module.css";

export function AccountControls() {
  return (
    <div className={styles.accountArea}>
      <p className="journal-label">A private planning journal</p>
      <nav aria-label="Your account" className={styles.controls}>
        <Suspense fallback={<span role="status">Loading account…</span>}>
          <Show when="signed-out">
            <Link className={styles.accountLink} href="/sign-in">
              Sign in
            </Link>
            <Link className={styles.accountLink} href="/sign-up">
              Sign up
            </Link>
          </Show>
          <Show when="signed-in">
            <span className={styles.accountLabel}>Your account</span>
            <UserButton />
          </Show>
        </Suspense>
      </nav>
    </div>
  );
}
