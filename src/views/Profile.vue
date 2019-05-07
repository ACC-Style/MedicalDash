<template>
	<div class="about p_4">
		<router-link to="dashboard" class="absolute br_circle bg_warning t_5 l_5 thumbnail c_white p_3">
			<i class="fas fa-arrow-left"></i>
		</router-link>
		<div class="user text-center">
			<img src="assets/img/Bruce.jpg" alt="Bruce Carper" class="br_round br_white-5 br_3 br_solid">
		</div>
		<h1 class="c_white lh_1 text-center">
			<span class="d_inline-block font_n2 lh_1">User Name:</span>
			<br>
			<span class="font_display">Bruce Carper</span>
			<br>
			<span class="d_inline-block font_1 lh_1">Level:12</span>
		</h1>
		<div class="card shadow_3 bg_primary-1 br_primary-n3">
			<div class="card-section bg_primary-n2 c_white font_bold">
				<div class="grid-x">
					<div class="cell auto">XP:134,562</div>
					<div class="cell auto text-right">CME:2</div>
				</div>
				<div class="small-12 cell">
					<div
						style="height:5px"
						class="primary progress m-b_2"
						role="progressbar"
						tabindex="0"
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuetext="25 percent"
						aria-valuemax="100"
					>
						<div class="progress-meter" style="width: 45%">
							<p class="progress-meter-text m-b_2">&nbsp;</p>
						</div>
					</div>
					<div class="grid-x">
						<div class="shrink cell text-left">12</div>
						<div class="auto cell text-center">
							<p class="font_n2 c_primary-4 m-b_2">100,254 xp to next level</p>
						</div>
						<div class="shrink cell text-right">13</div>
					</div>
				</div>
			</div>
		</div>
		<h4 class="text-center c_white">Inventory</h4>
		<div class="card shadow-3 br_primary-n3 bg_primary-n3 text-center c_white">
			<div class="card-section m_0">
				<div class="grid-y grid-margin-y font_n1 font_0:md">
					<div class="cell shrink">
						<div class="grid-x grid-margin-x">
							<div class="cell p_3 bg_primary-n2 shadow auto br_white-4 br_solid br_4">
								<div class="grid-x grid-margin-x">
									<div class="cell small-12 medium-4 shrink p-x_4 p-t_3">
										<i class="fas fa-air-freshener font-golden_3"></i>
									</div>
									<div class="cell small-12 medium-8">
										<div class="font-golden_1 font_bold m-b_0">3 refreshes</div>
										<div
											class="font-golden_0 m-t_2"
										>Reset the dash with no penalties. Start over with 3 new questions and all un used inventory.</div>
									</div>
								</div>

								<br>
							</div>
							<div class="cell p_3 bg_primary-n2 shadow auto br_white-4 br_solid br_4">
								<div class="grid-x grid-margin-x">
									<div class="cell small-12 medium-4 shrink p-x_4 p-t_3">
										<i class="fas fa-ghost font-golden_3"></i>
									</div>
									<div class="cell small-12 medium-8">
										<div class="font-golden_1 font_bold m-b_0">2 Ghosts</div>
										<div
											class="font-golden_0 m-t_2"
										>Skip the next question as it was wrong but only take a 10sec penalty.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="cell shrink">
						<div class="grid-x grid-margin-x">
							<div class="cell p_3 bg_primary-n2 shadow auto br_white-4 br_solid br_4">
								<div class="grid-x grid-margin-x">
									<div class="cell small-12 medium-4 shrink p-x_4 p-t_3">
										<i class="fas fa-alicorn font-golden_3"></i>
									</div>
									<div class="cell small-12 medium-8">
										<div class="font-golden_1 font_bold m-b_0">1 Skip</div>
										<div class="font-golden_0 m-t_2">Skip the next question as it was wrong with no penalty.</div>
									</div>
								</div>
							</div>
							<div class="cell p_3 bg_primary-n2 shadow auto br_white-4 br_solid br_4">
								<div class="grid-x grid-margin-x">
									<div class="cell small-12 medium-4 shrink p-x_4 p-t_3">
										<i class="fas fa-alarm-clock font-golden_3"></i>
									</div>
									<div class="cell small-12 medium-8">
										<div class="font-golden_1 font_bold m-b_0">1 slow down</div>
										<div class="font-golden_0 m-t_2">Give a 20 second penalty to your opponent.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-action bg_secondary-n2">
				<router-link
					to="/inapppurchase"
					class="button large secondary br_radius m_3 font_n1"
				>Buy More Items</router-link>
			</div>
		</div>
	</div>
</template>
