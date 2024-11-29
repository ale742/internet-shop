<script setup>
import CartList from '@/components/CartList.vue';


</script>



<template>
<div class="conteiner">
    <div class="row g-6 mt-5">
        <div class="col-md-3">
            <CartList/>
    <form class="row text-align: center">
  <div class="col">

    <label for="input" class="form-label">name</label>
    <input type="text" class="form-control" id="name">
  </div>
  <div class="form-check-end">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="man">
  <label class="form-check-label" for="flexRadioDefault1">
    man
  </label>
</div>
<div class="form-check-end">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="woman" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    woman
  </label>
</div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Street">
  </div>
  <div class="col-12">
    <label for="inputnumder" class="form-label">Number</label>
    <input type="tel" class="form-control" id="tel" placeholder="phone number">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">counte</label>
    <select id="inputState" class="form-select">
      <option selected>select counte</option>
      <option>...</option>
      <option>Kazachstan</option>
      <option>Russia</option>
      <option>Germania</option>
    </select>
  </div>


  <div class="col-md-6">
    <label for="inputState" class="form-label">delivery method</label>
    <select id="inputState" class="form-select">
      <option selected>metod</option>
      <option>Courier delivery</option>
      <option>Pickup</option>
      <option>Parcel terminals</option>
      <option>Mail</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">payment method</label>
    <select id="inputState" class="form-select">
      <option selected>metod</option>
      <option>bank card</option>
      <option>cash payment</option>
    </select>
  </div>





</form>
<div class="row g-3 mt-3">
    <div class="col">
        <RouterLink class="btn btn-primary" to="/about">send</RouterLink>
        <RouterLink class="btn btn-danger" to="/">back</RouterLink>



    </div>
</div>


</div>
</div>
</div>

    
</template>