import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import ceoPicture from "../assets/genesis_kutanga.jpg";
import missionPicture from "../assets/stats2.svg";
import visionPicture from "../assets/globe.svg";

function AboutPage() {
  return (
    <main>
      <section className="head">
        <div className="snWrapper">
          <h1 className="navTitle">About us</h1>
        </div>
      </section>
      <section id={styles.sn1} className="sn">
        <div className="snWrapper">
          <article>
            <h1 className="title">INTRODUCTION</h1>
            <hr className="underline" />
            <div className={styles.content}>
              <p>
                Our company was established in 2020 and our headquarters are
                based in 3537 Dr Matrines St. Krugersdorp, Gauteng. We are
                accounting experts who provide clients with financial support,
                assistance with document renewals, tender applications,
                professional business plan development advice as well as a large
                range of other services to help optimise your business and
                finances.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section id={styles.sn2} className="sn">
        <div className="snWrapper">
          <article>
            <h1 className="title">MISSION</h1>
            <hr className="underline" />
            <div className={styles.content}>
              <p>
                Our mission is to provide expert financial guidance that
                empowers individuals and businesses to successfully navigate the
                complexities of the financial world. <br />
                By offering personalized advice and strategic planning, we help
                our clients overcome financial challenges and seize
                opportunities. Our commitment is to understand each
                client&apos;s unique circumstances and goals, ensuring they have
                the knowledge and support needed to make informed decisions.
                Through our dedicated service, we strive to enable our clients
                to achieve their financial aspirations and secure a prosperous
                future.
              </p>
              <Image
                className={styles.icon}
                src={missionPicture}
                height={200}
                alt="logo"
              />
            </div>
          </article>
        </div>
      </section>
      <section id={styles.sn3} className="sn">
        <div className="snWrapper">
          <article>
            <h1 className="title">VISION</h1>
            <hr className="underline" />
            <div className={styles.content}>
              <Image
                className={styles.icon}
                src={visionPicture}
                height={200}
                alt="logo"
              />
              <p>
                Our vision is to become the foremost provider of holistic
                financial advisory services, dedicated to enhancing the overall
                financial well-being of our clients and communities.
                <br />
                We aim to lead the industry through comprehensive,
                client-centered solutions that address every aspect of financial
                health. By integrating innovative strategies with a deep
                understanding of our clients&apos; needs, we seek to foster
                financial stability, growth, and resilience.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section id={styles.sn4} className="sn">
        <div className="snWrapper">
          <h1 className="title">MEET THE CEO</h1>
          <hr className="underline" />
          <article className={styles.content}>
            <Image src={ceoPicture} height={300} alt="logo" />
            <div className={styles.creds}>
              <h1 className={styles.name}>Genesis Kutanga Ndlovu</h1>
              <p className={styles.position}>
                Financial Analyst and Advisor (FMVA certified)
              </p>
              <p>Rhodes University</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
