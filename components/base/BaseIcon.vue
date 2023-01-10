<script>
  import ICONS from '@/assets/icons'

  export default {
    name: 'BaseIcon',
    props: {
      name: {
        type: String,
        default: '',
      },
      title: {
        type: [String, Object],
        default: '',
      },
      size: {
        type: [String, Number],
        default: 24,
      },
      height: {
        type: [String, Number],
        default: 0
      },
      color: {
        type: String,
        default: 'currentColor',
      },
      accent: {
        type: Boolean,
        default: false
      },
      filled: {
        type: Boolean,
        default: true,
      },
      strokeWidth: {
        type: [String, Number],
        default: 1,
      },
    },
    computed: {
      path() {
        return ICONS[this.name].path
      },
      fill() {
        return this.filled ? this.color : 'none'
      },
    },
    render(createElement) {
      const h = createElement
      const attrs = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: this.size,
        height: this.size,
        viewBox: ICONS[this.name].viewBox,
      }
      return h(
        'svg',
        {
          attrs,
          style: {
            width: this.size + 'px',
            height: this.height ? this.height : this.size + 'px',
            'font-size': this.size + 'px',
            color: this.color,
          },
        },
        [
          h('title', this.title),
          [
            h(
              'g',
              {
                attrs: {
                  fill: this.fill,
                  stroke: this.color,
                },
              },
              [
                h('path', {
                  attrs: {
                    d: this.path,
                    'stroke-width': this.strokeWidth,
                  },
                }),
              ]
            ),
          ],
        ]
      )
    },
  }
</script>
