<template>
    <div class="text-5xl">
        Redireccionando ...
    </div>
</template>

<script>
export default {
    name: 'Redirect',
    mounted(){
        var search = this.$route.params.searchString;
        this.$router.push('/buscar/'+search);
    }
}
</script>