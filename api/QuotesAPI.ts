import { QuotesAPIType } from '../app/APIType/QuotesAPIType'

export const QuotesAPI: QuotesAPIType = {
    fetchQuotes: async () => {
        const response = await fetch('https://type.fit/api/quotes')
        const data = await response.json()
        return data.map((element: {text: string, author: string}) => {
            return element.text
        })
    }
}
