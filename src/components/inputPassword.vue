<template>
	<div id="inputPassword" class="question">
		<label
			for="email"
			v-bind:class="{
				'c_primary-4': inputState == '',
				'c_alert-4': inputState == 'alert',
				'c_warning-4': inputState == 'warning'
				}"
			class="label-holder grid-x font_1 font_bold c_priamry-4"
		>
			<span class="text cell shrink">{{ label }}</span>
			<span v-if="required" class="required-holder cell shrink">
				<i class="fas fa-asterisk c_primary-n1 font_n3 vertical-align_top"></i>
			</span>
		</label>
		<div class="input-holder grid-x">
			<valueIcon :icon="'fa-key'" :inputState="inputState"></valueIcon>
			<div class="input-space cell auto">
				<input
					v-if="!passwordShow"
					class="m-b_0 bg_secondary-n4"
					type="password"
					v-model="password"
					placeholder="password"
					required
					v-bind:class="{
						'br_secondary-n5': inputState == '',
						'br_alert-n1': inputState == 'alert',
						'br_warning-n1': inputState == 'warning',
						'br_info-n1': inputState == 'info',
						'br_success-n1': inputState == 'success'
                        }"
					@change="onChange(password)"
				>
				<input
					v-if="passwordShow"
					class="m-b_0 bg_secondary-n3"
					type="text"
					v-model="password"
					placeholder="password"
					required
					v-bind:class="{
						'br_secondary-n5': inputState == '',
						'br_alert-n1': inputState == 'alert',
						'br_warning-n1': inputState == 'warning',
						'br_info-n1': inputState == 'info',
						'br_success-n1': inputState == 'success'
                        }"
					@change="onChange(password)"
				>
			</div>

			<button
				v-if="password !=''"
				type="button"
				class="c_secondary-4 h:c_black value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-n5 texture_medium"
				@click="resetPassword"
			>
				<i class="fas fa-times"></i>
			</button>

			<button
				type="button"
				class="value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-n5 texture_medium c_secondary-4 h:c_black"
				@click="passwordShowToggle"
			>
				<i v-if="passwordShow" class="fas fa-eye"></i>
				<i v-if="!passwordShow" class="fas fa-eye-slash"></i>
			</button>
		</div>
		<messageHolder v-bind:inputState="inputState" v-bind:stateMessage="stateMessage"></messageHolder>
	</div>
</template>
<script>
import messageHolder from "@/components/subComponents/inputMessageHolder.vue";
import valueIcon from "@/components/subComponents/inputValueIcon.vue";
export default {
	name: "inputPassword",
	props: {
		label: { type: String, default: "Password" },
		value: { type: String, default: "" },
		required: { type: Boolean, default: "true" },
		pageHasError: { type: Boolean, default: false }
	},
	components: {
		messageHolder,
		valueIcon
	},
	data() {
		return {
			password: this.value,
			passwordShow: false,
			inputHasError: false,
			inputState: "",
			stateMessage: ""
		};
	},
	methods: {
		passwordShowToggle() {
			this.passwordShow = !this.passwordShow;
		},
		resetPassword() {
			this.password = "";
			this.onChange(this.password);
		},
		onChange(value) {
			// write any logic around how this should be protected, escaped, validated.
			var emitvalue = "",
				passwordLength = 5;

			if (value.length > passwordLength) {
				this.inputState = "";
				this.stateMessage = "";
				emitvalue = value;
			}
			if (value.length <= passwordLength) {
				this.inputState = "alert";
				this.stateMessage = "Password is too short";
				emitvalue = "";
			}
			if (value == "") {
				this.inputState = "";
				this.stateMessage = "";
				emitvalue = "";
			}
			this.$emit("update:password", emitvalue);
		}
	}
};
</script>

<style scoped>
</style>
