import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Transform the way complaints are handled on your college campus. Embrace a culture of open communication, accountability, and resolution with Campus Careline. Say goodbye to unresolved complaints and create a harmonious learning environment that benefits everyone."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
