import styles from "@/components/loading/loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loadingWrapper}>
            <svg className={styles.loadingBike} viewBox="0 0 48 30">
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                >
                    <g transform="translate(9.5,19)">
                        <circle
                            className={styles.bikeTire}
                            r="9"
                            strokeDasharray="56.549 56.549"
                        />
                        <g
                            className={styles.bikeSpokesSpin}
                            strokeDasharray="31.416 31.416"
                            strokeDashoffset="-23.562"
                        >
                            <circle className={styles.bikeSpokes} r="5" />
                            <circle
                                className={styles.bikeSpokes}
                                r="5"
                                transform="rotate(180,0,0)"
                            />
                        </g>
                    </g>
                    <g transform="translate(24,19)">
                        <g
                            className={styles.bikePedalsSpin}
                            strokeDasharray="25.133 25.133"
                            strokeDashoffset="-21.991"
                            transform="rotate(67.5,0,0)"
                        >
                            <circle className={styles.bikePedals} r="4" />
                            <circle
                                className={styles.bikePedals}
                                r="4"
                                transform="rotate(180,0,0)"
                            />
                        </g>
                    </g>
                    <g transform="translate(38.5,19)">
                        <circle
                            className={styles.bikeTire}
                            r="9"
                            strokeDasharray="56.549 56.549"
                        />
                        <g
                            className={styles.bikeSpokesSpin}
                            strokeDasharray="31.416 31.416"
                            strokeDashoffset="-23.562"
                        >
                            <circle className={styles.bikeSpokes} r="5" />
                            <circle
                                className={styles.bikeSpokes}
                                r="5"
                                transform="rotate(180,0,0)"
                            />
                        </g>
                    </g>
                    <polyline
                        className={styles.bikeSeat}
                        points="14 3,18 3"
                        strokeDasharray="5 5"
                    />
                    <polyline
                        className={styles.bikeFrame}
                        points="16 3,24 19,9.5 19,18 8,34 7,24 19"
                        strokeDasharray="79 79"
                    />
                    <path
                        className={styles.bikeHandlebars}
                        d="m30,2h6s1,0,1,1-1,1-1,1"
                        strokeDasharray="10 10"
                    />
                    <polyline
                        className={styles.bikeFrontFork}
                        points="32.5 2,38.5 19"
                        strokeDasharray="19 19"
                    />
                </g>
            </svg>
        </div>
    );
}
