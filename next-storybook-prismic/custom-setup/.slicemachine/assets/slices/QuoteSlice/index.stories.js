import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Magna occaecat eu minim mollit aliquip enim occaecat magna cillum ullamco irure quis fugiat aute occaecat.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"QuoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Eu aute enim eu exercitation amet ea.","spans":[]}],"reference":[{"type":"paragraph","text":"Do consequat officia voluptate proident. Consequat eiusmod non mollit laboris est nostrud. Reprehenderit nisi esse officia ut veniam.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'QuoteReference'
