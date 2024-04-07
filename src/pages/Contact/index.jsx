import { useForm } from "react-hook-form";
import { Form, StyledH1 } from "./index.styles";
import { StyledButton } from "../../components/Button/index.styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RenderPageTitle from "../../components/PageTitle";
import { useState } from "react";
import ScreenMsg from "../../components/ScreenMsg";

const Contact = () => {
  RenderPageTitle({ title: "E-com | Contact us" });

  const [displayMsg, setDisplayMsg] = useState(false);

  const handleMsgState = () => {
    setDisplayMsg(true);
    setTimeout(() => {
      setDisplayMsg(false);
    }, 3000);
  };

  const schema = yup.object({
    fullName: yup.string().min(3, `You must enter at least 3 characters`).max(100, `Your Full Name cannot be longer then 100 characters`).required(),
    subject: yup.string().min(3, `You must enter at least 3 characters`).max(100, `Your Subject cannot be longer then 100 characters`).required(),
    email: yup.string().email(`Please enter a valid email`).required(),
    body: yup.string().min(3, `You must enter at least 3characters`).max(500, `Your message cannot be longer then 500 characters`).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    handleMsgState();
  };
  return (
    <main>
      <StyledH1>Contact Us</StyledH1>
      {displayMsg && <ScreenMsg msg="Your message has been sent! We will try to answer within 3-5 days" state={setDisplayMsg} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full Name</label>
        <p> {errors.fullName?.message} </p>
        <input {...register("fullName")} />
        <label htmlFor="subject">Subject</label>
        <p> {errors.subject?.message} </p>
        <input {...register("subject")} />
        <label htmlFor="email">Email</label>
        <p> {errors.email?.message} </p>
        <input {...register("email")} />
        <label htmlFor="body">Body</label>
        <p> {errors.body?.message} </p>
        <textarea {...register("body")} />
        <StyledButton type="submit">Submit</StyledButton>
      </Form>
    </main>
  );
};
export default Contact;
