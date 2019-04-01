<template>
	<label
		class="value-space cell shrink br_solid br-w_1 p_3 p-b_2 texture_medium"
		v-bind:class="{
            'bg_secondary-n3 br_secondary-n5 c_secondary-2': inputState == '',
            'bg_alert-n3 br_alert c_alert': inputState == 'alert',
            'bg_warning-n3 br_warning c_warning': inputState == 'warning',
            'bg_info-n3 br_info c_info': inputState == 'info',
            'bg_sucess-n3 br_sucess c_sucess': inputState == 'sucess'
            }"
	>
		<i class="fal fa-key" v-bind:class="icon"></i>
	</label>
</template>

<script>
export default {
  name: "valueIcon",
  props: {
    inputState: { type: String, default: "" },
    icon: { type: String, default: "fa-check" }
  }
};
</script>
