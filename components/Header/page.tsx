import Image from "next/image"
import styles from "../../styles/Header.module.css"
import Link from "next/link"
export default function Header(){
    return(
        <div>
        <div className={`hidden sm:block ${styles.head}`}>
            <Link href={'/'}><p className={`text-green-50 pl-5 pt-3 text-xl`}>Tajemnice Miast Świata</p></Link>
            <ul className={`flex flex-col md:flex-row items-center font-mono md:font-serif  pl-3 text-red-800 font-bold pt-2  ${styles.list}`}>
                <li className="md:pr-4 pr-1 md:pl-3 pl-0">
                    <Link href={'/sneackers'}><p>Zaginione Miejsca</p></Link>
                </li>
                <li className="md:pr-4 md:pl-1 pr-1 ">
                    <Link href={'/urban'}><p>Historie o Duchach</p></Link>
                </li>
                <li className={`md:pl-1 `}>
                    <Link href={'/winter'}><p>Niezwykłe Muzea</p></Link>
                </li>
                <li className={`flex  absolute md:right-4 pb-2 right-0 w-20 `}>
                    <Image 
                        src="/images/skrzynia-ze-skarbem.jpg"
                        alt="secrets"
                        width={145}
                        height={80}
                    />
                </li>
            </ul>
        </div>
        <div>

        </div>
        </div>
    )
}