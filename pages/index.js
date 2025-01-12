import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../componentsglobal/navbar";
import Homec from "./posts/home.js"
import Typewriter from "typewriter-effect/dist/core";


export default function Home() {
  return (
    <>
    <Homec/>
    </>
  );
}
