import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard"); // Redirect to /dashboard
  }, [router]);

  return null; // Empty component since we're redirecting
};

export default Home;
