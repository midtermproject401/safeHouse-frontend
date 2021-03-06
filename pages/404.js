import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next//router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>oooops </h1>
      <p>
        go back{" "}
        <Link href="/">
          <a>home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
