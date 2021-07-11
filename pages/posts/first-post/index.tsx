import Head from 'next/head'
import Link from 'next/link'

export default () => {
    return <>
        <Head>
            <title>First Post</title>
        </Head>

        <h1>Real First Post Haha</h1>
        <Link href='/'>
            <a>Go Back</a>
        </Link>
    </>
}
