<template>
  <span>Rendering Time: {{ now }}</span>
</template>

<script>
export default {
  computed: {
    now: () => {
      const d = new Date();
      const ye = new Intl.DateTimeFormat("pl", { year: "numeric" }).format(d);
      const mo = new Intl.DateTimeFormat("pl", { month: "long" }).format(d);
      const da = new Intl.DateTimeFormat("pl", { day: "2-digit" }).format(d);
      const hh = new Intl.DateTimeFormat("pl", { hour: "2-digit" }).format(d);
      const mm = new Intl.DateTimeFormat("pl", { minute: "2-digit" }).format(d);
      return `${da} ${mo} ${ye}, ${hh}:${mm}`;
    }
  }
};
</script>
