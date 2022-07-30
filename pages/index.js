import Head from 'next/head';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Xa</title>
        <meta name="title" content="Job Xa" />
        <meta
          name="description"
          content="Job Xa is the job platform where freelancer get their dream job whereas the employer find the best talent for their work."
        />
        <meta
          name="keywords"
          content="jobxa,freelancing,online job,find job, find talent, find work, freelancer, online jobs in nepal, job xa "
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
      </Head>
      <LandingPage />
    </div>
  );
}
