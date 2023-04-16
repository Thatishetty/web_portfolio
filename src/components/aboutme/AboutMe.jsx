import { t } from "i18next";
import styles from "./AboutMe.module.css";
import cover from "../../assets/cover.jpg"
import { motion } from "framer-motion";
import zigzag from "../../assets/icons/zigzag.svg";

const AboutMe = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(-100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      exit={{ opacity: 0, transform: "translateY(0%)" }}
      transition={{ duration: 0.8 }}
    >
      <section className={`aboutme ${styles.aboutme}`}>
        <img src={cover} alt="aboutme" />
        <p>{t("About Me   ")}</p>

        <div className={styles.sl}>
          <section className={styles.skills}>
            <article className="title">
              <h4>{t("mySkills")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>

            <div>
              <span>HTML</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>CSS</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            

            <div>
              <span>AWS</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li ></li>
              </ul>
            </div><div>
              <span>GCP</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li ></li>
              </ul>
            </div>
            <div>
              <span>JavaEE</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li ></li>
              </ul>
            </div>
            <div>
              <span>Project Management</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>


            <div>
              <span>Django</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>React</span>
              <ul>
                <li></li>
                <li></li>
                <li className={styles.true}></li>
                <li className={styles.true}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            <div>
              <span>JavaScript</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            <div>
              <span>MongoDB</span>
              <ul>
                <li></li>
                <li></li>
                <li ></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            <div>
              <span>SQL</span>
              <ul>
                <li></li>
                <li></li>
                <li ></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
      
          </section>

          <section className={styles.languages}>
            <article className="title">
              <h4>{t("languages")}</h4>
              <img src={zigzag} alt="zigzag" />
            </article>
            <div>
              <span>{t("C")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <span>{t("C++")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <span>{t("Java")}</span>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.true}></li>
                <li className={styles.false}></li>
              </ul>
            </div>

            <div>
              <span>{t("Python")}</span>
              <ul>
                <li></li>
                <li className={styles.true}></li>
                <li className={styles.true}></li>
                <li className={styles.false}></li>
                <li className={styles.false}></li>
              </ul>
            </div>
            
          </section>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutMe;
