<template>
	<div id="inputEmail" class="question">
		<label
			for="email"
			v-bind:class="{'c_alert-3': inputState == 'alert','c_warning-3': inputState == 'warning'}"
			class="label-holder grid-x font_1 font_bold c_primary-4"
		>
			<span class="text cell shrink">{{ label }}</span>
			<span v-if="required" class="required-holder cell shrink">
				<i class="fas fa-asterisk c_primary-n1 font_n3 vertical-align_top"></i>
			</span>
		</label>
		<div class="input-holder grid-x">
			<valueIcon :icon="'fa-user'" :inputState="inputState"></valueIcon>
			<div class="input-space cell auto">
				<input
					id="email"
					v-on:change="onChange(username)"
					class="input-group-field bg_secondary-n4 c_secondary-4"
					type="text"
					v-model="username"
					placeholder="youremail@acc.org"
					required
					v-bind:class="{
						'br_secondary-n5': inputState == '',
						'br_alert-1': inputState == 'alert',
						'br_warning-1': inputState == 'warning',
						'br_info-1': inputState == 'info',
						'br_success-1': inputState == 'success'
          }"
				>
			</div>
		</div>
		<messageHolder v-bind:inputState="inputState" v-bind:stateMessage="stateMessage"></messageHolder>
	</div>
</template>

<script>
import messageHolder from "@/components/subComponents/inputMessageHolder.vue";
import valueIcon from "@/components/subComponents/inputValueIcon.vue";

export default {
  name: "inputEmail",
  props: {
    label: { type: String, default: "UserName" },
    value: { type: String, default: "" },
    required: { type: Boolean, default: "true" },
    pageHasError: { type: Boolean, default: false }
  },
  data() {
    return {
      username: this.value,
      inputState: "",
      stateMessage: ""
    };
  },
  components: {
    messageHolder,
    valueIcon
  },
  methods: {
    onChange: function(value) {
      console.log(value);
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.inputState = "";
        this.$emit("update:username", value);
      } else {
        this.inputState = "alert";
        this.stateMessage = "Not an email.";
        this.$emit("update:username", "");
      }
    }
  }
};
</script>

<style scoped>
</style>
