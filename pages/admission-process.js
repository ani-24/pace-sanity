import { client } from "../lib/client";
import PortableText from "@sanity/block-content-to-react";

import Image from "next/image";

import Payment from "../public/qr-code.jpeg";

const AdmissionProcess = ({ details }) => {
  return (
    <div className="container">
      <div className="text">
        <h1 className="title">{details.title}</h1>
        <PortableText blocks={details.description} />
      </div>
      <div className="img">
        <div className="text">
          <h1 className="title">Pay via QR code</h1>
        </div>
        <Image src={Payment} width={400} height={400} alt="Payment" priority />
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
