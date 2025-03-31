import Aos from "aos";
import React, { useEffect } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import { image1 } from "../../firm/assets/export-assets";
import Footer from "../../../components/ui/Footer";
import { BiSearch } from "react-icons/bi";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { BsArrowUpRight } from "react-icons/bs";
import { Form, Formik } from "formik";
import InputComp from "../../../components/ui/InputComp";
import * as Yup from "yup";
import { usePostEmail } from "../../../stores/mainAction";
import { toast } from "sonner";
import {
  BannerContactUs,
  BannerContactUs2,
} from "../../../assets/images/export-assets";
import MobileContact from "./MobileContact";

const Contact = () => {
  const { mutate, isPending } = usePostEmail();

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  return (
    <>
      <Header />
      <MainLayout
        className={"hidden lg:flex"}
        title={"News and Updates - Anagata Law Firm"}
        description={
          "Delivering strategic legal solutions with global experience"
        }
      >
        <div
          data-aos="fade-up"
          className="w-full bg-ang-prm-blue grid grid-cols-2 h-[495px]"
        >
          <div className="bg-ang-prm-blues flex w-full h-full justify-center items-start flex-col pl-24 pr-9">
            <div className="flex gap-x-4 items-center mb-10">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[24px] text-white">Contact Us</h1>
            </div>
            <TextReveal
              text={
                "Reach out today—your future problem solver is just a call or click away."
              }
            />
          </div>
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img
              src={BannerContactUs}
              alt=""
              className="w-full h-full object-cover grayscale contrast-100"
            />
          </div>
        </div>

        <section
          id="our-core-practices"
          className="w-full px-24 flex py-[3rem] flex-col gap-y-7 pb-[6rem]"
        >
          <div
            data-aos="fade-up"
            data-aos-delay={"100"}
            data-aos-offset="20"
            className="flex flex-col gap-y-8 pb-4"
          >
            <div className="h-[1px] w-full bg-gray-300"></div>
            <h1 className="text-[32px] font-bold text-ang-prm-gray">
              Our Location
            </h1>

            <div className="w-full grid grid-cols-2 gap-x-8">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-ang-prm-red text-[18px] font-bold">
                  Main Office (Jakarta)
                </h2>
                <p className="w-[80%]">
                  Wisma Nugra Santana, 16th floor Jl. Jenderal Sudirman Kav.7-8,
                  Central Jakarta.
                </p>
                <iframe
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  className="h-[25rem] w-full rounded-2xl grayscale"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4193535353174!2d106.81630888414813!3d-6.208288477740604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35ec03549033721%3A0xcc7002ea14e16955!2sANAGATA%20LAW%20FIRM!5e0!3m2!1sid!2sid!4v1740910470772!5m2!1sid!2sid`}
                ></iframe>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="text-ang-prm-red text-[18px] font-bold">
                  East Indonesian Desk (Surabaya)
                </h2>
                <p className="w-[80%]">
                  Urban Office Building, Jl. Dr. Insinyur H. Soekarno No. 470,
                  Surabaya, East Java.
                </p>
                <iframe
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  className="h-[25rem] w-full rounded-2xl grayscale"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2920066882984!2d112.77816617576708!3d-7.3210601926871135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7faebe2700ef1%3A0xfe171ed437eedc34!2sUrban%20Office!5e0!3m2!1sid!2sid!4v1740910420779!5m2!1sid!2sid`}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          id="our-highly-motivated-people"
          className="w-full bg-gray-100 h-fit px-24 flex flex-col pt-[4rem] pb-[6rem]"
        >
          <div
            data-aos="fade-up"
            data-aos-delay={"100"}
            className="flex flex-col gap-y-8"
          ></div>
          <div
            data-aos="fade-up"
            data-aos-delay={"200"}
            className="w-full grid grid-cols-3 gap-8 gap-x-12 mt-10"
          >
            <div className="flex flex-col gap-y-4 z-20 bg-gray-500 rounded-2xl h-fit overflow-hidden relative">
              <img
                src={BannerContactUs2}
                alt=""
                className="w-full h-full object-cover absolute z-0 grayscale"
              />

              <div className="flex flex-col gap-y-5 z-10 px-8 bg-gray-800/90 py-14 h-fit">
                <div data-aos="fade-up" className="flex gap-x-4 items-center">
                  <img src={IconLogo} alt="icon-anagata" className="h-5" />
                  <h1 className="text-[18px] text-white">Contact Us</h1>
                </div>

                <h1
                  data-aos="fade-up"
                  data-aos-delay={"50"}
                  className="font-bold text-[36px] text-white"
                >
                  Anagata offers capability and resources as a full-service
                  firm.
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-delay={"70"}
                  className="h-[1px] w-full bg-white/60 my-1"
                ></div>
                <h1
                  data-aos="fade-up"
                  data-aos-delay={"150"}
                  className="font-light text-[20px] text-white"
                >
                  Our team is ready to assist you—feel free to contact us for
                  any inquiries or assistance.
                </h1>
              </div>
            </div>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                subject: "",
                message: "",
              }}
              validateOnBlur={false}
              validationSchema={Yup.object({
                first_name: Yup.string().required("First name is required"),
                last_name: Yup.string().required("Last name is required"),
                email: Yup.string()
                  .email("Invalid email")
                  .required("Email is required"),
                phone_number: Yup.string().required("Phone number is required"),
                subject: Yup.string().required("Subject is required"),
                message: Yup.string().required("Message is required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                mutate(values, {
                  onSuccess: (data) => {
                    toast.success("Email sent successfully!", {
                      position: "bottom-center",
                      duration: 3000,
                      style: {
                        maxWidth: "80vw",
                        fontSize: "14px",
                        padding: "10px",
                      },
                    });
                    resetForm();
                  },
                });

                setSubmitting(false);
              }}
            >
              {(props) => {
                return (
                  <Form className="w-full col-span-2">
                    <div className="flex flex-col gap-y-2 mb-16">
                      <h1 className="text-[32px] font-bold text-ang-prm-gray ">
                        Send Your Inquiries
                      </h1>
                      <div className="h-[1px] w-full bg-gray-300"></div>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay={"100"}
                      className="w-full h-fit grid grid-cols-2 gap-8 col-span-2 gap-y-8"
                    >
                      <InputComp
                        data-aos="fade-up"
                        data-aos-delay={"50"}
                        name={"first_name"}
                        label={"First Name"}
                        placeholder="Type your first name ..."
                        {...props}
                      />
                      <InputComp
                        data-aos="fade-up"
                        data-aos-delay={"100"}
                        name={"last_name"}
                        variant="static"
                        label="Last Name"
                        placeholder="Type your last name ..."
                        {...props}
                      />
                      <div
                        data-aos="fade-up"
                        data-aos-delay={"100"}
                        className="col-span-2"
                      >
                        <InputComp
                          name={"email"}
                          variant="static"
                          label="Email"
                          placeholder="Type your email ..."
                          {...props}
                        />
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay={"100"}
                        className="col-span-2"
                      >
                        <InputComp
                          name={"phone_number"}
                          variant="static"
                          label="Phone Number"
                          placeholder="Type your phone number ..."
                          {...props}
                        />
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay={"100"}
                        className="col-span-2"
                      >
                        <InputComp
                          name={"subject"}
                          variant="static"
                          label="Subject"
                          placeholder="Type your phone number ..."
                          {...props}
                        />
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay={"100"}
                        className="col-span-2 flex flex-col gap-y-8"
                      >
                        <InputComp
                          name={"message"}
                          variant="static"
                          type={"textarea"}
                          label="Message"
                          placeholder="Type your message ..."
                          {...props}
                        />
                        <Button
                          children
                          type="submit"
                          className={`${
                            isPending ? "button-disabled" : "button-red"
                          } w-[12rem]`}
                          disabled={isPending ? true : false}
                        >
                          {isPending ? "Sending ..." : "Send Inquires"}
                        </Button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>
        <Footer />
      </MainLayout>

      <MobileContact />
    </>
  );
};

export default Contact;
