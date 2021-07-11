import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
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

export default Index
