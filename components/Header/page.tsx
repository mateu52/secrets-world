import styles from "../../styles/Header.module.css"
import Link from "next/link"
export default function Header(){
    return(
        <div className={`flex ${styles.head}`}>
            <Link href={'/'}><p className={`text-green-50`}>Logo</p></Link>
            <ul className={`flex pl-3 text-lime-400 pt-2 ${styles.list}`}>
                <li className="pr-3 pl-7 pt-3">
                    <Link href={'/sneackers'}><p>Trampki</p></Link>
                </li>
                <li className="pr-3 pt-3">
                    <Link href={'/urban'}><p>Miejskie</p></Link>
                </li>
                <li className={`pt-3`}>
                    <Link href={'/winter'}><p>Zimowe</p></Link>
                </li>
            </ul>
        </div>
    )
}