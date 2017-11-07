<template>
  <div class="radio-box">
    <input 
        type="radio" 
        :name='name' 
        :value='value' 
        :id="radioId" 
        @change="up(value)" 
        v-if="checked && checked == value"
        checked=''
    />
    <input 
        type="radio" 
        :name='name' 
        :value='value' 
        :id="radioId" 
        @change="up(value)" 
        v-else
    />
    <label :for="radioId">{{label}}</label>
  </div>
</template>
<script type="text/babel">
  export default {
    model: {
      prop: 'checked',
      event: 'change'
    },
    data () {
      return {
        radioId: +new Date() + Math.random()
      }
    },
    props: [ 'name', 'value', 'label', 'checked' ],
    methods: {
      up (val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style scope lang="less">
.radio-box{
    display: inline-block;
    input {
        display: none;
        &:checked + label{
            border-color: #ff4d64;
            color: #ff4d64
        }
    }
    label{
        display: inline-block;
        width: 100%;
        height: 100%;
        border:1px solid #ccc;
    }
      
}
</style>