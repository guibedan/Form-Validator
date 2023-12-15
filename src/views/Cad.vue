<script>
import { ref, onMounted, watch, inject } from 'vue';
import { useRouter } from 'vue-router';

const globalState = inject('globalState');

export default {
  setup() {
    const password = ref('');
    const showPassword = ref(false);
    const eyeImage = ref('/src/assets/img/eyeOFF.svg');
    const router = useRouter();

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    watch(showPassword, (newValue) => {
      passwordInput.type = newValue ? 'text' : 'password';
      eyeImage.value = newValue ? '/src/assets/img/eyeON.svg' : '/src/assets/img/eyeOFF.svg';
    });

    const fields = document.querySelectorAll("[required]");

    function validateField(field) {
      let foundError = false;

      for (let error in field.validity) {
        if (field.validity[error] && !field.validity.valid) {
          foundError = error;
        }
      }

      return foundError;
    }

    function customValidation(val) {
      const field = val.target;
      const error = validateField(field);

      let spanError = field.parentNode.querySelector("span.error");

      if (error) {
        spanError.classList.add("active");
        spanError.innerHTML = "Preencha Corretamente!   ";
      } else {
        spanError.classList.remove("active");
        spanError.innerHTML = "";
      }
    }

    for (let field of fields) {
      if (field !== null) {
        field.addEventListener("invalid", (val) => {
          val.preventDefault();
          customValidation(val);
        });
        field.addEventListener("blur", customValidation);
      }
    }

    const submitForm = () => {
      console.log("Clicou no botão Registrar-se");
      globalState.minhaVariavel = '';
      const globalState = reactive({
        minhaVariavel: '',
      });
      router.push('/');
    };

    // Exportando a função submitForm para que ela seja acessível no template
    return { submitForm };
  }
};
</script>


<template>
  <div class="main">
    <div class="head">
      <h2>Seja, Bem vindo!</h2>
    </div>

    <div class="form">
      <div class="left">
        <div class="welcome">
          <h1>Registrar-se agora!</h1>
          <img src="/src/assets/img/file_13351.gif" alt="">
        </div>
      </div>

      <div class="right">
        <form>
          <div class="text">
            <label>Usuário: </label>
            <input type="text" placeholder="usuário" id="login" required>
            <span class="error"></span>
          </div>

          <div class="text">
            <label>Email: </label>
            <input type="email" placeholder="email" id="email" required>
            <span class="error"></span>
          </div>

          <div class="text">
            <label>Senha: </label>
                <div class="pass">
                    <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="senha" id="password" required>
                    <img @click="togglePasswordVisibility" :src="eyeImage" id="btn">
                </div>
            <span class="error"></span>
        </div>

          <button class="button" type="submit" @click.prevent="submitForm">Registrar-se</button>
        </form>
      </div>
    </div>

    <div class="foot">
      <footer>
        <ul>
          <li class="list">
            <img src="/src/assets/img/images.png" title="Contato">
            <a href="mailto:guilherme_bedan@hotmail.com" title="Contato" target="_blank">Guilherme Bedan</a>
          </li>
          <li class="list">
            <img src="/src/assets/img/download.png" title="GitHub">
            <a href="https://github.com/guibedan" title="GitHub" target="_blank">GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;600&display=swap');


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #1c0e28;
    
}


.main {
    color: #f5f3ff;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.head {
    height: 7vh;
    margin-top: 0px;
    background-color: #12091b;
    box-shadow: 0px 10px 40px #00000036;
}

.head h2 {
    font-family: Montserrat;
    color: #00ff88;
    align-items: center;
    margin-top: 17px;
    padding-left: 10px;
}


.form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.sei-não {
    width: 35%;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.left {
    width: 50%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.left div h1 {
    font-size: 30pt;
    padding: 30px;
    color: #00ff88;
    font-family: noto sans semibold;
}

.right form {
    width: 30vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0px;
    background-color: #12091b;
    border-radius: 15px;
    box-shadow: 0px 10px 40px #00000056;
}

.text {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: white;
    margin: 10px 0px;
}

.text input {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: #1c0e28;
    color: white;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
}


.text label {
    color: white;
    font-size: 14pt;
    margin-bottom: 10px;
    font-family: Montserrat;
}

.text input::placeholder {
    color: white;
    text-transform: uppercase;
    font-family: Montserrat;
}

.text img {
    width: 25px;
    cursor: pointer;
    padding-left: 5px;
}

.text span {
    color: #b20000;
    font-family: noto sans semibold;
    font-size: 10pt;
}

.button {
    background-color: #4D1B7B;
    width: 60%;
    padding: 15px 0px;
    margin: 25px 25px;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bolder;
    color: white;
    box-shadow: 0px 10px 40px #00000056;
}

.button:hover {
    background-color: #5E3188;
}

.foot {
    height: auto;
}

.foot footer {
    background-color: #12091b;
    flex-direction: column;
    box-shadow: 0px 10px 40px #00000036;
}

.foot footer ul {
    padding: 20px;
    border-radius: 5px;
    width: 250px;
}

.list {
    padding: 5px;
    font-size: 14pt;
}

.list {
    list-style: none;
    right: 100px;
}

.list a{
    padding-left: 10px;
    color: white;
    text-decoration: none;
    font-family: Montserrat;
    color: #00ff88;
}

.list li {
    align-items: center;
    justify-content: center;
}

.list img {
    width: 12%;
    border-radius: 50px;
}




@media only screen and (max-width: 1200px) {
    .right {
        height: auto;
    }
}

@media only screen and (max-width: 950px) {
    .text {
        width: 85%;
    }
    .right {
        width: 45vw;
        height: auto;
    }

    .right form {
        height: 400px;
    }

    .form {
        height: auto;
    }
}

.pass {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    background-color: #1c0e28;
    box-shadow: 0px 10px 40px #00000056;
    padding: 2px;
    padding-right: 10px;
    border-radius: 5px;
}

@media only screen and (max-width: 650px) {
    
    .main {
        display: flex;
        width: 100%;
        justify-content: center;
    }
    
    .form {
        flex-direction: column;
        /* width: 100%; */
    }

    .right form {
        width: 100vw;
    }

    .left h1 {
        font-size: 14pt;
    }
    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
    }
    .right {
        width: 70vw;
        height: auto;
        margin-bottom: 25px;
    }

    .foot {
        margin-top: 50px;
        width: 100%;
    }
}
</style>
