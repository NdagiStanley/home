<template>
  <div class="footer">Stan_MD™ ה | AD {{ year }}</div>
</template>
<script>
const d = new Date();
const currentYear = d.getFullYear();
export default {
  data() {
    return {
      year: currentYear,
    };
  },
};
</script>
