import React from "react";
import "./style.css";

export default function index() {
    return (
        <main>
            <article className="circle small-circle blue">
                <p className="blueLine1" />
                <p className="blueLine2" />
                <p className="blueLine3" />
            </article>
            <article className="circle medium-circle orange">
                <p className="orangeLine1" />
                <p className="orangeLine2" />
                <p className="orangeLine3" />
            </article>
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
