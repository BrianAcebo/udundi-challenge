<template>
    <div class="cta-container d-flex flex-row justify-content-start align-items-center" @click="expandCard">
        <div class="card-container d-inline-block overflow-hidden position-relative" :class="{expand: toggleCard}">
            <img v-if="!toggleCard" class="card-plus w-100 d-block" :src="require(`@/assets/media/img/icons/Plus.svg`)" alt="Plus icon" />

            <div class="card-wrapper text-start" :class="{'fade-in-left': toggleCard}">
                <img class="card-exit" :class="{'position-absolute': toggleCard}" :src="require(`@/assets/media/img/icons/Close.svg`)" alt="Close icon" />

                <h2 class="d-block">{{title}}</h2>
                <div class="divider"></div>
                <p class="d-block">{{text}}</p>

                <button class="cta-btn">{{cardCtaText}}</button>
            </div>
        </div>

        <p class="card-cta-text d-inline-block" v-if="!toggleCard">{{ctaBtnText}}</p>
    </div>
</template>


<script>
    export default {
        name: 'CircleBtn',
        props: {
            text: String,
            title: String,
            ctaBtnText: String,
            cardCtaText: String,
            openCard: Boolean,
        },
        data() {
            return {
                toggleCard: false
            }
        },
        methods: {
            expandCard(e) {

                // If card is already expanded, we only want the X icon to close it
                // Otherwise then any click on the parent element will open the card

                if (this.toggleCard) {

                    // Check if the event target was the X icon
                    // And send the data up to the parent component
                    if (e.target.classList.contains('card-exit')) {
                        this.toggleCard = !this.toggleCard
                        this.$emit('update:parent', this.toggleCard);
                    }

                } else {

                    // Reset the toggle card variable to it's opposite
                    // And send the data up to the parent component
                    this.toggleCard = !this.toggleCard;
                    this.$emit('update:parent', this.toggleCard);
                }
            }
        }
    }
</script>


<style scoped lang="scss">
    @import "../../assets/styles/variables.scss";

    /* The CTA plus button with "More Details" */
    .cta-container {
        cursor: pointer;

        .card-cta-text {
            color: $secondary-color;
            font-family: $font-sans;
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.625px;
            margin: 0 0 0 22px;
        }
    }


    /* 
        The entire card container starts as a circle
        that expands to a card when clicked using the
        cubic-bezier transition
    */
    .card-container {
        width: 43px;
        height: 43px;
        border-radius: 50%;
        transition: all 500ms cubic-bezier(0.93, 0.1, 0.42, 0.91);
        z-index: 10;
        color: $primary-color;

        &.expand {
            height: 702px;
            width: 580px;
            background: $secondary-color;
            border-radius: 0;
            box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.15);

             .card-plus {
                display: none;
            }
        }
    }


    /* General wrapper for the text and info inside of the card */
    .card-wrapper {
        width: 100%;
        padding: 72px 72px 77px 66px;

        .card-exit {
            top: 22px;
            right: 22px;
            width: 22px;
            height: 22px;
            color: $primary-color;
            cursor: pointer;
        }

        h2 {
            font-family: $font-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 66px;
            line-height: 85px;
            margin-bottom: 11px;
            color: $primary-color;
        }

        .divider {
            background: linear-gradient(to right, $primary-color, $secondary-color#fff);
            width: 275px;
            height: 2px;
            margin-bottom: 25px;
        }

        p {
            font-family: $font-sans;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.35px;
            color: $primary-color;
            margin-bottom: 29px;
        }

        .cta-btn {
            /* Container */
            width: 235px;
            height: 55px;
            background: linear-gradient(90deg, $primary-color 0%, #A36754 100%);
            border: 1px solid #979797;  

            /* Text */
            font-family: $font-sans;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1.69286px;
            color: $secondary-color;
        }
    }

    @media screen and (max-width: 796px) {
        .cta-container {
            .card-cta-text {
                font-size: 20px;
                line-height: 30px;
                letter-spacing: 0.3px;
                margin: 0 0 0 15px;
            }
        }

        .card-container {
            width: 35px;
            height: 35px;

            &.expand {
                height: auto;
                width: 100%;
                background: $secondary-color;
                border-radius: 0;
                box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.15);
            }
        }

        .card-wrapper {
            padding: 35px;

            .card-exit {
                top: 20px;
                right: 20px;
                width: 15px;
                height: 15px;
            }

            h2 {
                font-size: 35px;
                line-height: 50px;
                margin-bottom: 10px;
            }

            p {
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 0.35px;
                margin-bottom: 25px;
            }

            .cta-btn {
                /* Container */
                width: 175px;
                height: 50px;

                /* Text */
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 1.69286px;
            }
        }
    }
</style>