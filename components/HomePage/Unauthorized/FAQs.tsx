import { useState } from "react";

type FAQcomponentProps = {
  question: string;
  answer: string;
};

const FAQcomponent = ({ question, answer }: FAQcomponentProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="p-5 space-y-2 transition duration-200 bg-white shadow-lg cursor-pointer rounded-xl hover:shadow hover:text-blue-600 md:p-8"
      id="FAQs"
    >
      <div
        className="flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <h4 className="mr-4 font-medium">{question}</h4>
        <span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </div>
      {open && <p className="pt-4 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQs = () => {
  const FAQsData = [
    {
      question: "How Long are the internships?",
      answer:
        "Internship duration varies by company and project. It could vary from 1 week to a few months. You can choose to apply based on your availability. All internships are part-time",
    },
    {
      question: "Are the internships in a group or individually?",
      answer: "It differs based on a companys requirements. We support both.",
    },
    {
      question: "Can I do an internship again if I have done it before?",
      answer: "You can do an internship as many times as you want.",
    },
    {
      question:
        "What are the minimum and maximum ages to be eligible for an internship?",
      answer:
        "The minimum age is 14 years old and the maximum age is 19 years old.",
    },
    {
      question: "Are the internships paid?",
      answer:
        "No, unfortunately, there are laws preventing that. Companies provide interns with official certificates and reward coupons",
    },
  ];
  return (
    <section className="py-12 bg-blue-200 lg:py-16 xl:py-28">
      <div className="container px-5 mx-auto">
        <div className="grid gap-6 lg:gap-10 xl:grid-cols-3">
          <div className="space-y-2 lg:space-y-4">
            <h2 className="text-2xl font-black sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col space-y-5 xl:col-span-2">
            {FAQsData.map((i, x) => {
              return (
                <FAQcomponent question={i.question} answer={i.answer} key={x} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
