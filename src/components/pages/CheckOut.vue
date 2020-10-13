<template>
  <div class="checkout">
    <b-card><h1>CHECKOUT</h1></b-card>
    <b-container fluid>
			<b-row>
				<b-col>
					<b-card class="presseText"></b-card>
				</b-col>
			</b-row>

			<b-row>
				<b-col>
					<b-card class="ekwagen"></b-card>
				</b-col>
				<b-col>
					<b-row>
						<b-col>
							<b-card class="summe"></b-card>
						</b-col>
						<b-col>
							<b-card class="kaufen"></b-card>
						</b-col>
					</b-row>
				</b-col>
				<b-col>
					<b-card class="werbung"></b-card>
				</b-col>				
			</b-row>
    </b-container>
  </div>
</template>

<script>
export default {
	name: 'CheckOut',
	data() {
		return {
			sum,
			products
		}
	},
	methods: {
		ekUebernehmen: function(einkaufswagen) {
			this.products = einkaufswagen
		},
	},
};
</script>

<style>
</style>