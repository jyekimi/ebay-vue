<template>
    <div>
        <!-- 문제 1 -->
        <!-- basic -->
        <p>1)</p>
        <button v-on:click='alert'>click me</button>
        <!-- 문제 2 -->
        <!-- 뷰 데이터 속성인 login 값에 따라 아래 태그가 표시되거나 미표시되게 해보세요.  -->
        <p>2)</p>
        <p v-if="login">user has been logged in</p>

        <!-- 문제 3 -->
        <!-- '<p>hello vue</p>' 를 기본 템플릿으로 갖는 로컬 컴포넌트를 한개 등록해보세요 -->
        <p>3)</p>
        <elementForInject/>
        <!-- 문제 4 -->
        <!-- 문제 3에서 등록한 컴포넌트에 아래의 num 데이터를 전달해보세요 -->
        <p>4)</p>
        <elementForInject :number="num"/>
        <!-- 문제 5 -->
        <!-- 문제 3에서 등록한 컴포넌트에서 이벤트를 발생시켜 num 데이터의 값을 변경해보세요 -->
        <p>5)</p>
        <elementForInject :number="num" v-on:genNumber="num=genNumber()"/>
    </div>
</template>

<script>
    import elementForInject from './components/element.vue'
    export default {
        name: "app.vue",
        data() {
            return {
                login: false,
                num: 10,
            }
        },
        components: {
            elementForInject
        },
        methods: {
            alert: () => {
                alert('기본 경고창')
            },
            genNumber: () => {
                return Math.ceil(Math.random() * 100);
            }
        }
    }
</script>

<style scoped>

</style>