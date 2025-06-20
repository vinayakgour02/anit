import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";



export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="grid grid-cols-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 justify-between ">
                <div className="col-span-1">
                    <h3 className="text-lg font-bold my-4 underline underline-offset-4">About Us</h3>
                    <p className="text-gray-400 text-sm hover:text-white transition-all duration-300">We are a team of developers who are passionate about creating beautiful and functional websites.</p>

                    <div className="flex items-center gap-2 mt-6">
                        <FacebookIcon className="w-6 h-6 rounded-full bg-transparent border border-white p-1" />
                        <InstagramIcon className="w-6 h-6 rounded-full bg-transparent border border-white p-1" />
                        <TwitterIcon className="w-6 h-6 rounded-full bg-transparent border border-white p-1" />
                    </div>
                </div>

<div className="col-span-1 cursor-pointer   ">
    <h3 className="text-lg font-bold my-4 underline underline-offset-4">Services</h3>
    <ul className="text-gray-400 text-sm ">
        <li className="hover:text-white transition-all duration-300">Web Development</li>
        <li className="hover:text-white transition-all duration-300">Mobile App Development</li>
        <li className="hover:text-white transition-all duration-300">UI/UX Design</li>
        <li className="hover:text-white transition-all duration-300">SEO</li>
    </ul>
</div>
<div className="col-span-1 cursor-pointer   ">
                    <h3 className="text-lg font-bold my-4 underline underline-offset-4">Quick Links</h3>
                    <ul className="text-gray-400 text-sm   ">
                        <li className="hover:text-white transition-all duration-300">Home</li>
                        <li className="hover:text-white transition-all duration-300">About</li>
                        <li className="hover:text-white transition-all duration-300">Services</li>
                        <li className="hover:text-white transition-all duration-300">Contact</li>
        </ul>
</div>

                <div className="col-span-1 cursor-pointer   ">
                    <h3 className="text-lg font-bold my-4 underline underline-offset-4">Contact Us</h3>
                    <p className="text-gray-400 text-sm hover:text-white transition-all duration-300">Email: info@anextinfotech.com</p>
                    <p className="text-gray-400 text-sm hover:text-white transition-all duration-300">Phone: +91 9876543210</p>
                </div>
            </div>
            
        </footer>
    )
}