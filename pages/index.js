import { Client } from "../prismic";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";
import Layout from "../components/Layout";

const Page = (props) => {
  console.log(props);
  return (
    <Layout menu={props.menu}>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams: {
    uid: "home",
  },
});

export default Page;
