import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
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
        <meta name="language" content="English" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="font-nunito">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
