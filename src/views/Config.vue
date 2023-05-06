<template>
  <div style="text-align: left">
    <a-form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :label-col="labelCol"
        :validate-messages="validateMessages"
        @finish="onFinish"
    >
      <a-form-item :name="['user', 'name']" label="Name" :rules="[{ required: true }]" >
        <a-input v-model:value="formState.user.name" />
      </a-form-item>
      <a-form-item :name="['user', 'email']" label="Email" :rules="[{ type: 'email' }]">
        <a-input v-model:value="formState.user.email" />
      </a-form-item>
      <a-form-item :name="['user', 'age']" label="Age" :rules="[{ type: 'number', min: 0, max: 99 }]">
        <a-input-number v-model:value="formState.user.age" />
      </a-form-item>
      <a-form-item :name="['user', 'website']" label="Website">
        <a-input v-model:value="formState.user.website" />
      </a-form-item>
      <a-form-item :name="['user', 'introduction']" label="Introduction">
        <a-textarea v-model:value="formState.user.introduction" />
      </a-form-item>
      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
        <a-row >
          <a-col>
            <a-button type="primary" html-type="submit" style="margin-right: 10px">保存</a-button>
          </a-col>
          <a-col>
            <a-button style="margin-left: 10px">取消</a-button>
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>
  </div>

</template>

<script>
import { defineComponent, reactive } from 'vue';
import {useStore} from '@/stores/store';
export default ({
  setup() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
    const formState = reactive({
      user: {
        name: '',
        age: undefined,
        email: '',
        website: '',
        introduction: '',
      },
    });
    const onFinish = values => {
      console.log('Success:', values);
    };
    return {
      formState,
      onFinish,
      layout,
      validateMessages,
      labelCol: {
        style: {
          width: '150px',
        },
      },
    };
  },
  mounted() {
    console.log("im in mounted")
    const store = useStore();
    store.setCurStep(2)
    console.log(store.current_step)
  }
});
</script>


        
