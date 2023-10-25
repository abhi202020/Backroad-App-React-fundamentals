import React from "react";
import Title from "./Title";
import { serviceData } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />
      <div className="section-center services-center">
        {serviceData.map((newServices) => {
          return (
            <article className="service" key={newServices.id}>
              <span className="service-icon">
                <i className={newServices.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{newServices.title}</h4>
                <p className="service-text">{newServices.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
