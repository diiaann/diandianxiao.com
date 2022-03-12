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

      <div className="container mx-auto max-w-4xl p-5 sm:p-6 md:p-10">
      <Header />
      <h1>This is the largest header</h1>
      <p>
        A power tool is a tool that is actuated by an additional power source and mechanism other than the solely manual labor used with hand tools. The most common types of power tools use electric motors. Internal combustion engines and compressed air are also commonly used. Other power sources include steam engines, direct burning of fuels and propellants, such as in powder-actuated tools, or even natural power sources such as wind or moving water. Tools directly driven by animal power are not generally considered power tools.
      </p>
    <h2>Energy Sources</h2>
    <h3>Battery Types</h3>
    <p>Currently as of 2021, an electric motor is the most popular choice to power stationary tools, though in the past they were powered by windmills, water wheels, and steam. Some museums and hobbyists still maintain and operate stationary tools powered by these older power sources.</p>
    <h4>Foo bar</h4>
    <p>Currently as of 2021, an electric motor is the most popular choice to power stationary tools, though in the past they were powered by windmills, water wheels, and steam. Some museums and hobbyists still maintain and operate stationary tools powered by these older power sources.</p>
    <h4>Another Header</h4>
    <p>Currently as of 2021, an electric motor is the most popular choice to power stationary tools, though in the past they were powered by windmills, water wheels, and steam. Some museums and hobbyists still maintain and operate stationary tools powered by these older power sources.</p>
      <figure><img src="https://cdn.sanity.io/images/jk66xbay/production/338c37e314897db3f76b7088cea01e03e70b3a49-3024x3420.jpg"/><figcaption>this is big sky</figcaption></figure>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
  </div>
  );
}

export default About;
