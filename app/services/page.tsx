import React from "react";
import ServiceCard from "../components/ServiceCard";
import styles from "./Services.module.css";
import ProcessCard from "../components/ProcessCard";
import GeneralCard from "../components/GeneralCard";

function ServicesPage() {
  return (
    <div>
      <section className="head">
        <div className="snWrapper">
          <h1 className="navTitle">Our Services</h1>
        </div>
      </section>
      <section id={styles.sn1} className="sn">
        <div className="snWrapper">
          <article>
            <h1 className="title">GENERAL SERVICES</h1>
            <hr className="underline" />
            <div className={styles.grid}>
              <GeneralCard title="Company Registration" price="R350" />
              <GeneralCard title="Business Plan" price="R750" />
              <GeneralCard title="Tax Clearance" price="R750" />
              <GeneralCard title="Letter of Good Standing" price="R1 800" />
              <GeneralCard title="Share Certificate" price="R300" />
              <GeneralCard title="Tax Pin or Tax Certificate" price="R750" />
              <GeneralCard title="Tax Returns" price="R300" />
              <GeneralCard title="SARS efilling Profile" price="R150" />
              <GeneralCard title="Tax Number" price="R200" />
              <GeneralCard title="BEE Certificate" price="R750" />
              <GeneralCard title="COIDA Application" price="R1 800" />
              <GeneralCard title="Financial Statements" price="R1 100" />
            </div>
          </article>
        </div>
      </section>
      <section id={styles.sn2} className="sn">
        <div className="snWrapper">
          <article>
            <h1 className="title">CIPC SERVICES</h1>
            <hr className="underline" />
            <div className={styles.grid}>
              <ServiceCard
                title="Register"
                services={[
                  {
                    name: "New Pty Company",
                    price: "R350",
                  },
                  {
                    name: "Shelf Name & New Pty Company",
                    price: "R580",
                  },
                  {
                    name: "2019 Shelf Company (Name Change & Tax Clearance)",
                    price: "R1 290",
                  },
                  {
                    name: "2010 Shelf CC",
                    price: "R5 990",
                  },
                  {
                    name: "Share Certificate",
                    price: "R350",
                  },
                  {
                    name: "NPC Registration",
                    price: "R1 690",
                  },
                  {
                    name: "PBO Registration",
                    price: "R4 990",
                  },
                  {
                    name: "Nedbank Business Account",
                    price: "FREE",
                  },
                  {
                    name: "BEE Affidavit",
                    price: "FREE",
                  },
                ]}
                isBlue={false}
              />

              <ServiceCard
                title="Empower"
                services={[
                  {
                    name: "Tax Clearance Combo",
                    price: "R750",
                  },
                  {
                    name: "CSD Registration",
                    price: "R490",
                  },
                  {
                    name: "VAT Registration",
                    price: "R2 290",
                  },
                  {
                    name: "UIF, PAYE and SDL Registration (SARS)",
                    price: "R1 890",
                  },
                  {
                    name: "Import/Export License",
                    price: "R2 450",
                  },
                  {
                    name: "COID Registration",
                    price: "R1 490",
                  },
                  {
                    name: "Letter of Good Standing",
                    price: "R790",
                  },
                  {
                    name: "Logo Design",
                    price: "R1 290",
                  },
                  {
                    name: "Business Website",
                    price: "R1 290",
                  },
                  {
                    name: "CIDB Registration Level 1",
                    price: "R1 990",
                  },
                  {
                    name: "CIDB Registration Level 2-9",
                    price: "R3 990",
                  },
                  {
                    name: "NHBRC Registration",
                    price: "R3 490",
                  },
                  {
                    name: "PSIRA Registration",
                    price: "R2 990",
                  },
                ]}
                isBlue={false}
              />

              <ServiceCard
                title="Grow"
                services={[
                  {
                    name: "Company Profile",
                    price: "R690",
                  },
                  {
                    name: "Business Plan (for finance and tenders)",
                    price: "R2 490",
                  },
                  {
                    name: "Trademarks",
                    price: "R2 290",
                  },
                  {
                    name: "Tax Returns (IT14 or IRP6)",
                    price: "R5 990",
                  },
                ]}
                isBlue={false}
              />
            </div>
          </article>
          <div></div>
        </div>
      </section>

      <section id={styles.sn3} className="sn">
        <div className="snWrapper">
          <article>
            <h1 className="title">OUR PACKAGES</h1>
            <hr className="underline" />
          </article>
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
            <ProcessCard
              title="INDUSTRY PACKAGE"
              body="This is the 'budget option' for a business looking for Tender."
              isBlue={false}
            />
            <ProcessCard
              title="HOLDING PACKAGE"
              body="This is a holding structure package which allows you to start with a diversified company."
              isBlue={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
