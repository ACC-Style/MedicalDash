<template>
	<div>
		<div class="grid-x">
			<loginLogo></loginLogo>
		</div>
		<div class="grid-x">
			<div class="cell small-12 medium-10 large-8 m_auto" style="max-width:54em">
				<div class="card shadow_2 cell bg_secondary-n2 br_primary-n4">
					<div
						class="card-divider c_white font_bold font_3 p_4 texture_dust"
						style="z-index:10"
						v-bind:class="{'bg_alert-n3': pageHasError() , 'bg_primary-n3': !pageHasError()}"
						@click="pageValidation()"
					>
						<transition name="crossFade" mode="out-in">
							<span v-if=" mode == 'login'">Login</span>
							<span v-if="mode == 'resetStart'">Password Reset</span>
						</transition>
					</div>
					<div class="card-section relative">
						<transition name="slideInDown">
							<div
								v-if="pageHasError()"
								style="z-index:0"
								class="bg_alert-n1 c_white font_0 m-b_0 m_n4 p_3"
							>
								<p class="m-b_0">
									<span class="font_bold">Error Loging In:</span>
									{{pageError}}
								</p>
							</div>
						</transition>
						<transition name="slideInRight" mode="out-in">
							<div v-if=" mode == 'login' " key="login">
								<form class="grid-container clearfix">
									<div class="grid-x grid-padding-x p-y_3">
										<div class="medium-6 cell">
											<inputUsername
												class="m-t_2 m-t_0:md"
												:label="'Username'"
												:required="true"
												:pageHasError="pageHasError()"
												:value="username"
												:hint="''"
												v-on:update:username="username = $event"
											></inputUsername>
											<div class="grid-x font_n2 m-t_2">
												<div class="switch tiny radius cell shrink">
													<input
														class="switch-input"
														id="tinySwitch_rememberMe"
														type="checkbox"
														name="exampleSwitch"
													>
													<label class="bg_secondary-n5 switch-paddle" for="tinySwitch_rememberMe">
														<span class="show-for-sr">Keep Me Logged In</span>
													</label>
												</div>
												<label
													class="switch-value cell auto font_bold p-l_3 c_secondary-3 font-regular"
													for="tinySwitch_rememberMe"
												>Keep Me Logged In</label>
											</div>
										</div>
										<div class="medium-6 cell">
											<inputPassword
												class="m-t_4 m-t_0:md"
												:label="'Password'"
												:required="true"
												:pageHasError="pageHasError()"
												:value="password"
												:hint="''"
												v-on:update:password="password = $event"
											></inputPassword>
											<div
												class="h:underline float-right m-t_3 m-t_0:md c_primary font_n1"
												@click="onModeChange('resetStart')"
											>reset my password</div>
										</div>
									</div>
								</form>
								<div class="grid-container clearfix">
									<div class="grid-x justify-end">
										<div class="medium-8 cell"></div>
										<div class="medium-4 cell m-t_4 m-t_0:md">
											<a
												@click="pageValidation()"
												v-if="!submitDisabled()"
												class="button display-block c_white m-b_0 br_radius expanded disabled br_primary-n3"
											>
												Log In
												<i class="fal fa-ban"></i>
											</a>
											<router-link
												to="/dashboard"
												v-if="submitDisabled()"
												class="button display-block c_white m-b_0 br_radius expanded"
											>
												Log In
												<i class="fal fa-arrow-alt-right"></i>
											</router-link>
										</div>
									</div>
								</div>
							</div>
							<div v-if="mode == 'resetStart'" key="start">
								<form class="grid-container m_auto" style="max-width:35em;">
									<div class="grid-x">
										<div class="cell auto">
											<p class="font_1">Select the most convient way to reset your password</p>
											<ul class="no-bullet">
												<li>
													<a
														href
														class="button secondary expanded br_radius hollow h:bg_secondary-4"
													>Text me an unlock code</a>
												</li>
												<li>
													<a
														href
														class="button secondary expanded br_radius hollow h:bg_secondary-4"
													>Email me a reset link</a>
												</li>
												<li>
													<a
														href
														class="button secondary expanded br_radius hollow h:bg_secondary-4"
													>Answer security questions</a>
												</li>
												<li
													@click="onModeChange('login')"
													class="text-center h:bg_secondary-5 font_0 underline h:none c_primary center p-x_5 p-y_2 br_radius"
												>go back to login</li>
											</ul>
										</div>
									</div>
								</form>
							</div>
						</transition>
					</div>
					<div class="texture_dark p_3 text-center">
						<a class="link secondary h:underline">I don't have an account</a>
					</div>
				</div>
				<div class="p_3 font_n1 text-center">
					<router-link class="link secondary underline" to="/about">
						<i class="fas fa-info-square"></i> About this utility
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import inputPassword from "@/components/inputPassword.vue";
import inputUsername from "@/components/inputUsername.vue";
import loginLogo from "@/components/loginLogo.vue";

export default {
	name: "login",
	components: {
		inputPassword,
		inputUsername,
		loginLogo
	},
	data() {
		return {
			username: "",
			password: "",
			pageError: "",
			mode: "login"
		};
	},
	methods: {
		submitDisabled: function() {
			if (this.username != "" && this.password != "") {
				return true;
			}
			return false;
		},
		pageHasError: function() {
			if (this.pageError != "") {
				return true;
			}
			return false;
		},
		pageValidation() {
			if (this.pageError == "") {
				this.pageError =
					"Your email and password does not match our records.";
			} else {
				this.pageError = "";
			}
		},
		onModeChange(value) {
			this.pageError = "";
			this.mode = value;
		}
	}
};
</script>
