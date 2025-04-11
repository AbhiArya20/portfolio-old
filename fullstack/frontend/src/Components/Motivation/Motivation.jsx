import React, { useEffect } from "react";
import styles from "./Motivation.module.css";
import { Tilt } from "react-tilt";

const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 45, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export default function Motivation() {
    let shapes;
    const min = 1;
    const max = 1.5;
    const random = (min, max) => Math.random() * (max - min) + min;

    class Shape {
        constructor(el) {
            this.el = el;
            this.size = el.offsetWidth;
            this.x = random(0, window.innerWidth - this.size);
            this.y = random(0, window.innerHeight - this.size);
            this.vx = random(min, max);
            this.vy = random(min, max);
        }
        boundary() {
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
        animate() {
            this.x += this.vx;
            this.y += this.vy;
            this.el.style.transform = `translate(${this.x}px,${this.y}px)`;
            this.boundary();
        }
    }

    function update() {
        shapes.forEach((shape) => shape.animate());
        requestAnimationFrame(update);
    }

    function init() {
        const elements = document.querySelectorAll(`.${styles.shape}`);
        elements.forEach((el) => {
            new Shape({ el });
        });
        shapes = Array.from(elements, (el) => new Shape(el));
        update();
    }

    useEffect(() => {
        window.addEventListener("load", init, false);
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
                    <dotlottie-player
                        src="https://lottie.host/f91359da-a793-450f-b353-e04ddc138689/1AOxL0KNpa.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    ></dotlottie-player>{" "}
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
