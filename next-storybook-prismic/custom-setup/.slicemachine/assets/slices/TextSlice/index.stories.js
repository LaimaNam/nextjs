import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Sint amet aliquip eiusmod enim reprehenderit eiusmod fugiat anim veniam laborum ad consequat. Ex exercitation commodo commodo non consequat do.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"TwoColumn","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Reprehenderit exercitation aliqua excepteur est id adipisicing velit anim est.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'TwoColumn'
