<template>
    <div class="footer">
        <div class="address">
            <span class="title">Address:</span> 310 Guelph St #3, Georgetown, ON L7G 4B1
        </div>
        <div class="copyright">
            © Copyright {{ new Date().getFullYear() }} - All Rights Reserved
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar'
}
</script>

<style scoped lang="scss">
.footer {
    background-color: rgb(233, 233, 238);
    padding: 10px;
    display: flex;
    flex-direction: row;

    .address {
        text-align: left;
        .title {
            font-weight: 600;
        }
    }
    .copyright {
        text-align: right;
        flex: 1;
    }
}

@media only screen and (max-width: 900px) {
  .footer {
    flex-direction: column;
    .address {
        text-align: center;
    }
    .copyright {
        text-align: center;
    }
  }
}

</style>
