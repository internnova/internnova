import { useState } from "react";

interface FAQcomponentProps {
  question: string;
  answer: string;
}

const FAQcomponent = ({ question, answer }: FAQcomponentProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="bg-white p-5 rounded-xl shadow-lg space-y-2 cursor-pointer transition duration-200 hover:shadow hover:text-blue-600 md:p-8"
      id="FAQs"
    >
      <div
        className="flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <h4 className="font-medium mr-4">{question}</h4>
        <span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
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
              className="h-6 w-6"
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
      {open && <p className="text-gray-600 pt-4">{answer}</p>}
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
    <section className="py-12 lg:py-16 xl:py-28">
      <div className="container mx-auto px-5">
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
