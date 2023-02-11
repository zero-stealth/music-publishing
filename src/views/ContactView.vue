<script setup>
</script>
<template>
  <div class="contact-container">
    <div class="contact-wrapper">
      <div class="sec-contact">
        <div class="contact-t">
          <h2>Contact Us</h2>
          <span>Got a question? We'd love to hear from hear</span>
        </div>
        <form action="" @click.prevent="getMessage" class="form-c">
          <div class="inner-form-c">
            <input type="text" class="contact-input contact-i">
            <input type="text" class="contact-input contact-i">
          </div>
          <div class="contact-message">
            <textarea rows="10" class="contact-input"></textarea>
          </div>
          <button class="play-btn btn-tickets" type="submit">
            Send Message
          </button>
        </form>
      </div>
      <div class="image-contact">
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/contact.css";
</style>
