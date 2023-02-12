<script setup>
import { ref } from "vue";
import acoustic from "@/assets/acoustic.jpg";

const coverImg = ref();
const username = ref();
const email = ref();
const message = ref();
const errMessage = ref();
const phoneNumber = ref("+255655963224");

const sendMsg = () => {
  if (username.value != '' && email.value != '' && message.value != '') {
    window.open(
      `https://wa.me/${phoneNumber.value}?text=${message.value}`,
      "_blank");
  } else {
    errMessage.value = "Please fill all fields";
  }

  reset();
}

const reset = () => {
  username.value = '';
  email.value = '';
  message.value = '';
}
coverImg.value = acoustic;



</script>
<template>
  <div class="contact-wrapper">
    <div class="contact-container" :style="{ 'backgroundImage': `url(${coverImg})` }">
      <div class="contact-p1">
        <div class="contact-holder">
          <div class="contact-title">
            <h2>Contact Us</h2>
            <span>Got a question? We'd love to hear from you.</span>
          </div>
          <form @submit.prevent="sendMsg" class="contact-f">
            <div class="input-wrapper">
              <input type="text" placeholder="Penguin lee" class="contact-input" v-model="username">
              <input type="email" placeholder="Penguinlee@gmail.com" class="contact-input" v-model="email">
            </div>
            <div class="text-wrapper">
              <textarea cols="30" rows="10" v-model="message" class="contact-msg"></textarea>
            </div>
            <span>{{ errMessage }}</span>
            <button class="up-btn btn-tickets" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div class="contact-p2" :style="{ 'backgroundImage': `url(${coverImg})` }">
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/contact.css";
</style>