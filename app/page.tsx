import Image from "next/image";
import styles from "./Home.module.css";
import woman from "./assets/woman.png";
import stats from "./assets/stats.svg";
import profile from "./assets/profile_round.svg";
import Link from "next/link";
import ProcessCard from "./components/ProcessCard";

export default function Home() {
  return (
    <main>
      <section id={styles.hero}>
        <div className={styles.snWrapper}>
          <article className={styles.valueProp}>
            <h1>
              <span className="highlight">Optimize</span> your business <br />
              Maximize your <span className="highlight">profit</span>
            </h1>
            <p>
              We offer financial strategies and business plan development advice
              to help you business grow.
            </p>
            <Link className={styles.contactBtn} href="/contact">
              CONTACT US
            </Link>
          </article>
          <Image className={styles.wom} src={woman} height={600} alt="logo" />
        </div>
      </section>
      <section id={styles.sn2} className={styles.sn}>
        <div className={styles.snWrapper}>
          <h1 className="title">WHO WE ARE</h1>
          <hr className="underline" />
          <div className={styles.content}>
            <article className={styles.intro}>
              <p>
                We are a company which provides clients with financial support,
                assistance with document renewals and tender applications, as
                well as professional business plan development advice. We offer
                a large range of services to help optimise your business and
                finances.
              </p>
              <Link href="/about" className={styles.btn}>
                Read more...
              </Link>
            </article>
            <Image src={stats} height={250} alt="logo" />
          </div>
        </div>
      </section>

      <section id={styles.sn3} className={styles.sn}>
        <div className={styles.snWrapper}>
          <h1 className="title">OUR PROCESS</h1>
          <hr className="underline" />
          <div className={styles.content}>
            <div className={styles.grid}>
              <ProcessCard
                title="REGISTER"
                body="We'll start with a FREE
                      Business Consultation to
                      understand what you need
                      to get started. Usually, that
                      means you need
                      registrations at CIPC,
                      SARS, databases for
                      Tenders or Funding etc.
                      "
                isBlue={true}
              />
              <ProcessCard
                title="EMPOWER"
                body="We'll guide you through the
                      compliance documents for
                      specific industry and
                      Tender applications, or any
                      other helpful services like
                      branding or website
                      design."
                isBlue={true}
              />
              <ProcessCard
                title="GROW"
                body="As your company grows,
                      we provide ongoing
                      support with Tenders and
                      document renewals. We
                      can also support you in
                      services like business plan
                      development."
                isBlue={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section id={styles.sn4} className={styles.sn}>
        <div className={styles.snWrapper}>
          <h1 className="title">PACKAGES</h1>
          <hr className="underline" />
          <div className={styles.content}>
            <div className={styles.grid}>
              <ProcessCard
                title="TENDER PACKAGE"
                body="All you need to apply for a TENDER in the quickest possible timeframe.
                      "
                isBlue={false}
              />
              <ProcessCard
                title="CLEARANCE PACKAGE"
                body="Get your company registered at CIPC and SARS, with tax clearance."
                isBlue={false}
              />
              <ProcessCard
                title="VAT PACKAGE"
                body="If you need a company with VAT registration, this is perfect."
                isBlue={false}
              />

              <ProcessCard
                title="BRANDING PACKAGE"
                body="Get your company on the map.
                      "
                isBlue={false}
              />
              <ProcessCard
                title="CONSTRUCTION PACKAGE"
                body="This is a 'fully setup' construction company as per the requirements of most contracts."
                isBlue={false}
              />
              <ProcessCard
                title="SECURITY PACKAGE"
                body="This is 'full setup' security company as required by PSIRA."
                isBlue={false}
              />
            </div>
            <Link href="/services" className={styles.btn}>
              Read more...
            </Link>
          </div>
        </div>
      </section>

      <section id={styles.sn5} className={styles.sn}>
        <div className={styles.snWrapper}>
          <h1 className="title">TESTIMONIALS</h1>
          <hr className="underline" />
          <div className={styles.content}>
            <div className={styles.grid}>
              <div className={styles.testimonial}>
                <Image src={profile} height={30} alt="logo" />
                <p>
                  <span>“Helped me when I didn’t know where to start”</span>
                  <br />- Happy Client
                </p>
              </div>
              <div className={styles.testimonial}>
                <Image src={profile} height={30} alt="logo" />
                <p>
                  <span>“Remarkable service, truly the best at his game.”</span>
                  <br />- Happy Client
                </p>
              </div>
              <div className={styles.testimonial}>
                <Image src={profile} height={30} alt="logo" />
                <p>
                  <span>“I received the financial documents I needed.”</span>
                  <br />- Happy Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
