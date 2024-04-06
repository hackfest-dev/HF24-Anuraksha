import React from "react";
import Navbar from "../components/Navbar";
import { RxCrossCircled } from "react-icons/rx";

const Inbox = () => {
    return (
        <section>
            <Navbar />
            <div className=' pt-14'>
                <h1 className='text-2xl font-bold text-center'>Inbox</h1>
                <div class='w-full max-w-md p-4 bg-background  rounded-lg shadow sm:p-8  '>
                    <div class='flex items-center justify-between mb-4'>
                        <h5 class='text-xl font-bold leading-none text-gray-900 '>
                            Latest Messages
                        </h5>
                        <a
                            href='#'
                            class='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
                        >
                            View all
                        </a>
                    </div>
                    <div class='flow-root'>
                        <ul
                            role='list'
                            class='divide-y divide-gray-200 dark:divide-gray-700'
                        >
                            <li class='py-3 sm:py-4'>
                                <div class='flex items-center'>
                                    <div class='flex-shrink-0'>
                                        <img
                                            class='w-8 h-8 rounded-full'
                                            src='/docs/images/people/profile-picture-1.jpg'
                                            alt='Neil image'
                                        />
                                    </div>
                                    <div class='flex-1 min-w-0 ms-4'>
                                        <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                                            Neil Sims
                                        </p>
                                        <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                        <RxCrossCircled />
                                    </div>
                                </div>
                            </li>
                            <li class='py-3 sm:py-4'>
                                <div class='flex items-center '>
                                    <div class='flex-shrink-0'>
                                        <img
                                            class='w-8 h-8 rounded-full'
                                            src='/docs/images/people/profile-picture-3.jpg'
                                            alt='Bonnie image'
                                        />
                                    </div>
                                    <div class='flex-1 min-w-0 ms-4'>
                                        <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                                            Bonnie Green
                                        </p>
                                        <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                        <RxCrossCircled />
                                    </div>
                                </div>
                            </li>
                            <li class='py-3 sm:py-4'>
                                <div class='flex items-center'>
                                    <div class='flex-shrink-0'>
                                        <img
                                            class='w-8 h-8 rounded-full'
                                            src='/docs/images/people/profile-picture-2.jpg'
                                            alt='Michael image'
                                        />
                                    </div>
                                    <div class='flex-1 min-w-0 ms-4'>
                                        <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                                            Michael Gough
                                        </p>
                                        <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                        <RxCrossCircled />
                                    </div>
                                </div>
                            </li>
                            <li class='py-3 sm:py-4'>
                                <div class='flex items-center '>
                                    <div class='flex-shrink-0'>
                                        <img
                                            class='w-8 h-8 rounded-full'
                                            src='/docs/images/people/profile-picture-4.jpg'
                                            alt='Lana image'
                                        />
                                    </div>
                                    <div class='flex-1 min-w-0 ms-4'>
                                        <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                                            Lana Byrd
                                        </p>
                                        <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                        <RxCrossCircled />
                                    </div>
                                </div>
                            </li>
                            <li class='pt-3 pb-0 sm:pt-4'>
                                <div class='flex items-center '>
                                    <div class='flex-shrink-0'>
                                        <img
                                            class='w-8 h-8 rounded-full'
                                            src='/docs/images/people/profile-picture-5.jpg'
                                            alt='Thomas image'
                                        />
                                    </div>
                                    <div class='flex-1 min-w-0 ms-4'>
                                        <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                                            Thomes Lean
                                        </p>
                                        <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                        <RxCrossCircled />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inbox;
