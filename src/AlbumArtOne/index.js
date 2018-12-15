import React from "react";
import "./style.css";

export default function index() {
    return (
        <main>
            <article className="circle small-circle blue fade-in-tl">
                <p className="blueLine1" />
                <p className="blueLine2" />
                <p className="blueLine3" />
            </article>
            <article className="circle medium-circle orange slide-in-blurred-tr">
                <p className="orangeLine1" />
                <p className="orangeLine2" />
                <p className="orangeLine3" />
            </article>
            <article className="flower ">
                <img
                    className="responsive-img fade-in"
                    src={require("../assets/flower.svg")}
                    alt="flower"
                />
            </article>
            <article className="triangle small-orange roll-in-left" />
            <article className="triangle large-red slide-in-blurred-bottom">
                <p className="redLine1" />
            </article>
            <article className="triangle medium-purple roll-in-blurred-right ">
                <p className="redLine1" />
            </article>
        </main>
    );
}
