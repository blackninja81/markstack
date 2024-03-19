import './App.scss';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Tabs from './components/tabs/Tabs';
import Layout from './components/layout/Layout';
import { Analytics } from "@vercel/analytics/react"

function App() {
  ReactGA.initialize('G-J2GPDS11S3');

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Layout>
      <div>
        <Helmet>
          <title>BookMark - Frontend Development Tools</title>
          <meta name="description" content="Curated list of web development tools" />
          <meta name="keywords" content="Front-end development, Web development tools, Web design resources, Web development resources, Responsive design tools" />
          <meta name="author" content="blackstar" />
          <link rel="canonical" href="https://markstack.vercel.app/" />
          <meta property="og:title" content="BookMark" />
          <meta property="og:description" content="Curated list of web development tools" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://markstack.vercel.app/" />
          <meta property="og:image" content="./src/assets/images/logo2.png" />
        </Helmet>
        <Tabs />
        <Analytics/>
      </div>
    </Layout>
  );
}

export default App;
