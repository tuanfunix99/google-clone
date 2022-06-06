import React, { Fragment } from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

type PropsType<T> = T extends Promise<{ props: infer Props }> ? Props : never;

const Sigin = ({ providers }: PropsType<typeof getServerSideProps>) => {
  return (
    <Fragment>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
              className="w-52 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google-logo"
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};

export default Sigin;
