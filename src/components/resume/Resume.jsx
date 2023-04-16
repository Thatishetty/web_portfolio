import { t } from "i18next";

import styles from "./Resume.module.css";
import { motion } from "framer-motion";
import zigzag from "../../assets/icons/zigzag.svg";

const Resume = () => {
  return (
    <motion.div
      // layout
      initial={{ opacity: 0, transform: "translateX(-100%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(0%)" }}
      transition={{ duration: 0.8 }}
      className={styles.portfolio}
    >
      <div className={`resume ${styles.resume}`}>
        <h1>{t("My Resume")}</h1>

        <div className={styles.secs}>
          <section className={`education ${styles.education}`}>
            <article className="title">
              <h4>{t("education")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>

            <ul>
              <li>
                <span>{t("2018")}</span>
                <strong>{t("Sri Sai Ram High School , Hyderabad")}</strong>
                <p>{t("Matriculation - SSC")}</p>
              </li>

              <li>
                <span>{t("2020")}</span>
                <strong>{t("Sri Gayatri Junior College")}</strong>
                <p>{t("Intermediate-(12th)")}</p>
              </li>
              <li>
                <span>{t("2024")}</span>
                <strong>{t("KL University")}</strong>
                <p>{t("B. Tech. - Hons.")}</p>
              </li>
            </ul>
          </section>

          <section className={`languages ${styles.languages}`}>
            <article className="title">
              <h4>{t("experience")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>

            <ul>
              <li>
                <span>{t("March , 2022")}</span>
                <strong>{t("Blueprism University")}</strong>
                <p>{t("Internship - AICTE EduSkills")}</p>
              </li>
              <li>
                <span>{t("June , 2022")}</span>
                <strong>{t("Celonis Process Mining")}</strong>
                <p>{t("Internship - AICTE EduSkills")}</p>
              </li>

             
            </ul>
          </section>
          <section className={`education ${styles.education}`}>
            <article className="title">
              <h4>{t("Global Certificates")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>

            <ul>
              <li>
                <span>{t("")}</span>
                <strong>{t("AWS Certified Developer - Associate")}</strong>
                <p>{t("")}</p>
              </li>
              <li>
                <span>{t("")}</span>
                <strong>{t("AWS Certified Solutions Architect - Associate")}</strong>
                <p>{t("")}</p>
              </li>
              <li>
                <span>{t("")}</span>
                <strong>{t("GCP Associate Cloud Engineer")}</strong>
                <p>{t("")}</p>
              </li>
              <li>
                <span>{t("")}</span>
                <strong>{t("Red Hat Certified Enterprise Application Developer")}</strong>
                <p>{t("")}</p>
              </li>
              <li>
                <span>{t("")}</span>
                <strong>{t("AWS Certified Cloud Practitioner")}</strong>
                <p>{t("")}</p>
              </li>

             
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
