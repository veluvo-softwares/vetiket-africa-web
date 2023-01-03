import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Your go-to destination   <br className="sm:block hidden" /> for all things ticketing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Vetiket Africa is your one-stop shop for all things ticketing. 
      Find tickets for a wide range of events, easily search for events by location, date, or type, and purchase tickets securely online. 
      From concerts to sporting events to theater performances, we've got you covered for all your ticketing needs.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
