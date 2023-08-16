import React from "react";
import timelineElements from "../../consts/TimelineElements";
import styles from "./Events.module.css";
import commonStyles from "../../commonStyles.module.css";
const Events = () => {
  return (
    <div
      id="events"
      className={`${styles.Events} ${commonStyles.outer__layout}`}
    >
      <h1 className={commonStyles.title}>Events</h1>
      <div className={styles.cards}>
        {timelineElements.map((element) => {
          return (
            <div
              key={element.id}
              className={`${styles.card} ${commonStyles.common__card}`}
            >
              <div className={styles.card__left}>
                <img src={element.img} alt="" />
              </div>
              <div className={styles.card__right}>
                <h3 className={styles.subtitle}>{element.title}</h3>
                {element.topics || element.subEvents ? (
                  <ul className={styles.container}>
                    {element.topics?.map((item) => (
                      <li className="event">{item}</li>
                    ))}
                    {element.subEvents?.map((item) => (
                      <li className="subEvent">{item}</li>
                    ))}
                  </ul>
                ) : null}
                <p className="description">{element.Description}</p>
              </div>
            </div>
          );
        })}

        <div className={styles.event__note}>
          <div className={styles.note}>Note:</div>
          <div className={styles.note_content}>
            <ul>
              <li>
                Last Date for Submission of Papers{" "}
                <span>AUGUST 20.08.2023</span>
              </li>
              <li>
                Acceptance Intimation on <span>AUGUST 22.08.2023</span>
              </li>
              <li>Maximum 3 Participant per Article</li>
              <li>
                Only those seleted for Paper Presentation are permitted to
                participate in Events
              </li>
              <li>
                Other than paper presentation students can participate only in
                one other technical event.
              </li>
              <li>
                Send Your Papers to this Mail ID :{" "}
                <a href="mailto: tekclusterece18@gmail.com">
                  tekclusterece18@gmail.com
                </a>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;