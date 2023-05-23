<template>
    <div>
        <h1>
            <slot name="Title"></slot>
        </h1>
        <div class="mt-10" >
            <slot name="Paragraphes1"></slot>
        </div>
        <div class="mt-10 " >
            <slot name="Paragraphes2"></slot>
        </div>
        <div class="mt-10 " >
            <slot name="Paragraphes3"></slot>
        </div>
        <div class="mt-10 mb-6 paragrapheLeft" >
            <slot name="ParagraphesLeft"></slot>
        </div>
        <slot name="List">
            <ul class="list">
                <li v-for="item in ItemsList" :key="item">{{item}}</li>
            </ul>
        </slot>
        <div class="">
            <h4 class="mt-10">
                <slot name="smallTitle1"></slot>
            </h4>
            <div class="mt-5">
                <slot name="text1"></slot>
            </div>
        </div>
        <div class="">
            <h4 class="mt-10">
                <slot name="smallTitle2"></slot>
            </h4>
            <div class="mt-5">
                <slot name="text2"></slot>
            </div>
        </div>
        <div class="">
            <h4 class="mt-10">
                <slot name="smallTitle3"></slot>
            </h4>
            <div class="mt-5">
                <slot name="text3"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list{
    margin-left: 2rem;
    li{
        text-align:left !important;

    }
    li::after{
        color: rgba(0, 0, 0,0.65)
    }
  }

.paragrapheLeft{
    text-align: left;
}

a{
    color: #50B848 !important;
}
</style>
