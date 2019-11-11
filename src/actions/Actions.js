import { createRef } from 'react';

export let Ref = ([...Array(3)].map(() => createRef()));
// export const [data, setData] = useState(Data);

export function switchEr(index) {
    var pre = this.state.types;
    var i = 0;
    for (i = 0; i < pre.length; i++) {
      pre[i]['underlineClass'] = '';
      pre[i]['m_underlineclass'] = '';
    }
    pre[index]['underlineClass'] = 'flexi_active';
    pre[index]['m_underlineclass'] = 'sample_active';
    this.setState({ feature: this.state.features[index] });
    this.setState({ types: pre });

  }

  export function ScrollToElement(ref, index) {
    if(ref[index].current === null){
        console.log('nothing to see here')
    }else{
    ref[index].current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
    }
  }

  export function showChild(data,childKey) {
    
    var current = data;
    current[childKey]['class'] === 'none' ? current[childKey]['class'] = 'block' : current[childKey]['class'] = 'none';
    current[childKey]['arrow'] === '' ? current[childKey]['arrow'] = 'rotation' : current[childKey]['arrow'] = '';
    this.setState({question: current});
  }

  export default { showChild, switchEr, ScrollToElement, Ref};