import React from "react";
import "./testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import CarouselWrapper from "./CarouselWrapper";

const testimonials = [
  {
    testimony:
      "It was a great experience working with Right Sight Research. The service, flexibility and response time to meet my custom requirement, as well as the quality of the report was amazing.",
    name: "Chris Wong",
    designation: "Sales Manager",
  },
  {
    testimony:
      "I highly recommend RSR, they delivered every promise they made.",
    name: "Oliver Barth",
    designation: "Business consultant",
  },
  {
    testimony:
      "The report we received was very impressive. The efforts RSR team took to know our exact requirements were commendable.",
    name: "Jennifer Hopper",
    designation: "Product head",
  },
  {
    testimony:
      "It was indeed a good experience, would definitely recommend and come back for future prospects.",
    name: "Mike Lee",
    designation: "Corporate researcher",
  },
];

const TestimonialCard = (props) => {
  const { testimonial } = props;

  return (
    <div className="testimonial">
      <p className="testimonial-text">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="quote-icon quote-left-icon"
          style={{ color: "#b3b6bd", opacity: 0.2 }}
        />
        <span>{testimonial.testimony}</span>
      </p>
      <p className="overview">
        <b>- {testimonial.name}</b>, {testimonial.designation}
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials-root">
      <h3>Client Testimonials</h3>
      <div className="underline"></div>
      <div className="row">
        <CarouselWrapper>
          {testimonials.map((testimonial, index) => (
            <div className="testimonials-container" key={"container-" + index}>
              <TestimonialCard
                testimonial={testimonial}
                key={"testimonial-" + testimonial.name}
              />
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default Testimonials;
