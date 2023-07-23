import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="If you want any kind of help we have our dedicated support team ready to help you out."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
