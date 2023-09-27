import { defineComponent, ref } from "vue";

export default defineComponent({
  props:{
    a:{
      type:String
    }
  },
  setup(props, ctx) {
    const res=ref('')
    return ()=><input></input>
  }
})