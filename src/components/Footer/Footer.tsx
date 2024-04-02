"use client";
import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container className="glass sticky  bg-black md:mt-5 mt-[10rem] ">
      <footer className="footer p-10 bg-balck text-white">
        <nav>
          <h6 className="footer-title text-white text-2xl ">
            Update: Enhancing Our App
          </h6>
          <a
            className="link link-hover text-xl text-[#FAAF00]"
            target="_blank"
            href="https://aaraf5400@gmail.com/"
          >
            I'm excited to share that I'm currently hard at work enhancing our
            app with exciting new features! I'm dedicated to improving your
            experience, and I can't wait to unveil what I've been working on.
            Stay tuned for updates!
          </a>
          {/* <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a> */}
        </nav>
      </footer>
    </Container>
  );
};

export default Footer;
