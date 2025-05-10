import { useEffect, type JSX } from "react";
import styles from "@/components/motivation/motivation.module.css";
import { Tilt } from "react-tilt";
import { Player } from "@lottiefiles/react-lottie-player";

const defaultOptions = {
    reverse: false,
    max: 45,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

class Shape {
    el: HTMLElement;
    size: number;
    x: number;
    y: number;
    vx: number;
    vy: number;

    constructor(el: HTMLElement) {
        this.el = el;
        this.size = el.offsetWidth;
        this.x = random(0, window.innerWidth - this.size);
        this.y = random(0, window.innerHeight - this.size);
        this.vx = random(1, 1.5);
        this.vy = random(1, 1.5);
    }

    boundary(): void {
        if (this.x >= window.innerWidth - this.size) {
            this.vx *= -1;
            this.x = window.innerWidth - this.size;
        }
        if (this.y >= window.innerHeight - this.size) {
            this.vy *= -1;
            this.y = window.innerHeight - this.size;
        }
        if (this.x <= 0) {
            this.vx *= -1;
            this.x = 0;
        }
        if (this.y <= 0) {
            this.vy *= -1;
            this.y = 0;
        }
    }

    animate(): void {
        this.x += this.vx;
        this.y += this.vy;
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.boundary();
    }
}

export default function Motivation(): JSX.Element {
    let shapes: Shape[] = [];

    const update = (): void => {
        shapes.forEach((shape) => shape.animate());
        requestAnimationFrame(update);
    };

    const init = (): void => {
        const elements = document.querySelectorAll<HTMLElement>(`.${styles.shape}`);
        shapes = Array.from(elements, (el) => new Shape(el));
        update();
    };

    useEffect(() => {
        window.addEventListener("load", init, false);
        return () => window.removeEventListener("load", init);
    }, []);

    return (
        <div className={styles.motivation}>
            <div className={styles.motivationWrapper}>
                <h1>
                    Challenge yourself to build projects to become better than
                    before
                </h1>
                <p>
                    Practice makes a <span>Programmer</span> perfect
                </p>
            </div>
            <div className={styles.designWrapper}>
                <Tilt options={defaultOptions}>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/f91359da-a793-450f-b353-e04ddc138689/1AOxL0KNpa.json"
                        style={{ width: 'min(500px,100%)', background: 'transparent' }}
                    />
                </Tilt>
            </div>
            <div className={styles.glass}></div>
            <div className={styles.shapes}>
                <div className={`${styles.shape} ${styles.shapeYellow}`}></div>
                <div className={`${styles.shape} ${styles.shapeSalmon}`}></div>
                <div className={`${styles.shape} ${styles.shapeYellow}`}></div>
                <div className={`${styles.shape} ${styles.shapeSalmon}`}></div>
            </div>
        </div>
    );
}
