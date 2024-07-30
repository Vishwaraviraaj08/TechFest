import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is Flarendo '24?",
    answer:
      "Flarendo 2k24 is the one of biggest Technical event conducting by IT dept of Sri Sairam Engineering College.",
  },
  {
    question: "What are the Dates and Timings of event?",
    answer:
      "The event will start at 9AM on 28 August 2024",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Explore various events on the Flarendo's website (this), select the event and register for the same",
  },
  {
    question: "Is there any entry fee for Flarendo '24?",
    answer:
      "No, there is not any entry fee to explore Flarendo 2k24 but to participate in some events you have pay registration fee.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
              <div key={i} className={classes.single} onClick={() => toggle(i)}>
                <div className={classes.question}>{ques.question}</div>
                <div
                    className={`${clicked === i ? classes.answerVisible : classes.answer}`}
                >
                  {ques.answer}
                </div>
                <span className={classes.btn}>+</span>
              </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
