<template>
    <div id="sidemenu" ref="el" v-bind:class="{ active: navOpen }">
        <button class="sidemenu__btn" v-on:click="navOpen = !navOpen" v-bind:class="{ active: navOpen }">
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bottom"></span>
        </button>
        <transition name="translateX">
            <nav v-show="navOpen">
                <div class="sidemenu__wrapper">
                    <ul class="sidemenu__list">
                        <li class="sidemenu__item"><router-link to="/" v-on:click="navOpen = !navOpen">Home</router-link></li>
                        <li class="sidemenu__item"><router-link to="/about-us" v-on:click="navOpen = !navOpen">About Us</router-link></li>
                        <li class="sidemenu__item"><router-link to="/our-services" v-on:click="navOpen = !navOpen">Our Services</router-link></li>
                        <li class="sidemenu__item"><router-link to="/contact-us" v-on:click="navOpen = !navOpen">Contact Us</router-link></li>

                    </ul>
                </div>
            </nav>
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'BurgerMenu',
    setup() {
        const navOpen = ref(false)
        const el = ref(null)

        return {
            navOpen,
            el
        }
    }
}
</script>

<style scoped lang="scss">
#sidemenu {
    /*background-color: grey;
    &.active {
                width: 200px;
    }*/

    nav {
        width: 270px;

        background: grey;
        position: fixed;
        top: 10;
        left: 10;
        z-index: 100;

    }

    .sidemenu {
        background-color: grey;
        &__btn {
            display: block;
            width: 60px;
            height: 60px;
            background: grey;
            border: none;
            position: relative;
            z-index: 100;
            appearance: none;
            cursor: pointer;
            outline: none;

            span {
                display: block;
                width: 20px;
                height: 2px;
                margin: auto;
                background: white;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                transition: all .4s ease;

                &.top {
                    transform: translateY(-8px);
                }

                &.bottom {
                    transform: translateY(8px);
                }
            }

            &.active {

                .top {
                    transform: rotate(-45deg);
                }

                .mid {
                    transform: translateX(-20px) rotate(360deg);
                    opacity: 0;
                }

                .bottom {
                    transform: rotate(45deg);
                }
            }

        }

        &__wrapper {
            padding-top: 5px;
        }

        &__list {
            padding-top: 50px;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        &__item {
            a {
                text-decoration: none;
                line-height: 1.6em;
                font-size: 1.6em;
                padding: .5em;
                display: block;
                color: white;
                transition: .4s ease;

                &:hover {
                    background: lightgrey;
                    color: dimgrey;
                }
            }
        }
    }
}

.translateX-enter {
    transform: translateX(-200px);
    opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
    transform-origin: top left 0;
    transition: .2s ease;
}

.translateX-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
</style>
