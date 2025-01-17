import Link from "next/link";
import Image from "next/image";

import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header(){
    return(
        <div>
           <div className="navbar">
            <div className="logo">
            <Image src={"/Logo1.png"}
            width={185} height={41} alt="Picture of the author" />
            </div>
            <div className="navbtns">
              <ul className="head">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/Shop"}><li>Shop</li></Link>
                <Link href={"/Blog"}><li>Blog</li></Link>
                <Link href={"/Contact"}><li>Contact</li></Link>
              </ul>
            </div>
            <div className="icons">
              <MdPersonOutline/>
              <CiSearch/>
              <GoHeart/>
              <AiOutlineShoppingCart/>

            </div>
           </div>
        </div>
    );
}