import React from "react";
import "./style.css";

export default function index() {
    return (
        <main>
            <article className="circle small-circle blue" />
            <article className="circle medium-circle orange" />
            <article className="flower">
                <img
                    className="responsive-img"
                    src={require("../assets/flower.svg")}
                    alt="flower"
                />
            </article>
            <article className="triangle small-orange" />
            <article className="triangle large-red" />
            <article className="triangle medium-purple" />
        </main>
    );
}
