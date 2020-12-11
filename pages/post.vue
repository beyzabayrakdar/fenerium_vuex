<template>
    <div class="container">
        <article>
            <h1 class="title">What is this</h1>
            <p>Deneme yazısı.</p>
        </article>
    </div>
</template>

<script>
    export default{}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
}

article * {
    margin-bottom: 1rem;
}

aside{
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
}

.title{
    font-size: 2rem;
}
</style>