import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
import styles from './Home.module.css';

export default async function Home() {
  const session = await auth();
  console.log(session);
  if (!session) redirect("api/auth/signin");

  return (
    <>
      <div className={styles.container}>
        <Sidebar/>
        <main className={styles.main}>
          {/* <h1>Welcome {session.user.name} to My Website</h1>
          <h5>You are {session.user.role} of this page</h5>
          <Link href="/api/auth/signout" className={styles.logoutLink}>Logout</Link> */}
        </main>
      </div>
    </>
  );
}
