export default {
  functional: true,
  props: ['level'],
  render(h, { props, data, children }) {
    console.log('1',props)
    console.log('2',data)
    console.log('3',children)
    return h(`h${props.level}`, data, children)
  }
}