import { motion } from "framer-motion";

function Contact() {
    return (
        <>
            <div className="contact">
                <motion.a
                    href="https://github.com/alheban/" target="_blank"
                    whileHover={{ scale: 1.1 }} // Grossissement au survol
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Transition fluide
                >
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Github">
                        <path d="M15 0C6.7175 0 0 6.6565 0 14.8666C0 21.4351 4.2975 27.0076 10.2587 28.9737C11.0075 29.1112 11.25 28.6503 11.25 28.2589V25.4912C7.0775 26.3906 6.20875 23.7369 6.20875 23.7369C5.52625 22.0186 4.5425 21.5615 4.5425 21.5615C3.18125 20.6385 4.64625 20.6583 4.64625 20.6583C6.1525 20.7624 6.945 22.1908 6.945 22.1908C8.2825 24.4629 10.4538 23.8063 11.31 23.426C11.4438 22.4659 11.8325 21.8093 12.2625 21.4388C8.93125 21.061 5.42875 19.7862 5.42875 14.091C5.42875 12.4669 6.015 11.1413 6.97375 10.1006C6.81875 9.72521 6.305 8.21254 7.12 6.16591C7.12 6.16591 8.38 5.76699 11.2462 7.68973C12.4425 7.36019 13.725 7.19542 15 7.18922C16.275 7.19542 17.5587 7.36019 18.7575 7.68973C21.6212 5.76699 22.8787 6.16591 22.8787 6.16591C23.695 8.21378 23.1812 9.72645 23.0262 10.1006C23.9887 11.1413 24.57 12.4681 24.57 14.091C24.57 19.801 21.0612 21.0585 17.7213 21.4264C18.2588 21.8873 18.75 22.7917 18.75 24.1792V28.2589C18.75 28.6541 18.99 29.1186 19.7512 28.9725C25.7075 27.0039 30 21.4326 30 14.8666C30 6.6565 23.2837 0 15 0Z" fill="white"/>
                    </svg>
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/anne-lise-heban-44b86a50" target="_blank"
                    whileHover={{ scale: 1.1 }} // Grossissement au survol
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Transition fluide
                >
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"  alt="LinkedIn">
                        <path d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881 0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98 2.5ZM5 7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983 9.931 19.012 9.549 19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982 9.155V7Z" fill="white"/>
                    </svg>
                </motion.a>
                <motion.a
                    href="mailto:alheban@gmail.com"
                    whileHover={{ scale: 1.1 }} // Grossissement au survol
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Transition fluide
                >
                    <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Gmail">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.52271 27.7571H8.40918V13.4617L18.5 21.0298L28.5911 13.4617V27.7571H34.4775C35.8733 27.7571 37.0002 26.6261 37.0002 25.2344V3.79126C37.0002 0.671505 33.439 -1.10706 30.9456 0.763973L28.5911 2.5299L18.5 10.0981L8.40918 2.5299L6.05444 0.763973C3.55713 -1.10706 0 0.671505 0 3.79126V25.2344C0 26.6303 1.1311 27.7571 2.52271 27.7571Z" fill="white"/>
                    </svg>
                </motion.a>
            </div>
        </>
    );
}

export default Contact;
