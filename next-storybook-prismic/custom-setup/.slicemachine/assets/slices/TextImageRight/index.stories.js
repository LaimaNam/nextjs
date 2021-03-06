import MyComponent from '../../../../slices/TextImageRight';

export default {
  title: 'slices/TextImageRight'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Non duis tempor proident excepteur. Ea deserunt quis aliqua aliquip. Aliquip ipsum esse Lorem fugiat do duis nisi veniam nulla incididunt ipsum ut dolor Lorem laborum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TextImageLeft = () => <MyComponent slice={{"variation":"textImageLeft","name":"TextImageLeft","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Reprehenderit proident esse culpa est labore fugiat nisi mollit veniam pariatur dolor. Exercitation consequat quis consequat do culpa.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"}},"id":"_TextImageLeft"}} />
_TextImageLeft.storyName = 'TextImageLeft'

export const _TitleImage = () => <MyComponent slice={{"variation":"titleImage","name":"TitleImage","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"paragraph","text":"Esse nulla ea id eu laborum eu elit ad amet quis enim. Amet ullamco exercitation cillum proident occaecat. Officia consectetur velit duis elit adipisicing consectetur aliquip labore laborum ea enim.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"}},"id":"_TitleImage"}} />
_TitleImage.storyName = 'TitleImage'
