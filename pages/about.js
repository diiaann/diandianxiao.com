import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'

function About() {
  return (
    <div className="h-full h-screen">
      <Head>
		    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6338032/7337432/css/fonts.css" />
        <title>Dian Xiao</title>
      </Head>
      <Header />

      <div className="container mx-auto max-w-4xl px-5 sm:px-6 md:px-10 mb-10">
      <h2>About me</h2>
      <p className="text-lg">
        I'm a product designer working in digital health based out of San Francisco.
      </p>
      <p className="text-lg">
        When I'm not working, you can find me cooking up a storm, doing diy
        projects around the house, biking the hills of Northern California,
        and watching{" "}
        <a
          className="underline text-yellow-700"
          href="https://youtu.be/GSR5bqYcmTY?t=587"
        >
          bike
        </a>{" "}
        <a
          className="underline text-yellow-700"
          href="https://youtu.be/XFqfqO6CQko?t=3380"
        >
          racing
        </a>
        &nbsp;
        <a
          className="underline text-yellow-700"
          href="https://www.youtube.com/watch?v=7DjFy6SIViI"
        >
          on
        </a>{" "}
        <a
          className="underline text-yellow-700"
          href="https://www.youtube.com/watch?v=J6rA9zou0PU"
        >
          YouTube
        </a>
        .
      </p>

      <p className="text-lg">
        I have a{" "}
        <a className="underline text-yellow-700" href="http://julialuo.me">
          younger sister who is also a Product Designer
        </a>
        . She also attended Carnegie Mellon University where she got the
        same degree, same additional major, and same minor as me.
        (Information Systems, Human-Computer Interaction, and Communication
        Design respectively)
      </p>

      <h2>About this blog</h2>
      <p className="text-lg">
        This site is just a repository of my writing and thoughts. I've been writing for myself in random journals or Google docs but I found these pieces never got finished. I wanted to challenge myself to polish these drafts some more. Medium, Substack, tumblr didn't feel like the right place. I needed a place to publish writing without the expectation of readership but still public enough that felt like something was at stake.
      </p>
      <p className="text-lg">
        As for technical details, this site is built with{" "}
        <a href="https://nextjs.org/">
          Next.js
        </a>,{" "}
        <a href="https://sanity.io/">
          Sanity.io
        </a>,{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
        >
          tailwindcss
        </a>.
      </p>
    </div>
  </div>
  );
}

export default About;
