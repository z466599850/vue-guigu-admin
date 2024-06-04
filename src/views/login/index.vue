<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useUserStore } from '@/store'
import { useRouter,useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time.ts'


const userStore = useUserStore()
const $route = useRoute()
const $router = useRouter()
const loginForm = reactive({
  username: 'admin',
  password: '111111',
})
const loading = ref(false)

// 表单校验
const ruleFormRef = ref()

console.log($route)
const rulesForm = reactive({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'change' },
    { min: 5, max: 10, message: '用户名长度至少6位', trigger: 'change' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'change' },
    { min: 6, max: 15, message: '密码至少6位', trigger: 'change' },
  ],
})

const login = async () => {
  await ruleFormRef.value.validate()

  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    $router.push({path: ($route.query.redirect as string) || '/'})
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `Hi, ${getTime()}好！`,
      duration: 4000,
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          ref="ruleFormRef"
          :model="loginForm"
          :rules="rulesForm"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              :maxlength="10"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :maxlength="15"
              :prefix-icon="Lock"
              show-password
              type="password"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              @click="login"
              class="login-button"
              type="primary"
              size="default"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
      ``
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}

.login-form {
  padding: 40px;
  position: relative;
  width: 80%;
  top: 30vh; // 视口宽度的百分之30
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  h1 {
    color: #fff;
    font-size: 40px;
  }
  h2 {
    margin: 20px 0;
    color: #fff;
    font-size: 20px;
  }

  .login-button {
    width: 100%;
  }
}
</style>
