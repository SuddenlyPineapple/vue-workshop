<template>
  <span>Rendering Time: {{ now }}</span>
</template>

<script>
export default {
  data: () => ({
    firstName: "Jan",
    lastName: "Kowalski"
  }),
  computed: {
    fullName: () => {
      return this.firstName + " " + this.lastName;
    }
  }
};
</script>
