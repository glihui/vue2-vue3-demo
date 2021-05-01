<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <!-- <customization-7></customization-7> -->

    <functional-com level='1'>是</functional-com>

    <plastic-button>自定义元素</plastic-button>


    <RefDemo msg="Welcome to Your Vue.js App"/>
    
    <my-component id="my-id" class="my-class"></my-component>

    <AsyncComponent></AsyncComponent>

    <input type="button" required="required"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RefDemo from '@/components/RefDemo'
import ErrorComponent from '@/components/ErrorComponent';
import LoadingComponent from '@/components/LoadingComponent';
import MyComponent from '@/components/Attrs';

import FunctionalCom from '@/components/functional';

// import customization from '@/components/customization-7';
// import AsyncComponent from '@/components/AsyncComponent'
// const AsyncComponent = () => import('@/components/AsyncComponent')
const AsyncComponent = () => ({
  component: () => import('@/components/AsyncComponent'),
  delay: 200,
  timeout: 300,
  error: ErrorComponent,
  loading: LoadingComponent
})


export default {
  name: 'Home',
  components: {
    RefDemo,
    AsyncComponent,
    ErrorComponent,
    LoadingComponent,
    MyComponent,
    FunctionalCom
    // customization
  }
}
</script>
