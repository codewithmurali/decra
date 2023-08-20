import React from "react";
import timelineElements from "../../consts/TimelineElements";
import styles from "./Events.module.css";
import downloadIcon from "../../assets/download.svg";
import abstract from "../../../public/Tekcluster_abstract_format.docx";
import commonStyles from "../../commonStyles.module.css";
import send from "../../assets/send.svg";
const Events = () => {
  return (
    <div
      id="events"
      className={`${styles.Events} ${commonStyles.outer__layout}`}
    >
      <h2 className={commonStyles.title}>Events</h2>
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
                <div className={styles.addition__information}>
                  <h5 className={styles.genere}>{element.genere}</h5>
                  <h5 className={styles.schedule}>{element.schedule}</h5>
                </div>

                {element.topics || element.subEvents ? (
                  <ul className={styles.container}>
                    {element.topics?.map((item) => (
                      <li className={styles.subEvent}>{item}</li>
                    ))}
                    {element.subEvents?.map((item) => (
                      <li className={styles.subEvent}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                <p className="description">{element.Description}</p>
                {element.id == 1 && (
                  <>
                    <div className={styles.submit}>
                      <img
                        className={styles.send}
                        src={send}
                        alt="send a mail"
                      />
                      <a href="mailto: tekclusterece18@gmail.com">
                        Send Your Abstract
                      </a>
                    </div>

                    <div className={`${styles.submit} ${styles.download} `}>
                      <a href={abstract} download>
                        Download Abstract Format
                      </a>
                      <img
                        className={styles.downloadIcon}
                        src={downloadIcon}
                        alt="Download an abstract format"
                      />
                    </div>
                  </>
                )}
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
                Only those selected for Paper Presentation are permitted to
                participate in Events
              </li>
              <li>
                Other than paper presentation students can participate only in
                one other technical event.
              </li>
              <li>
                Send Your Abstract Idea to this Mail ID :{" "}
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
