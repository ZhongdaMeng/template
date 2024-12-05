<template>
    <div>login</div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from "vue";

// 调用
import { useStore } from "@/store/index";
import router from "@/router";

const store = useStore();
const init = async () => {
    const data = {
        phoneNumber: "18236246797",
        password: "123456a",
        group: "h5",
    };
    await store.userLogin(data);
    try {
        router.push({
            name: "home",
            query: {
                projectId: "123",
                reportId: "456",
            },
        });
    } catch (error) {
        console.log(error);
    }
};
init();
</script>
<style lang='less' scoped></style>