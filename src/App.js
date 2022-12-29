/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";

function App() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <>
      <nav className="container relative mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src="img/logo.svg" alt="logo" />
          </div>
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Carrers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <a
            href="#"
            className="baseline hidden rounded-full bg-brightRed p-3 px-6 whitespace-nowrap text-white hover:bg-brightRedLight md:block"
          >
            Get Started
          </a>

          <button
            id="menu-btn"
            className={`hamburger block focus:outline-none md:hidden ${
              isHamburgerMenuOpen ? "open" : ""
            }`}
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="md:hidden">
          <div
            id="menu"
            className={`absolute left-6 right-6 mt-10 ${
              isHamburgerMenuOpen ? "flex" : "hidden"
            } flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md sm:w-auto sm:self-center`}
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>

      <section>
        <div className="container mx-auto mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:flex-row">
          <div className="mb-32 flex flex-col space-y-12 md:w-1/2">
            <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
              Bring everyone together to build better projects
            </h1>
            <p className="max-2-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="baseline rounded-full bg-brightRed p-3 px-6 whitespace-nowrap text-white hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="flex justify-end md:w-1/2">
            <img src="img/illustration-intro.svg" alt="illustration" />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto mt-10 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-center text-4xl font-bold">
              What's different about manage?
            </h2>
            <p className="max-w-md text-center text-darkGrayishBlue">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="md:w1/2 flex flex-col space-y-8">
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="mb-4 hidden text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px5 mx-auto mt-32 max-w-6xl text-center">
          <h2 className="text-center text-4xl font-bold">
            What's Different About Manage?
          </h2>

          <div className="mt-24 flex flex-col md:flex-row md:space-x-6">
            <div className="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3">
              <img src="img/avatar-anisha.png" className="-mt-14 w-16" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            <div className="mt-14 flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:mt-0 md:flex md:w-1/3">
              <img src="img/avatar-ali.png" className="-mt-14 w-16" alt="" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>

            <div className="mt-14 flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:mt-0 md:flex md:w-1/3">
              <img
                src="img/avatar-richard.png"
                className="-mt-14 w-16"
                alt=""
              />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
          <div className="my-16">
            <a
              href="#"
              className="baseline rounded-full bg-brightRed p-3 px-6 whitespace-nowrap text-white hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brightRed" id="cta">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0 md:py-12">
          <h2 className="text-center text-5xl font-bold leading-tight text-white md:max-w-xl md:text-left md:text-4xl">
            Simplify how your team works today
          </h2>
          <a
            href="#"
            className="baseline hover:bg-grey-300 rounded-full bg-white p-3 px-6 whitespace-nowrap text-brightRed shadow-2xl"
          >
            Get Started
          </a>
        </div>
      </section>

      <footer className="bg-veryDarkBlue">
        <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright © 2022, All Rights Reserved
            </div>
            <div>
              <img src="img/logo-white.svg" className="h-8" alt="" />
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#">
                <img src="img/icon-facebook.svg" alt="" className="h-8" />
              </a>
              <a href="#">
                <img src="img/icon-youtube.svg" alt="" className="h-8" />
              </a>
              <a href="#">
                <img src="img/icon-twitter.svg" alt="" className="h-8" />
              </a>
              <a href="#">
                <img src="img/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              <a href="#">
                <img src="img/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div>
          </div>
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 rounded-full px-4 focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright © 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
