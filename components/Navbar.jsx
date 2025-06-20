'use client';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-transparent mt-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-white">
                            <Image src="/anextinfotech logo final001.png" alt="Logo" width={100} height={100} />
                        </Link>
                    </div>
                    <div className="ml-10 flex items-baseline space-x-4">
                        <Link href="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                            About
                        </Link>
                        <Link href="/services" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                            Services
                        </Link>
                        <Link href="/case-studies" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                            Case Studies
                        </Link>
                    </div>

                    <Link href="/contact" className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">
                        Let's Talk
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 