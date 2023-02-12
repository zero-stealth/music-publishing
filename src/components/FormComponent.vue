<script setup>
import { ref } from "vue";

const first = ref();
const last = ref();
const company = ref();
const email = ref();
const phone = ref();
const song = ref();
const artist = ref();
const production = ref();
const media = ref();
const terms = ref();
const territory = ref();
const msg = ref();

const reset = () => {
first = "";
last = "";
company = "";
email = "";
phone = "";
song = "";
artist ="";
production = "";
media = "";
terms = "";
territory = "";
msg = "";
}

const submit = () => {

reset();
}

</script>
<template>
    <div class="form-container">
        <form action="" @click.prevent="submit" class="form-cd">
            <div class="form-labeled">
                <label for="">First name</label>
                <input type="text" class="form-input" placeholder="kelvin" v-model="first">
            </div>
            <div class="form-labeled">
                <label for="">Last name</label>
                <input type="text" class="form-input" placeholder="penguin" v-model="last">
            </div>

            <div class="form-labeled">
                <label for="">Company name</label>
                <input type="text" class="form-input" placeholder="penguin LTD" v-model="company">
            </div>

            <div class="form-labeled">
                <label for="">Email</label>
                <input type="text" class="form-input" placeholder="penguin@gmail.com" v-model="email">
            </div>
            <div class="form-labeled">
                <label for="">Phone Number</label>
                <input type="text" class="form-input" placeholder="+2557093883" v-model="phone">
            </div>
            <div class="form-labeled">
                <label for="">Song title</label>
                <input type="text" class="form-input" placeholder="penguin chorus" v-model="song">
            </div>
            <div class="form-labeled">
                <label for="">Song Writer / Artist </label>
                <input type="text" class="form-input" placeholder="kelvin" v-model="artist">
            </div>
            <div class="form-labeled">
                <label for="">Production name</label>
                <input type="text" class="form-input" placeholder="penguin chorus" v-model="production">
            </div>
            <div class="form-labeled">
                <label for="">Media type</label>
                <select type="text" class="form-input" v-model="media">
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
                <input type="text" class="form-input" placeholder="Years of licensing" v-model="terms">
            </div>
            <div class="form-labeled">
                <label for="">Territory </label>
                <input type="text" class="form-input" placeholder="Tanzania" v-model="territory">
            </div>
            <div class="form-labeled">
                <label for="">Additional info </label>
                <textarea type="text" class="form-input" placeholder="Any relevant info" v-model="msg"></textarea>
            </div>
            <div>
                <div class="privacy">
                    <span @click="Privacy">All data privacy & laws apply</span>
                </div>
                <div class="btn-form">
                    <button class="btn-form-i " @click="reset">
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