import styled from '@emotion/styled'

interface Props {
    quotes: Array<string>
}

export const HomeView = (props: Props) => {

    const { quotes } = props

    return (
        <Container>
            {quotes.map((quote, index) => (
                <h1 key={index}>{quote}</h1>
            ))}
        </Container>
    )
}

const Container = styled.div({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
})
