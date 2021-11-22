import { useRouter } from "next/router";
import { useEffect } from "react";

const DownloadablePage = () => {
  const router = useRouter();
  return <h1>{router.pathname}</h1>;
};

export default DownloadablePage;
