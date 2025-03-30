import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TimeLine.module.css";

const TimelineItem = ({ position, year, title, description, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/linha-do-tempo/${id}`);
  };

  return (
    <div className={`${styles.timelineItem} ${styles[position]}`}>
      <button className={styles.timelineButton} onClick={handleClick}>
        <div className={styles.content}>
          <h2 className={styles.year}>{year}</h2>
          {title && <h3>{title}</h3>}
          <p>{description}</p>
        </div>
      </button>
    </div>
  );
};

const Timeline = ({ items }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems =
      timelineRef.current?.querySelectorAll(`.${styles.timelineItem}`) || [];

    timelineItems.forEach((item) => {
      item.style.opacity = 0;
      item.style.transform = "translateY(20px)";
      item.style.transition = "all 0.5s ease-out";
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.timeline} ref={timelineRef}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          position={index % 2 === 0 ? "left" : "right"}
          year={item.year}
          title={item.title}
          // description={item.description}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Timeline;
