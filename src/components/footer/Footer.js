import Link from "next/link";
import Image from 'next/image';





export default function Footer() {
    return (
    <footer className="bg-gradient-to-r from-black to-blue-500">
        <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
            <a className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Herdians
                </span>
            </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a
                    href="https://github.com/rizkyher"
                    className="hover:underline hover:text-white "
                    >
                    Github
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.linkedin.com/in/rizky-herdiansyah-a237a4268/"
                    className="hover:underline hover:text-white "
                    >
                    LinkedIn
                    </a>
                </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-white ">
                    Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-white ">
                    Terms &amp; Conditions
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a href="https://github.com/rizkyher" className="hover:underline">Herdians™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a
                    href="https://github.com/rizkyher"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                    <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor"
                    viewBox="0 0 24 24" >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span className="sr-only">GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/rizky-herdiansyah-a237a4268/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4" 
                    fill="currentColor"
                    viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a
                    href="https://twitter.com/"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                    <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                    >
                    <path
                        fillRule="evenodd"
                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                </a>
            </div>
        </div>
        </div>
    </footer>
    );
}