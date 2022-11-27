import type { NextPage } from 'next'
import Head from 'next/head'

import Container from "../components/container";
import LoginCard from "../components/loginCard";

const LoginPage: NextPage = () => {
  return (
    <Container className="flex justify-center items-center">
      <Head>
        <title>Login | World Cup 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginCard />
    </Container>
  );
};

export default LoginPage;
