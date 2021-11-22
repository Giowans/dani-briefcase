import { useRouter } from "next/router";
import { useEffect } from "react";

const QuestionariePage = () => {
  const router = useRouter();
  return <h1>{router.pathname}</h1>;
};

export default QuestionariePage;
