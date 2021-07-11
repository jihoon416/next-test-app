import styled from '@emotion/styled'
import Link from 'next/link'

export const HomeView = () => {
    return (
        <Container>
            <h1>Hello World!</h1>
            <Link href={'/posts/first-post'}>
                <a>This Link</a>
            </Link>
        </Container>
    )
}

const Container = styled.div({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
})
