import Link from "next/link";

const Wame = () => {
  return (
    <>
      <Link
        href="https://wa.me/+919334314161?text=Hello,%20I%20want%20to%20enquire%20for%20admission"
        target="_blank"
      >
        <img className="wame" src="./whatsapp-logo.svg" alt="Whatsapp us" />
      </Link>
    </>
  );
};

export default Wame;
