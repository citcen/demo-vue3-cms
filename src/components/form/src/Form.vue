<template>
  <el-form :label-width="labelWidth" class="form-box">
    <el-row>
      <template v-for="item in formItems" :key="item.index">
        <el-col :span="8">
          <el-form-item :label="item.labelName" :rules="item.rules">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select :placeholder="item.placeholder" style="width: 100%">
                <el-option
                  v-for="option in item.options"
                  :value="option.value"
                  :key="option.value"
                  >{{ option.title }}</el-option
                >
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker v-bind="item.otherOptions"></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { FormItem } from '@/types/form'

export default defineComponent({
  props: {
    formItems: {
      type: [] as PropType<FormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  setup() {
    // console.log(formItems)
    return {}
  }
})
</script>
<style scoped>
.form-box {
  padding: 20px 20px 20px 0;
}
</style>
