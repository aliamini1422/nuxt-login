<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
     <slot />
    </div>
    <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full p-3 pr-10 text-right text-sm text-gray-900 bg-[#F2F2F2] rounded-lg self-stretch border border-transparent
        outline outline-transparent focus:border-[#4ec083] duration-700"
        :placeholder="placeHolder" :required="required"/>

  </div>
</template>

<script setup>

  // const { placeHolder, modelValue } = defineProps(['type', 'placeHolder', 'modelValue'])

  const { required, type, placeHolder, modelValue } = defineProps({
      required: {
        type: Boolean,
        default: true
      },
      type:{
        type: String,
        default: "text"
      },
    placeHolder:{},
    modelValue:{}
    }
  )
  defineEmits(['update:modelValue'])

</script>