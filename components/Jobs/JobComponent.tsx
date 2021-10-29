import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Job } from "../../types";
type Props = {
  job: Job;
};

// The JobComponent should also display a button that when clicked, will open /jobs/{job.id}
const JobComponent = (props: Props) => {
  const router = useRouter();
  return (
    <a>
      <Link href={`/jobs/${props.job.id}`} passHref>
        <div>
          <h1>{props.job.position}</h1>
          <p>{props.job.companyId}</p>
          <p>{props.job.duration}</p>
          <p>{props.job.jobType}</p>
          <button onClick={() => router.push(`/jobs/${props.job.id}`)}>
            View Job
          </button>
        </div>
      </Link>
    </a>
  );
};

export default JobComponent;
