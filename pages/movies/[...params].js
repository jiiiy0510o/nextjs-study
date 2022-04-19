import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Movies() {
  const router = useRouter();
  const [title, id] = router.query.params;

  return (
    <div>
      <Seo title={title} />
      <h2>{title}</h2>
    </div>
  );
}
