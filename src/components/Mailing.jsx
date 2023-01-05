import Helmet from "react-helmet";
import styles from "../style";

export default function Mailing() {
return (
        <>
         <section id="waitlist">
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                id="getWaitlistContainer"
                data-waitlist_id="4815"
         ></div>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
                />
                <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
            </Helmet>
        </section>
        </>
    );
}
