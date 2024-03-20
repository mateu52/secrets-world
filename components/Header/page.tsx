import Image from "next/image"
import styles from "../../styles/Header.module.css"
import Link from "next/link"
export default function Header(){
    return(
        <div className={`flex ${styles.head}`}>
            <Link href={'/'}><p className={`text-green-50`}>Logo</p></Link>
            <ul className={`flex items-center pl-3 text-lime-600 font-bold pt-2 ${styles.list}`}>
                <li className="pr-4 pl-3">
                    <Link href={'/sneackers'}><p>Zaginione Miejsca</p></Link>
                </li>
                <li className="pr-4">
                    <Link href={'/urban'}><p>Historie o Duchach</p></Link>
                </li>
                <li className={``}>
                    <Link href={'/winter'}><p>Niezwykłe Muzea</p></Link>
                </li>
                <li className={`flex items-center absolute right-2 pb-2`}>
                    <Image 
                        src="/images/skrzynia-ze-skarbem.jpg"
                        alt="secrets"
                        width={145}
                        height={80}
                        className={``}
                    />
                </li>
            </ul>
        </div>
    )
}