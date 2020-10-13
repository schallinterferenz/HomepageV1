<template>
  <div class="login">
    <b-form>
			<b-form-text style="font-size: 20px !important; color: white !important">
				Du willst deine Musikerkarriere auf ein höheres Level bringen?<br/><br/>
			</b-form-text>
			<b-form-text style="font-size: 20px !important; color: white !important">
				Hier geht es zum Login. 
			</b-form-text>
			
      <b-form-input v-model="n" placeholder="Nickname" style="margin-top: 10px !important"></b-form-input>
      <div class="mt-2">{{ n }}</div>
      <b-form-input v-model="a" placeholder="Password"></b-form-input>
      <div class="mt-2">{{ a }}</div>
			<b-row>
				<b-col>
					<b-button>LOGIN</b-button>
				</b-col>
				<b-col>
					<b-button>REGISTER</b-button>
				</b-col>
			</b-row>
      
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
			n : "",
			a : ""
		};
  },
};
</script>

<style scoped>
.login {
  border: 1px solid white !important;
  padding: 10%;
}
</style>>
</style>