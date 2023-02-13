<script setup>
import { ref } from "vue";

const first = ref('');
const last = ref('');
const company = ref('');
const email = ref('');
const phone = ref('');
const song = ref('');
const artist = ref('');
const production = ref('');
const media = ref('');
const terms = ref('');
const territory = ref('');
const msg = ref('');
const phoneNumber = ref("+255685977148");

const submit = () => {
    window.open(
      `https://wa.me/${phoneNumber.value}?text=
      *Title: License form*,
      *Name*: ${first.value} ${last.value},
      *Company Name*: ${company.value},
      *Email*: ${email.value},
      *Phone Number*: ${phone.value},
      *Song title*: ${song.value},
      *Artist*: ${artist.value},
      *Production Name*: ${production.value},
      *Media type*: ${media.value},
      *Terms*: ${terms.value},
      *Territory*: ${territory.value},
      *Additional info*: ${msg.value}`,
      "_blank");
}

</script>
<template> 
    <div class="form-container">
        <form action="" @submit.prevent="submit" class="form-cd">
            <div class="form-labeled">
                <label for="">First name</label>
                <input type="text" class="form-input"  placeholder="kelvin" v-model="first" required>
            </div>
            <div class="form-labeled">
                <label for="">Last name</label>
                <input type="text" class="form-input"  placeholder="APG" v-model="last" required>
            </div>

            <div class="form-labeled">
                <label for="">Company name</label>
                <input type="text" class="form-input"  placeholder="APG LTD" v-model="company" required>
            </div>

            <div class="form-labeled">
                <label for="">Email</label>
                <input type="email" class="form-input"  placeholder="apg@gmail.com" v-model="email" required>
            </div>
            <div class="form-labeled">
                <label for="">Phone Number</label>
                <input type="text" class="form-input"  placeholder="+2557093883" v-model="phone" required>
            </div>
            <div class="form-labeled">
                <label for="">Song title</label>
                <input type="text" class="form-input"  placeholder="APG chorus" v-model="song" required>
            </div>
            <div class="form-labeled">
                <label for="">Song Writer / Artist </label>
                <input type="text" class="form-input"  placeholder="kelvin" v-model="artist" required>
            </div>
            <div class="form-labeled">
                <label for="">Production name</label>
                <input type="text" class="form-input"  placeholder="APG chorus" v-model="production" required>
            </div>
            <div class="form-labeled">
                <label for="">Media type</label>
                <select type="text" class="form-input" v-bind:value="media">
                    <option value="">Advertisements</option>
                    <option value="">Corporate</option>
                    <option value="">Games</option>
                    <option value="">Film</option>
                    <option value="">Merchandise</option>
                    <option value="">Online</option>
                    <option value="">Print</option>
                    <option value="">Radio</option>
                    <option value="">Trailer</option>
                    <option value="">Tv</option>
                    <option value="">Tv promo</option>
                    <option value="">Other</option>
                </select>
            </div>
            <div class="form-labeled">
                <label for="">Terms</label>
                <input type="text" class="form-input"  placeholder="Years of licensing i.e 2 years" v-model="terms" required>
            </div>
            <div class="form-labeled">
                <label for="">Territory </label>
                <input type="text" class="form-input"  placeholder="Tanzania" v-model="territory" required>
            </div>
            <div class="form-labeled">
                <label for="">Additional info </label>
                <textarea type="text" class="form-input"  placeholder="Any relevant info" v-model="msg"></textarea>
            </div>
            <div>
                <div class="privacy">
                    <span @click="Privacy">All data privacy & laws apply</span>
                </div>
                <div class="btn-form">
                    <button   type="submit" class="btn-form-i " @click="reset">
                        Submit
                    </button>
                </div>
            </div>
        </form>

    </div>
</template>
<style>
@import "@/style/form.css"
</style>