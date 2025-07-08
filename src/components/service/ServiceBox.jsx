import Image from "next/image";
import React, { useState } from "react";

const ServiceBox = ({
  title,
  content,
  id,
  expandedId,
  setExpandedId,
  icon,
}) => {
  const isExpanded = expandedId === id;

  // Check if the content contains HTML tags
  const isHtml = /<[a-z][\s\S]*>/i.test(content);

  const toggleExpand = () => {
    setExpandedId(isExpanded ? null : id);
  };

  return (
    <div className="iq-service-box card">
      <div className="offering-title">
        {icon && (
          <div className="icon">
            <Image src={icon} alt={`${title} Icon`} />
          </div>
        )}
        <div className="title-text">{title}</div>
      </div>

      <div className="service-description">
        {isExpanded ? (
          // If the content contains HTML, render it with dangerouslySetInnerHTML
          isHtml ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            content // If plain text, render it directly
          )
        ) : // Truncate content if not expanded, and handle HTML safely
        isHtml ? (
          <div dangerouslySetInnerHTML={{ __html: content.slice(0, 180) }} />
        ) : (
          `${content.slice(0, 100)}...`
        )}
      </div>

      <button
        className="btn-icon-right iq-button-animated linked-btn has_icon"
        onClick={toggleExpand}
      >
        <span className="btn_text-main">
          <span className="btn_text one">
            {isExpanded ? "Show Less" : "Read More"}
          </span>
          <span className="btn_text two">
            {isExpanded ? "Show Less" : "Read More"}
          </span>
        </span>
        <span className="btn-icon">
          <i
            className={`fa ${
              isExpanded ? "fa-chevron-up" : "fa-chevron-right"
            } first`}
          ></i>
          <i
            className={`fa ${
              isExpanded ? "fa-arrow-up" : "fa-arrow-right"
            } second`}
          ></i>
        </span>
      </button>
    </div>
  );
};

export default ServiceBox;
