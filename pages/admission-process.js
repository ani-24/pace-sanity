import { client } from "../lib/client";
import PortableText from "@sanity/block-content-to-react";

const AdmissionProcess = ({ details }) => {
  return (
    <div className="container">
      <div className="text">
        <h1 className="title">{details.title}</h1>
        <PortableText blocks={details.description} />
      </div>
      <div className="img">
        <img src="./payment.png" alt="Payment" />
      </div>
    </div>
  );
};

export default AdmissionProcess;

export const getServerSideProps = async () => {
  const details = await client.fetch(`*[_type == "admissionProcess"]`);
  return {
    props: {
      details: details[0],
    },
  };
};