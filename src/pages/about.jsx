import Link from 'next/link'

export default function About(){
    return(
        <>
        <h1>Página About</h1>
        <Link href="/" 
    legacyBehavior>
        <a>Voltar</a>
    </Link>
        </>
    )
}